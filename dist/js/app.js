let base = null;
let link = undefined;

baseFb = "https://m.me/";
baseWa = "https://wa.me/";

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

function generateLink(){
    if(base === null || base === undefined){
        alert("Por favor, selecciona una red social");
        return;
    }
    let data = document.getElementById('num').value;
    link = base + data;
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
    console.log(link);
    if(validField()) {
        window.open(link);
    } else {
        alert("Por favor, genera un link valido primero");
    }
}

const shareBtn = document.getElementById('shareBtn');
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
});

// function copyLink(){
//     let num = document.getElementById('num');
//     num.select();
//     num.setSelectionRange(0,99999);
//     document.execCommand('copy');
// }