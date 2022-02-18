/*Camila Molteni DIV I
  WHILE 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var mensaje; 

	claveIngresada = prompt("Ingrese la clave.");

	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt("La clave es incorrecta, ingrese la clave");
	}
		alert ("La clave es correcta");


		/* Otra opcion para hacer que se ejecute una vez

		do
		{
			claveIngresada = prompt("Ingrese la clave.");
		} while (claveIngresada != "utn750");

		alert ("La clave es correcta");*/


	
}//FIN DE LA FUNCIÓN
