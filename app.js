function calcularResultado() {
    var opcion = document.querySelector('input[name="opcion"]:checked').value;
    var v1 = parseFloat(document.querySelector('#t1').value);
    var v2 = parseFloat(document.querySelector('#t2').value);

    if (isNaN(v1) || isNaN(v2)) {
        swal("Mensaje", "Ingrese números válidos", "warning");
        return;
    }

    var resultado;
    switch (opcion) {
        case "1":
            resultado = v1 + v2;
            break;
        case "2":
            resultado = v1 - v2;
            break;
        case "3":
            resultado = v1 * v2;
            break;
        case "4":
            if (v2 === 0) {
                swal("Mensaje", "No se puede dividir por cero", "warning");
                return;
            }
            resultado = v1 / v2;
            break;
        case "5":
            resultado = Math.pow(v1, v2);
            break;
        case "6":
            resultado = Math.sin(v1);
            break;
        case "7":
            resultado = Math.cos(v1);
            break;
        default:
            swal("Mensaje", "Seleccione una opción", "warning");
            return;
    }

    var contenido = document.querySelector('#resultado');
    contenido.innerHTML = `<h3>Resultado: ${resultado}</h3>`;
}
