import prompt from 'prompt-async';
import clear from 'clear-terminal';

const propriedades = [];

async function ordenarPropriedades() {
    const propriedadesOrdenadas = [...propriedades].sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));

    clear();

    console.log('Lista de propriedades ordenadas:');
    propriedadesOrdenadas.forEach(propriedade => console.log(propriedade));
}
async function capturarPropriedades() {
    while (true) {
        const { propriedade } = await prompt.get(['propriedade']);
        if (propriedade.toLowerCase() === 'sair') {
            ordenarPropriedades();
            break;
        }
        propriedades.push(propriedade);
    }
}

capturarPropriedades();