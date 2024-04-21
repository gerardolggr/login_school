//Variables
var formulario = document.getElementById('formularioRegistro');
var btnGuardarDatos = document.getElementById('guardarDatos');
var btnRegistrar = document.getElementById('registrarAlumno');
var datos = [];
var information;

btnRegistrar.style.display = 'none'; //Oculta el botón de registrar

//Lectura de datos del formulario
btnGuardarDatos.addEventListener('click', function(evento) {
    evento.preventDefault(); //Evita que se recargue la página
    var elementos = formulario.elements; //Obtiene los elementos del formulario

    //Recorre los elementos del formulario
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type === 'text' || elementos[i].type === 'email' 
        || elementos[i].type === 'password' || elementos[i].type === 'number') {
            datos.push(elementos[i].value); //Agrega los datos al arreglo
        }
    }

    alert('Datos guardados correctamente'); //Muestra un mensaje de alerta
    btnRegistrar.style.display = 'inline-block'; //Muestra el botón de registrar
    console.log(datos); //Muestra los datos en consola
});

