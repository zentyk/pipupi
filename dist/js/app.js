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
    if(social === "me") {base = baseFb;}
    if(social === "wa") {
        base = baseWa;
        document.getElementById('whats').style.backgroundColor="#38BF4B";
    }
}

function generateLink(msg){
    if(base === null || base === undefined){
        alert("Por favor, selecciona una red social");
        return;
    }
     let data = document.getElementById('num').value;
     link = base + data;
     document.getElementById('links').value = link;

     let toastBox = document.getElementById('toastBox');
     let toast = document.createElement('div');

     toast.classList.add("toast");
     toast.innerHTML = msg;
     toastBox.appendChild(toast);
     setTimeout(()=>{
         toast.remove();
     },5000);
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

 document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
    const inputField = copyLinkContainer.querySelector("#links");
    const copyButton = copyLinkContainer.querySelector(".copybtn");

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
        const text = inputField.value;

        inputField.select();
        navigator.clipboard.writeText(text);
    });
 });

//TODO: limit the number of characters in the input field (8) (only accept numbers)
//TODO: step by step guide:
//** 1. select the social network (whatsapp button enabled by default)
//** 2. enter the number (enable the input field)
//** 3. generate the link (enable the button)
//** 4. visit the link (enable the button)
//TODO: EXCLUSIVE FOR ZENTYK: AVOID 'e' or any other letter in the input field, just accept numbers