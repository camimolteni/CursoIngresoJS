/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.

HECHO EL 27/02 Y ESTA BIEN*/

function mostrar()
{
	var notas;
	var sexo;
	var control;
	var notaMinima;
	var sexoMinimo;
	var sexoMasculino;
	var contadorMasculino;
	var totalNotas;
	var contadorNotas;
	var acumuladorNotas;

	control = 0;
	notaMinima = 0;
	contadorMasculino = 0;
	contadorNotas = 0;
	acumuladorNotas = 0;


	while (control < 5)
	{	
		notas = prompt("Ingrese la nota:");
		notas = parseInt(notas);

		while(isNaN(notas) || notas <0 || notas > 10)
		{
			notas = prompt("Error, ingrese una nota valida:");
			notas = parseInt(notas);
		}

		sexo = prompt("Ingrese el sexo: f o m")

		while (!sexo || sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, ingrese el sexo: f o m, segun corresponda")
		}

		//b) La nota más baja y el sexo de esa persona.
		if (!notaMinima || notas < notaMinima)
		{
			notaMinima = notas;
			sexoMinimo = sexo;
		}

		//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
		if (sexo != "f" && notas >= 6)
		{
			contadorMasculino++;
		}

		//a) El promedio de las notas totales.
		contadorNotas++;
		acumuladorNotas += notas;

		control++;
	} // fin while general

	document.write("El promedio total de las notas es:" + acumuladorNotas / contadorNotas + "<br>");
	document.write("La nota mas baja es:" + notaMinima + " y el sexo de esa persona es: " + sexoMinimo + "<br>");
	document.write("La cantidad de varones que su nota haya sido mayor o igual a 6:" + contadorMasculino + "<br>");


}
