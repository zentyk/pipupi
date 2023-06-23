let base = null;
let link = undefined;
let successMsg = '<i class="fa-solid fa-circle-check"></i> ¡El link ha sido generado!'

let baseFb = "https://m.me/";
let baseWa = "https://wa.me/";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

function setSocial(social){
    //TODO: show visual choice
    if(social === "me") base = baseFb;
    if(social === "wa") base = baseWa;
}

function generateLink(msg){
    if(base === null || base === undefined){
        alert("Por favor, selecciona una red social");
        return;
    }
    let toastBox = document.getElementById('toastBox');
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    setTimeout(()=>{
        toast.remove();
    },5000);
    let data = document.getElementById('num').value;
    link = base + data;
//   alert("¡El link ha sido generado!");
}

function validField() {
    console.log(link);
    if(
        link === null ||
        link === false ||
        link === undefined ||
        link === "" ||
        link === baseFb ||
        link === baseWa) {
        return false;
    } else {
        return true;
    }
}

function openLink(){
    if(validField()) {
        window.open(link);
    } else {
        alert("Por favor, genera un link valido primero");
    }
}

/*const shareBtn = document.getElementById('shareBtn');
shareBtn.addEventListener('click', event => {
    try {
        if('share' in navigator) {
            console.log(link);
            navigator.share({
                title : 'Compartir',
                text: 'Comparte tu link de WhatsApp',
                url: link,
            }).then(() => {
                console.log('Gracias por compartir!');
            })
        }  else {
            alert("UPS! ocurrio un error, vuelve a intentarlo.")
        }
    }
    catch(err) {
        console.log(err);
    }
});*/

/*function copyLink(){
     let num = document.getElementById(link);
     num.select();
     num.setSelectionRange(0,99999);
     document.execCommand('copy');
}*/