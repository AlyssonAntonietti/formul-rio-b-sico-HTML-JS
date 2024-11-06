const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDescricao = e.target.querySelector('#descricao');
    const inputData = e.target.querySelector('#data');
    const inputValor = e.target.querySelector('#valor');
    const inputTipo = e.target.querySelector('#tipo');
    const inputPagamento = e.target.querySelector('#pagamento');

    const descricao = String(inputDescricao.value);
    const data = String(inputData.value);
    const valor = String(inputValor.value);
    const tipo = String(inputTipo.value);
    const pagamento = String(inputPagamento.value);

    const erroDescricao = document.getElementById('erro-nome');
    const erroData = document.getElementById('erro-data');
    const erroValor = document.getElementById('erro-valor');
    const erroTipo = document.getElementById('erro-tipo');
    const erroPagamento = document.getElementById('erro-pagamento');

    var formularioValido = true;

    const tabela = document.getElementById('tabela');
    const tabelaRegistro = document.querySelector('#registros tbody');
    const novaLinha = document.createElement('tr')

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

    if (!tipo) {
      erroTipo.style.display = 'block';
      formularioValido = false;
    } else {
      erroTipo.style.display = 'none';
    }

    if (!pagamento) {
      erroPagamento.style.display = 'block';
      formularioValido = false;
    } else {
      erroPagamento.style.display = 'none';
    }

    if (!formularioValido) {
      e.preventDefault()
    } else {

      tabela.style.display = 'block';

      [tipo, descricao, pagamento, data, valor].forEach(function(value) {
        const novaCelula = document.createElement('td');
        novaCelula.textContent = value;
        novaLinha.appendChild(novaCelula);
      });

      tabelaRegistro.appendChild(novaLinha);

      document.getElementById("formulario").reset();

    }

});