"use strict"
document.getElementById("boton-menu").addEventListener("click",function (){
    console.log ("holas");
       document.querySelector(".botones").classList.toggle("mostrarMenu")

})


document.getElementById("cambiarModo").addEventListener("click",cambiarModo)
let temaActual=localStorage.getItem("tema")
let body=document.querySelector(".body")
let img= document.getElementById("modoIcono")
if (temaActual=="oscuro") {
    body.classList.add("modo-oscuro") 
}

function cambiarModo () {   
    body.classList.toggle("modo-oscuro")

    if (body.classList.contains("modo-oscuro")) {
        localStorage.setItem("tema","oscuro") 
        img.src="../imagenes/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
      
    }
    else {
        localStorage.setItem("tema","claro")
        img.src="../imagenes/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
        
}

}

let form = document.querySelector('#form');
form.addEventListener('submit', agregar);

let numero1=obtenerNumeroAleatorio()
let numero2=obtenerNumeroAleatorio()
mostrarAleatorio(numero1, numero2)

function agregar(e) {
   e.preventDefault();
   let formData= new FormData(form);
   let email =   formData.get('email');
   let nombre = formData.get('nombre');
   let mensaje=document.getElementById("mensaje")
   console.log(email, nombre,);
   let resultado= numero1 + numero2
   if (captcha(formData.get ("numero"),resultado) ) {
    mensaje.innerHTML="La validacion es correcta"
    form.reset()
    
   }
   else {
    mensaje.innerHTML="La suma es incorrecta. Intente nuevamente"
   
   }
   numero1 = obtenerNumeroAleatorio()
   numero2 = obtenerNumeroAleatorio()
   mostrarAleatorio(numero1 , numero2)


}

function captcha(numeroUsuario, numeroCorrecto ) {

    console.log(numeroUsuario, numeroCorrecto)
    if (numeroCorrecto==numeroUsuario) {
        return true
    }
    else {
        return false
    }
    
    
}
function obtenerNumeroAleatorio () {
    return Math.floor(Math.random()*10+1)  
    
}
function mostrarAleatorio (numero1, numero2) {
    
    document.getElementById("suma").innerHTML=numero1 + " + "  + numero2
}


