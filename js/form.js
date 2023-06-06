document.addEventListener('DOMContentLoaded', function () {
document.getElementById("formulario").addEventListener('submit', validarformulario)
    (function validarformulario (evento) {
        evento.preventDefault();

        var formulario = document.getElementById('formulario');

        var validarNombre = function (e) {
            if (formulario.name.value == 0) {
                alert("Completá el Campo Nombre");
                e.preventDefault();
            }
        };

        var validarCorreo = function (e) {
            if (formulario.email.value == 0) {
                alert("Completá el campo Correo Electrónico");
                e.preventDefault();
            }
        };

        var validarTelefono = function (e) {
            if (formulario.telefono.value == "") {
                alert("Completá el campo Telefono");
                e.preventDefault();
            }
        };

        var validarMensaje = function (e) {
            if (formulario.mensaje.value == 0) {
                alert("Completá el campo Mensaje");
                e.preventDefault();
            }
        };

        var validar = function (e) {
            validarNombre(e);
            validarCorreo(e);
            validarTelefono(e);
            validarMensaje(e);
        };

        if (formulario == validar) {
            alert('Gracias por contactarte con nosotros. En breve nos estaremos comunicando')
        }
        
    }())
});