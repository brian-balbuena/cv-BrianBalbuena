

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

document.getElementById('educacion').addEventListener('mouseover', function () {
    document.getElementById('decoracion').style.animation = "expandir 4s ";
});

document.getElementById('botonmi').addEventListener('click', function () {
    document.getElementById('acerA').classList.toggle('acermiAA')
    document.getElementById('datospersonales').classList.toggle('datospersonalesA')

   
});


//  if (document.getElementById('miB').classList.toggle('visualmi')) {
//     document.getElementById('cortina').innerHTML = "abrir cortina";
//  } else {
//     document.getElementById('cortina').innerHTML = "cerrar ventana";
//   }

 