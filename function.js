


// document.getElementById('body').onscroll = function() {
//     document.getElementById('textedu').style.color= 'red' ;
//     console.log("hola")
// }

var conatador = 0 

 window.onscroll = function(){
    conatador++; 
    if(conatador > 3 ) {
   document.getElementById('imgperfil').style.opacity= 0.5;
     console.log('hola');
    }

    
 }


document.getElementById('email').addEventListener('click', function () {
    
     location.href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGrcPKfHrmgrXTKZWpRDVHsFkTg?compose=DmwnWrRqgkDLLmTffsVMSTjMgDlpjZKwnfMgsgvddsHVgFNbzdGsmMWWCdRNrmWPTtgDqGCkKncg";
})