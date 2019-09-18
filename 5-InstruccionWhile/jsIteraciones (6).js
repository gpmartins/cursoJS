function mostrar() {

	var contador = 0;
	var acumulador = 0;

for(contador=0; contador<5; contador++) {

	document.getElementById('suma').value=acumulador;
	
	x = prompt("Ingrese un numero");

	acumulador = acumulador + parseInt(x);

	document.getElementById('suma').value=acumulador;
	
	//document.getElementById('promedio').value=acumulador/5;
	//alert("Suma:" + acumulador + " Contador: " + contador)
}

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/5;

}//FIN DE LA FUNCIÓN