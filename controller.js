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

    const erroDescricao = document.getElementById('erro-nome');
    const erroData = document.getElementById('erro-data');
    const erroValor = document.getElementById('erro-valor');
    const erroOperacao = document.getElementById('erro-operacao');
    const erroPagamento = document.getElementById('erro-pagamento');

    var formularioValido = true;

    if (!descricao) {
        erroDescricao.style.display = 'block';
        formularioValido = false;
    }

    if (valor.trim() === "") {
        erroValor.style.display = 'block';
        formularioValido = false;
      } else {
        erroValor.style.display = 'none';
      }
});