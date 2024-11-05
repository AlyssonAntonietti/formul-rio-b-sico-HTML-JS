const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDescricao = e.target.querySelector('#descricao');
    const inputData = e.target.querySelector('#data');
    const inputValor = e.target.querySelector('#valor');
    const inputOperacao = e.target.querySelector('#operacao');
    const inputPagamento = e.target.querySelector('#pagamento');

    const descricao = Text(inputDescricao.value);
    const data = Date(inputData.value);
    const valor = Number(inputValor.value);
    const operacao = Text(inputOperacao.value);
    const pagamento = Text(inputPagamento.value);
})