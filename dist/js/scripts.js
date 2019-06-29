$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000
    });

    // form masks
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#celphone').mask('(00) 00000-0000');
});