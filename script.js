let emailValido = "root@cbtis258.edu.mx";
let passValido = "admin123";

const chequeLogin = (event) => {
    event.preventDefaut();



const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const mensaje = document.getElementById("LoginMensaje").value;

if(email === emailValido && password === passValido){
    mensaje.texContent = "Inicio de sesion correcto";
    mensaje.style.color = "green";

    setTimeout(() => {
        window.location.href = "dashboard.html";

    }, 1000);
}
else {
    mensaje.textContent = "Email o conrtraseña incorrecta";
    mensaje.style.color = "red";
}
};