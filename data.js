/**
 * Dados da grade — simula payload de API ou CMS.
 * Formato: chave 1–5 (dias úteis), aulas como [hora, nome, tech?, intervalo?]
 */
export const grade = {
    1: {
        nome: 'Segunda',
        aulas: [
            ['13:00', 'L. Portuguesa'],
            ['13:50', 'DS', true],
            ['14:40', 'DS', true],
            ['15:30', 'Intervalo', false, true],
            ['15:50', 'DS', true],
            ['16:40', 'Inglês'],
            ['17:30', 'Inglês'],
        ],
    },
    2: {
        nome: 'Terça',
        aulas: [
            ['13:00', 'L. Portuguesa'],
            ['13:50', 'História'],
            ['14:40', 'PAMI', true],
            ['15:30', 'Intervalo', false, true],
            ['15:50', 'PAMI', true],
            ['16:40', 'Física'],
            ['17:30', 'Física'],
        ],
    },
    3: {
        nome: 'Quarta',
        aulas: [
            ['13:00', 'Matemática'],
            ['13:50', 'BDII', true],
            ['14:40', 'BDII', true],
            ['15:30', 'Intervalo', false, true],
            ['15:50', 'Geografia'],
            ['16:40', 'Geografia'],
            ['17:30', 'Química'],
        ],
    },
    4: {
        nome: 'Quinta',
        aulas: [
            ['13:00', 'L. Portuguesa'],
            ['13:50', 'Matemática'],
            ['14:40', 'Química'],
            ['15:30', 'Intervalo', false, true],
            ['15:50', 'Ed. Física'],
            ['16:40', 'ECO', true],
            ['17:30', 'Matemática'],
        ],
    },
    5: {
        nome: 'Sexta',
        aulas: [
            ['13:00', 'Biologia'],
            ['13:50', 'Ed. Física'],
            ['14:40', 'História'],
            ['15:30', 'Intervalo', false, true],
            ['15:50', 'Biologia'],
            ['16:40', 'PWII', true],
            ['17:30', 'PWII', true],
        ],
    },
};
