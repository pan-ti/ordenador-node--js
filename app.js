import prompt from 'prompt-async';
import clear from 'clear-terminal';
import chalk from 'chalk';

async function ordenarPropriedades(propriedades) {
    const propriedadesOrdenadas = [...propriedades].sort((a, b) =>
        a.localeCompare(b, 'pt', { sensitivity: 'base' })
    );

    clear();
    console.log(chalk.yellow('Lista de propriedades ordenadas:'));

    propriedadesOrdenadas.forEach((propriedade) =>
        console.log(chalk.green(propriedade))
    );
}

async function capturarPropriedades() {
    const propriedades = [];

    while (true) {
        const { propriedade } = await prompt.get([
            {
                name: 'propriedade',
                description: chalk.cyan('Digite sua propriedade CSS(Ex: text-align, color, direction, etc)... (ou "SAIR" para finalizar)'),
            },
        ]);

        if (propriedade.toLowerCase() === 'sair') {
            ordenarPropriedades(propriedades);
            break;
        } else {
            propriedades.push(propriedade);
        }
    }
}

clear();
console.log(chalk.yellow('Bem-vindo ao Ordenador de Propriedades de CSS!'));
capturarPropriedades();
