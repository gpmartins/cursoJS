/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var Calcular = document.getElementById("importe").value;

    var Parseado = parseInt(Calcular);
    
    document.getElementById("resultado").value = Parseado * 0.75;

        alert("El importe fue mostrado donde corresponde");
    

}
