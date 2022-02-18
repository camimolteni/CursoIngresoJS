/*Camila Molteni DIV I
  WHILE 04
Al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado >0 && numeroIngresado >9)
	{
		numeroIngresado = prompt("El numero no es valido, ingrese otro")
	}

	txtIdNumero.value = numeroIngresado;

	
}//FIN DE LA FUNCIÓN
//txtIdNumero

/* var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado <0 || numeroIngresado >9)
	{
		numeroIngresado = prompt("El numero no es valido, ingrese otro")
	}
	
	txtIdNumero.value = numeroIngresado; */