let base = null;
let link = undefined;
let successMsg = '<i class="fa-solid fa-circle-check"></i> ¡El link ha sido generado!'

let baseFb = "https://m.me/";
let baseWa = "https://wa.me/";

let receivedLink = null;
let noDecypher = false;

//read the URL parameters
let urlParams = new URLSearchParams(window.location.search);
let social = urlParams.get('unk');
if(social !== null) { 
    document.getElementById('hasLink').style.display = "block";
    let phone = urlParams.get('unk');

    if(urlParams.get('noCypher') !==null) {
        noDecypher = true;        
    }

    if(!noDecypher){
        document.getElementById('receivedLink').href = window.atob(phone);
    } else {
        document.getElementById('receivedLink').href = phone;
    }
    
}
else {
    document.getElementById('hasLink').style.display = "none";
}


//#region Link Generation Functions
function setSocial(social){
    //TODO: show visual choice
    if(social === "me") {base = baseFb;}
    if(social === "wa") {
        base = baseWa;
        document.getElementById('whaicon').style.backgroundColor="#38BF4B";
    }
}

function avoidLetters(e) {
    if(['e','E','+','-'].includes(e.key)) {
        e.preventDefault();
    } 
    if(e.target.value.length >= 10) {
        console.log("max length reached");
        e.preventDefault();
        e.currentTarget.value = e.currentTarget.value.slice(0,9);
    }
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

async function generateLink(){
    if(base === null || base === undefined){
        alert("Por favor, selecciona una red social");
        return;
    } 

    let data = document.getElementById('num').value;
    link = base + data; 
    if(document.getElementById('cypher').checked) {
        link = window.btoa(link); 
    } else {
        link = link+"&noCypher=true";
    }
    document.getElementById('links').value = window.location.host +"?unk="+link;
}

function openLink(){
    if(validField()) {
        window.open(window.atob(link));
    } else {
        alert("Por favor, genera un link valido primero");
    }
}

//TODO: limit the number of characters in the input field (8) (only accept numbers)
//TODO: step by step guide:
//** 1. select the social network (whatsapp button enabled by default)
//** 3. generate the link and copy(enable the button)