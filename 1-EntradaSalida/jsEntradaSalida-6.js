/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {

    var num1 = document.getElementById("numeroUno").value;
    var num2 = document.getElementById("numeroDos").value;

    var suma = parseInt(num1) + parseInt(num2);

    alert("La suma es " + suma);

}

