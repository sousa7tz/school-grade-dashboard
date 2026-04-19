import { grade } from './data.js';

const DAY_KEYS = Object.keys(grade)
    .map(Number)
    .sort((a, b) => a - b);

const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let width;
let height;
let stars = [];

function initStars() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    stars = [];
    const numStars = width < 768 ? 50 : 150;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
        });
    }
}

function animateStars() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
    }
    requestAnimationFrame(animateStars);
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initStars, 200);
});

initStars();
animateStars();

let currentIdx = new Date().getDay();
if (currentIdx === 0 || currentIdx === 6) currentIdx = 1;

let isAnimating = false;
const domContainer = document.getElementById('card-container');
const viewPortEl = document.getElementById('view-port');
const dayDotsEl = document.getElementById('day-dots');
const navPrev = document.getElementById('nav-prev');
const navNext = document.getElementById('nav-next');

function renderCard(idx) {
    const dayData = grade[idx];
    const cardMarkup = `
        <div class="day-card active" id="current-card">
            <div class="card-header">${dayData.nome}</div>
            <div class="card-body">
                ${dayData.aulas
                    .map(
                        (a) => `
                    <div class="class-item ${a[3] ? 'interval-item' : ''}">
                        <span class="class-time">${a[0]}</span>
                        <span class="class-name ${a[2] ? 'tech' : ''} ${a[3] ? 'interval-text' : ''}">${a[1]}</span>
                    </div>
                `
                    )
                    .join('')}
            </div>
        </div>
    `;
    domContainer.innerHTML = cardMarkup;
}

function updateDots() {
    if (!dayDotsEl) return;
    dayDotsEl.innerHTML = '';
    DAY_KEYS.forEach((dayKey) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'day-dot';
        btn.setAttribute('aria-label', `Ir para ${grade[dayKey].nome}`);
        btn.setAttribute('aria-current', dayKey === currentIdx ? 'true' : 'false');
        btn.dataset.day = String(dayKey);
        btn.addEventListener('click', () => goToDay(dayKey));
        dayDotsEl.appendChild(btn);
    });
}

function setNavActive(direction) {
    if (!navPrev || !navNext) return;
    navPrev.classList.toggle('is-active', direction === -1);
    navNext.classList.toggle('is-active', direction === 1);
}

function clearNavActiveSoon() {
    window.setTimeout(() => {
        if (!navPrev || !navNext) return;
        navPrev.classList.remove('is-active');
        navNext.classList.remove('is-active');
    }, 220);
}

function runDayTransition(nextIdx, direction) {
    if (isAnimating) return;
    isAnimating = true;
    setNavActive(direction);

    const outDirection = direction > 0 ? '-100vw' : '100vw';
    const inDirection = direction > 0 ? '100vw' : '-100vw';

    anime({
        targets: '#current-card',
        translateX: outDirection,
        scaleX: [1, 1.2],
        scaleY: [1, 0.9],
        opacity: [1, 0],
        duration: 400,
        easing: 'easeInQuad',
        complete: () => {
            currentIdx = nextIdx;
            renderCard(currentIdx);
            updateDots();

            anime({
                targets: '#current-card',
                translateX: [inDirection, '0vw'],
                scaleX: [1.2, 1],
                scaleY: [0.9, 1],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutQuart',
                complete: () => {
                    isAnimating = false;
                    clearNavActiveSoon();
                    const card = document.getElementById('current-card');
                    if (card) card.style.transform = 'none';
                },
            });
        },
    });
}

function changeDay(step) {
    if (isAnimating) return;

    let nextIdx = currentIdx + step;
    if (nextIdx < 1) nextIdx = 5;
    if (nextIdx > 5) nextIdx = 1;

    runDayTransition(nextIdx, step);
}

function goToDay(targetIdx) {
    if (targetIdx === currentIdx || isAnimating) return;
    const direction = targetIdx > currentIdx ? 1 : -1;
    runDayTransition(targetIdx, direction);
}

if (navPrev) navPrev.addEventListener('click', () => changeDay(-1));
if (navNext) navNext.addEventListener('click', () => changeDay(1));

renderCard(currentIdx);
updateDots();

let touchStartX = 0;
let touchEndX = 0;

const swipeTarget = viewPortEl || domContainer;
swipeTarget.addEventListener(
    'touchstart',
    (e) => {
        touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
);

swipeTarget.addEventListener(
    'touchend',
    (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    },
    { passive: true }
);

function handleSwipe() {
    if (isAnimating) return;
    const threshold = 50;

    if (touchEndX < touchStartX - threshold) {
        changeDay(1);
    }
    if (touchEndX > touchStartX + threshold) {
        changeDay(-1);
    }
}
