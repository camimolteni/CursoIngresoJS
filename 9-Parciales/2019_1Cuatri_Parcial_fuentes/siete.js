/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250)
, el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.

ESTA BIEN SOLO DA MAL EL SEXO MAS BAJO INGRESADO, DICE UNO EN VEZ DEL OTRO*/

function mostrar()
{
	var altura;
	var sexo;
	var control;
	var alturaMasBaja;
	var sexoMasBajo;
	var contadorMujeres;
	var acumuladorMujeres;
	var contadorAltura;
	var acumuladorAltura;
	var acumuladorMujeres;
	var mensaje;
	var mensaje1;
	var mensaje2;

	control = 0;
	contadorMujeres = 0;
	acumuladorMujeres = 0;
	contadorAltura = 0;
	acumuladorAltura = 0;
	

	while (control < 5)
	{
		altura = prompt("Ingrese la altura en centimetros:");
		altura = parseInt(altura);

		while(isNaN(altura) || altura < 0 || altura > 250)
			{
			altura = prompt("Error, ingrese la altura en centimetros:");
			altura = parseInt(altura);
			}

		sexo = prompt("Ingrese el sexo: f o m").toLowerCase();

		while (sexo != "f" && sexo != "m")
			{
			sexo = prompt("Ingrese el sexo: f o m").toLowerCase();
			}

		//a) El promedio de las alturas totales.
		contadorAltura++;
		acumuladorAltura += altura;

		//b) La altura más baja y el sexo de esa persona.
		if (!alturaMasBaja || altura < alturaMasBaja)
		{
			alturaMasBaja = altura;
		}
		if (!sexoMasBajo || sexo < sexoMasBajo) //da mal el sexo ingresado
		{
			sexoMasBajo = sexo;
		}

		//c) La cantidad de muheres que su altura supere los 190 centimetros.
		if (sexo == "f" && altura > 190)
		{
			contadorMujeres++;
		}



	control++;
	} // fin del while general

	mensaje = "El promedio de las alturas totales es: " + acumuladorAltura / contadorAltura + "<br";
	mensaje1 = "La altura mas baja es: " + alturaMasBaja + " y el sexo de esa persona: " + sexoMasBajo + "<br>";
	mensaje2 = "La cantidad de mujeres que miden mas de 190 es: " + contadorMujeres + "<br>";


	alert(mensaje + mensaje1 + mensaje2);


}
