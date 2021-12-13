const processar = async(event) => {
    event.preventDefault();

    const campoNome = document.querySelector('#nome');
    const campoSobrenome = document.querySelector('#sobrenome')

    const nomeDigitado = campoNome.value; 
    const sobrenomeDigitado = campoSobrenome.value;

    const dadosAEnviar = {nome, sobrenome};
    const request = await fetch('/Nome', {
        method: 'POST',
        headers: {"Content-Type": "aplication/json"},
        body: JSON.stringify(dadosAEnviar)
    })
    const result = await Response.json();

    const {nomeCompleto, nomeCatalogo} = result;

    const nomeCompleto = '${nomeDigitado} ${sobrenomeDigitado}';
    const nomeCatalogo = '${sobreomeDigitado.toUpperCase()}, ${nomeDigitado}';

    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = `
    <div>Nome completo = ${nomeCompleto}</div>
    <div>Nome catálogo = ${nomeCatalogo}</div>
    `;
};
document.addEventListener('DOMcontentLoaded', () => {
    const botaoProcessar = document.querySelector('#processar');
    botaoProcessar.addEventListener('click', processar);
});