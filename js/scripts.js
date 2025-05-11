/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Função para inicializar o AOS
function aosInit() {
    AOS.init({
        duration: 600,   // Duração da animação
        easing: 'ease-in-out',  // Tipo de easing
        once: true,  // A animação ocorre uma vez, mesmo ao rolar a página
        mirror: false  // Impede que a animação aconteça ao rolar para cima
    });
}

// Executa a função de inicialização quando o conteúdo estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    aosInit();
});