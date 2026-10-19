console.log("Conexión con js");

// HOVER ENVIA FLORES
let enviaFlores = document.getElementById("envia-flores");
enviaFlores.addEventListener("mouseover", function () {
    enviaFlores.innerText = "Envía Bouquets";
});
enviaFlores.addEventListener("mouseout",function () {
    enviaFlores.innerText = "Envía Flores";
});

// INICIAR SESIÓN
const inicioSesion = document.getElementById("iniciar-sesion");
inicioSesion.onclick = function () {
    alert("Bienvenido a la tienda de flores");
};

// BTN COMPRAR
let comprar = document.querySelectorAll('.btn-comprar');

let compra1 = comprar[0];
compra1.addEventListener('click', function() {
    compra1.style.display = "none";
});

let compra2 = comprar[1];
compra2.addEventListener('click', function() {
    compra2.style.display = "none";
});

let compra3 = comprar[2];
compra3.addEventListener('click', function() {
    compra3.style.display = "none";
});