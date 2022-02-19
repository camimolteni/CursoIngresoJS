/*Camila Molteni DIV I
  WHILE 06

  Al presionar el botón pedir 5 números e informar
  la suma acumulada y el promedio.*/

  function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while (contador < 5)
	{
		numeroIngresado = prompt("Ingrese un numero y presione aceptar. Hagalo 5 veces.");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador ++; 
	}
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / 5;

}//FIN DE LA FUNCIÓN
//txtIdSuma
//txtIdPromedio