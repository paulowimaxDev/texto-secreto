// Função para processar o texto com base na opção selecionada (criptografar ou descriptografar)
function processarTexto() {
  // Obtém o valor do texto de entrada do elemento com id 'texto-entrada'
  const entradaTexto = document.getElementById('texto-entrada').value;
  // Obtém o valor da opção selecionada do elemento com id 'selecione-opcao'
  const selecioneOpcao = document.getElementById('selecione-opcao').value;
  // Obtém o elemento de saída onde o resultado será exibido
  let saidaDeTexto = document.getElementById('resultado-texto-saida');

  // Função interna para desabilitar a imagem quando necessário
  function desabilitarImagem() {
    // Obtém a imagem pelo id 'img-texto'
    let imagem = document.getElementById("img-texto");
    // Obtém o elemento pai da imagem
    let imagemRemove = imagem.parentNode;
    // Remove a imagem do elemento pai
    imagemRemove.removeChild(imagem);
  }

  // Verifica se a opção selecionada é 'encriptar'
  if (selecioneOpcao === 'encriptar') {
    // Desabilita a imagem
    desabilitarImagem();
    // Define a fonte da imagem como 'fechado.svg'
    document.getElementById('img').src = './assets/img/fechado.svg';
    // Define o valor de saída como o resultado da função de criptografia aplicada ao texto de entrada
    saidaDeTexto.value = encriptar(entradaTexto);

  // Se a opção selecionada for 'desencriptar'
  } else if ( selecioneOpcao === 'desencriptar') {
    // Define a fonte da imagem como 'aberto.svg'
    document.getElementById('img').src = './assets/img/aberto.svg';
    // Define o valor de saída como o resultado da função de descriptografia aplicada ao texto de entrada
    saidaDeTexto.value = desencriptar(entradaTexto);
  }
}

// Função para criptografar o texto substituindo certas letras por outras
function encriptar(texto) {
  return texto.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto revertendo as substituições feitas na função de criptografia
function desencriptar(texto) {
  return texto.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

// Função para copiar o texto de saída para a área de transferência
function copiarTextoDeSaida() {
  // Obtém o elemento de saída
  const saidaDeTexto = document.getElementById('resultado-texto-saida');
  // Seleciona todo o texto na área de saída
  saidaDeTexto.select();
  // Copia o texto selecionado para a área de transferência
  navigator.clipboard.writeText(saidaDeTexto.value);
  // Exibe um alerta informando que o texto foi copiado
  alert('Texto copiado! Cole seu texto do lado esquerdo da Tela!');
}

function limparCampos() {
  document.getElementById('texto-entrada').value = '';
  document.getElementById('resultado-texto-saida').value = '';
}

