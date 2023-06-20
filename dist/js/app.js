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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

 function shareLink(){
     const shareBtn = document.getElementById('shareBtn')
     shareBtn.addEventListener('click', event =>{
         if(navigator.share){
             navigator.share({
                 text: 'mandar a:',
                 url: link,
         }).then(() =>{
             console.log('Gracias por compartir!');
         })
         .catch((err)=> console.error(err));
     } else {
         alert("UPS! ocurrio un error, vuelve a intentarlo.")
     }
     });
 }

// function copyLink(){
//     let num = document.getElementById('num');
//     num.select();
//     num.setSelectionRange(0,99999);
//     document.execCommand('copy');
// }