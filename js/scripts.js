
$(document).ready(function () {
    $("#contactForm").on("submit", function(e) {
        e.preventDefault();//evita el envio predeterminado del formulario

        // Obtener los valores del formulario
        const name =$("#name").val();
        const email =$("#email").val();
        const message =$("#message").val();

        // Verificar que los campos no esten vacios
        if (name === "" || email === "" || message === "") {
            $("#statusMessage").text("por favor, completa todos campo.").css("color","red");
            return;
        }
        // Enviar datos a traves de EmailJS
        emailjs.send("service_4z3wegd", "template_kh26g2t", {
            name: name,
            email: email,
            message: message,
        })
        .then(function(response) {
            $("#statusMessage").text("Mensaje enviado con éxito.").css("color", "green");
            $("#contactForm")[0].reset(); // Limpiar el formulario
        })
        .catch(function (error) {
            console.error("Error:", error);
            $("statusMessage").text("Ocurrio un error. Intenta de nuevo.").css("color", "red");
        });
    }); 
});