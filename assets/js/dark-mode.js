// Função para alternar entre os modos de cor
function modoDark() {
    // Adiciona ou remove a classe 'dark-mode' no elemento raiz (geralmente <body>)
    document.body.classList.toggle('dark-mode');
}

// Seletor de elemento do botão de alternância de modo escuro
const modoEscuroBtn = document.getElementById('modo-escuro-btn');

// Adiciona um ouvinte de evento de clique ao botão de alternância de modo escuro
modoEscuroBtn.addEventListener('click', function() {
    // Chama a função modoDark) quando o botão é clicado
    modoDark();
});