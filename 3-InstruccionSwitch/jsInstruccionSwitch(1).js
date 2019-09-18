function mostrar() {
    //tomo la edad  
    var mes = document.getElementById('mes').value;

    switch (mes) {
        case "Enero": alert("Feliz Año");
            break;
        case "Marzo": alert("A Clases");
            break;
        case "Julio": alert("Felices Vacaciones");
            break;
        case "Diciembre": alert("Felices Fiestas");
            break;
        default: alert("Que tenga buen mes")
    }
}//FIN DE LA FUNCIÓN