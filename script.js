//EMAIL
//Quiero verificar inmediatamente si el correo de registro existe ya en la base de datos

let emails = ["pepe@gmail.com", "koke@gmail.com", "pipu@gmail.com"];
let dni = document.forms["presentacion"].elements["dni"];

document.forms["presentacion"].elements["email"]; //lo llamo por el name
email.addEventListener("blur", function (event) {
    //console.log("Se activa blur?Si");

    let emailIntroducido = event.target.value;
    //email.value
    //this.value todas sirven
    let existeUsuario = emails.some(mail => email === emailIntroducido);

    if(existeUsuario){
        document.querySelector("#mensaje-existe-usuario").style.display = "block";
        document.querySelector("#usuario-existente").textContent = emailIntroducido;
        event.target.value = "";
    }
});
//blur cuando pierde el foco, cuando dejo de estar en el

email.addEventListener("input", function(){
    document.querySelector("#mensaje-existe-usuario").style.display = "none";
});


//DNI
// Quiero cerciorarme que cuando el estado de este control es inválido (porque )
dni.addEventListener("invalid", () => {
    if (dni.validity.patternMismatch) { //Si el pattern es invalido...
        return dni.setCustomValidity('Un DNI debería componerse de 8 dígitos y una letra')
    }
    return dni.setCustomValidity('') //("")default message
});

document.forms["presentacion"].addEventListener("submit", function (event) {
    event.preventDefault();
       // aparte de enviarlo al endpoint, quiero tambien enviar informacion a mi Google Drive

       // Y después, envio el formulario al endpoint
       //event.target.submitForm();
       
})