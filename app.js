import prompt from 'prompt-async';
import clear from 'clear-terminal';

const propriedades = [];

async function ordenarPropriedades() {
    const propriedadesOrdenadas = [...propriedades].sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));
    
    clear();
    
    console.log('Lista de propriedades ordenadas:');
    propriedadesOrdenadas.forEach(propriedade => console.log(propriedade));
}