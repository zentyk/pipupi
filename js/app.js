//WHATSSAPP
let base = null;
let link = null;


//FACEBOOK
function setSocial(id){
    if(id === "fb"){
        base = "https://wa.me/";
    } else {
        base = "https://m.me/";
    }
}

function generateLink (e, num){
  
}

function shareLink(){
    const numbers = document.getElementById('numbers')
    numbers.addEventListener('click', event =>{
        if(navigator.share){
            navigator.share({
                text: 'mandar a:',
                url: 'https://www.google.com/'
        }).then(() =>{
            console.log('Gracias por compartir!');
        })
        .catch((err)=> console.error(err));
    } else {
        alert("UPS! ocurrio un error, vuelve a intentarlo.")
    }
    })
}

function copyLink(){
    let numbers = document.getElementById('numbers');
    numbers.select();
    numbers.setSelectionRange(0,99999);
    document.execCommand('copy');
}