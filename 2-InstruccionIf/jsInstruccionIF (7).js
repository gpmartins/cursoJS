function mostrar() {
    //tomo la edad  
    if (parseInt(document.getElementById("edad").value) < 18 && (document.getElementById("estadoCivil").value) != "Soltero")
        alert("Es muy pequeño para no ser soltero")
}//FIN DE LA FUNCIÓN