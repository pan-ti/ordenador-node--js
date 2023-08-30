# ordenador-node--js
Projeto Individual - M4 - Códigos do amanhã
# Ordenador de Propriedades de CSS

Este projeto é um programa simples em Node.js que permite a você inserir propriedades de CSS e visualizar a lista ordenada dessas propriedades.

## Bibliotecas Utilizadas

- [prompt-async](https://www.npmjs.com/package/prompt-async): Uma biblioteca para facilitar a captura de entrada do usuário de forma assíncrona.
- [clear-terminal](https://www.npmjs.com/package/clear-terminal): Uma biblioteca para limpar o terminal para melhorar a experiência do usuário.
- [chalk](https://www.npmjs.com/package/chalk): Uma biblioteca para colorir o terminal com estilos de texto.

## Escolhas de Implementação

### Captura Assíncrona de Entrada

A biblioteca `prompt-async` foi escolhida para capturar a entrada do usuário de forma assíncrona, permitindo que o programa continue funcionando enquanto aguarda a entrada do usuário.

### Limpeza do Terminal

A biblioteca `clear-terminal` é usada para limpar o terminal antes de exibir a lista ordenada de propriedades. Isso proporciona uma saída mais limpa e legível para o usuário.

### Cores no Terminal

A biblioteca `chalk` é utilizada para adicionar cores aos textos exibidos no terminal. As propriedades são exibidas em verde, tornando mais fácil identificar a lista ordenada.

### Ordenação Sensível a Acentos

As propriedades são ordenadas usando o método `.sort()` com o uso de `localeCompare` para realizar uma ordenação sensível a acentos (com base na língua portuguesa) e garantir que caracteres especiais sejam tratados corretamente.

## Uso

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixar a versão mais recente do Node.js em https://nodejs.org/

2. Clone este repositório para o seu computador ou faça o download do arquivo ZIP e extraia-o.

3. No terminal, navegue até o diretório onde você clonou/extraiu o repositório.

4. Instale as dependências executando o seguinte comando:

```bash
npm install

Execute o programa com o seguinte comando:
npm start

Siga as instruções exibidas no terminal para inserir propriedades de CSS. Digite "SAIR" para encerrar e exibir a lista ordenada.


### Licença
Este projeto está licenciado sob a Licença MIT.
