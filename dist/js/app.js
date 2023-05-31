let base = null;
let link = null;

function setSocial(social){
    //TODO: show visual choice
    if(social === "me") base = "https://m.me/";
    if(social === "wa") base = "https://wa.me/";
    console.log(social);
}

function generateLink(){
    if(base === null || base === undefined){
        alert("Por favor, selecciona una red social");
        return;
    }
    let data = document.getElementById('num').value;
    let link = base + data;
    window.open(link);
}

// function shareLink(){
//     const numbers = document.getElementById('numbers')
//     numbers.addEventListener('click', event =>{
//         if(navigator.share){
//             navigator.share({
//                 text: 'mandar a:',
//                 url: 'https://www.google.com/'
//         }).then(() =>{
//             console.log('Gracias por compartir!');
//         })
//         .catch((err)=> console.error(err));
//     } else {
//         alert("UPS! ocurrio un error, vuelve a intentarlo.")
//     }
//     })
// }

// function copyLink(){
//     let num = document.getElementById('num');
//     num.select();
//     num.setSelectionRange(0,99999);
//     document.execCommand('copy');
// }