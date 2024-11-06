const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDescricao = e.target.querySelector('#descricao');
    const inputData = e.target.querySelector('#data');
    const inputValor = e.target.querySelector('#valor');
    const inputOperacao = e.target.querySelector('#operacao');
    const inputPagamento = e.target.querySelector('#pagamento');

    const descricao = String(inputDescricao.value);
    const data = String(inputData.value);
    const valor = String(inputValor.value);
    const operacao = String(inputOperacao.value);
    const pagamento = String(inputPagamento.value);

    const erroDescricao = document.getElementById('erro-nome');
    const erroData = document.getElementById('erro-data');
    const erroValor = document.getElementById('erro-valor');
    const erroOperacao = document.getElementById('erro-operacao');
    const erroPagamento = document.getElementById('erro-pagamento');

    var formularioValido = true;

    if (!descricao) {
        erroDescricao.style.display = 'block';
        formularioValido = false;
    } else {
        erroDescricao.style.display = 'none';
    }

    if (!data) {
      erroData.style.display = 'block';
      formularioValido = false;
    } else {
      erroData.style.display = 'none';
    }

    if (!valor) {
      erroValor.style.display = 'block';
      formularioValido = false;
    } else {
      erroValor.style.display = 'none';
    }

    if (!operacao) {
      erroOperacao.style.display = 'block';
      formularioValido = false;
    } else {
      erroOperacao.style.display = 'none';
    }

    if (!pagamento) {
      erroPagamento.style.display = 'block';
      formularioValido = false;
    } else {
      erroPagamento.style.display = 'none';
    }

    if (!formularioValido) {
      e.preventDefault()
      console.log('chegou')
    } else {
      document.getElementById("formulario").reset();
    }

});