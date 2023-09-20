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

 var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");

var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function(){
	form_3.style.display = "none";
	form_4.style.display = "block";

	form_3_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_4_progessbar.classList.add("active");
});

form_4_back_btn.addEventListener("click", function(){
	form_3.style.display = "block";
	form_4.style.display = "none";

	form_3_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	form_4_progessbar.classList.remove("active");
});

form_4_next_btn.addEventListener("click", function(){
	form_3.style.display = "none";
	form_4.style.display = "block";

	form_4_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	form_4_progessbar.classList.add("active");
});

//TODO: limit the number of characters in the input field (8) (only accept numbers)
//TODO: step by step guide:
//** 1. select the social network (whatsapp button enabled by default)
//** 2. enter the number (enable the input field)
//** 3. generate the link and copy(enable the button)
//** 4. visit the link (enable the button)
//TODO: EXCLUSIVE FOR ZENTYK: AVOID 'e' or any other letter in the input field, just accept numbers