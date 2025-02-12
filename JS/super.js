function enviarWhatsApp() {
    // Obtener todos los checkboxes de aderezos seleccionados
    const checkboxesAderezos = document.querySelectorAll('input[name="aderezo"]:checked');
    
    // Obtener todos los checkboxes de agregados seleccionados
    const checkboxesAgregados = document.querySelectorAll('input[name="agregado"]:checked');
    
    // Crear arreglos para almacenar los valores seleccionados
    const seleccionadosAderezos = [];
    const seleccionadosAgregados = [];
    
    // Si no se ha seleccionado ningún aderezo, agregarlo al arreglo
    checkboxesAderezos.forEach(checkbox => {
        seleccionadosAderezos.push(checkbox.value);
    });
    
    // Si no se ha seleccionado ningún agregado, agregarlo al arreglo
    checkboxesAgregados.forEach(checkbox => {
        seleccionadosAgregados.push(checkbox.value);
    });

    // Crear el mensaje
    let mensaje = "¡Hola! Me gustaría pedir un Superpancho ";

    // Verificar si se seleccionaron aderezos y agregados
    if (seleccionadosAderezos.length > 0 && seleccionadosAgregados.length > 0) {
        mensaje += "con los siguientes aderezos: " + seleccionadosAderezos.join(", ") + " y los siguientes agregados: " + seleccionadosAgregados.join(", ");
    } else if (seleccionadosAderezos.length > 0) {
        mensaje += "con los siguientes aderezos: " + seleccionadosAderezos.join(", ");
    } else if (seleccionadosAgregados.length > 0) {
        mensaje += "con los siguientes agregados: " + seleccionadosAgregados.join(", ");
    } else {
        mensaje = "¡Hola! Me gustaría pedir un Superpancho sin ningún aderezo o agregado.";
    }

    // Codificar el mensaje para usarlo en una URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enviar el mensaje a WhatsApp (cambia el número de teléfono por el que desees)
    const numeroWhatsApp = "543877546659"; // Número de teléfono de WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Redirigir al usuario a WhatsApp
    window.open(url, "_blank");
}

