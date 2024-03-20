document.addEventListener('DOMContentLoaded', function() {
    var nomeDoEvento = "Jornada da Eletrônica";
    var elementosDoEvento = document.querySelectorAll('.nome-do-evento');

    elementosDoEvento.forEach(function(elemento) {
        elemento.textContent = nomeDoEvento;
    });
});