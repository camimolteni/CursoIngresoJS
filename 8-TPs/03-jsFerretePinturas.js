/*3.CAMILA MOLTENI DIV I
   EJERCICIO 3
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var conversion;
	var mensaje;

	temperatura = txtIdTemperatura.value;
	temperatura = parseInt(temperatura);

	conversion = (temperatura - 32) * 5/9;

	mensaje = temperatura +" grados Fahrenheit son ";
	mensaje += conversion.toFixed(2) + " grados centigrados";

	alert(mensaje);

	
}

function CentigradosFahrenheit () 
{

	var temperatura;
	var conversion;
	var mensaje;

	temperatura = txtIdTemperatura.value;
	temperatura = parseInt(temperatura);
	conversion = (temperatura * 9/5) + 32;

	mensaje = temperatura + " grados centigrados son ";
	mensaje += conversion.toFixed(2) + " grados Fahrenheit";

	alert(mensaje);
	
}
//txtIdTemperatura