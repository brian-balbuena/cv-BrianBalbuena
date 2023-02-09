

// botones footer
document.getElementById('email').addEventListener('click', function () {

    document.getElementById('mailcontacto').classList.toggle('visible');
});

document.getElementById('whatsapp').addEventListener('click', function () {

    document.getElementById('wppcontacto').classList.toggle('visibleA');
});

document.getElementById('linkedin').addEventListener('click', function () {

    document.getElementById('incontacto').classList.toggle('visibleB');
});

// visuales

document.getElementById('textedu').addEventListener('mouseover', function () {
    document.getElementById('decoracion').classList.toggle('decoB');
});

document.getElementById('botonmi').addEventListener('click', function () {
    document.getElementById('acerA').classList.toggle('acermiAA')
    document.getElementById('datospersonales').classList.toggle('datospersonalesA')
    document.getElementById('textme').classList.toggle('textmeA')
   
});


 