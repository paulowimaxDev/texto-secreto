# Texto Secreto

Este é um projeto simples de "Texto Secreto" que permite aos usuários criptografar e descriptografar mensagens usando um algoritmo de substituição.

## Funcionalidades

- Criptografar mensagens de texto usando um algoritmo de substituição.
- Descriptografar mensagens criptografadas de volta para o texto original.
- Interface amigável e fácil de usar.

## Tecnologias Utilizadas

- HTML5
- CSS
- JavaScript

## Como Usar

1. Clone ou faça o download deste repositório.
2. Abra o arquivo `index.html` no seu navegador web.
3. Insira o texto que deseja criptografar ou descriptografar no campo apropriado.
4. Selecione a ação desejada (criptografar ou descriptografar) no menu suspenso.
5. O texto criptografado ou descriptografado será exibido na área de resultado.

## Exemplo de Código

Aqui está um trecho do código JavaScript que implementa o algoritmo de substituição:

```javascript
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
