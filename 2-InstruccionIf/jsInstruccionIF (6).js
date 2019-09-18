function mostrar() {
    //tomo la edad  
    if (parseInt(document.getElementById("edad").value) >= 18)
        alert("Mayor de edad")
    else if (parseInt(document.getElementById("edad").value) >= 13)
        alert("Adolescente");
    else
        alert("Niño");
}//FIN DE LA FUNCIÓN