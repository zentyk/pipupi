let base = null;
let link = null;

//FACEBOOK
function setSocial(social){
    if(social === "wa") base = "https://m.me/";
    if(social === "me") base = "https://wa.me/";
}



function generateLink(){
  let num = document.getElementById("num");
  let link = base + num;
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