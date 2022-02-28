/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1
y 1000 y la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso
por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/

function mostrar()
{
	var nombreAnimal;
	var pesoAnimal;
	var temperaturaHabitat;
	var respuesta;
	var contadorTemperaturaPar;
	var nombreMasPesado;
	var temperaturaMasPesado;
	var contadorAnimMenor0;
	var pesoMaximo;
	var pesoMinimo;
	var contadorPesoTotal;
	var acumuladorPesoTotal;


	contadorTemperaturaPar = 0;
	contadorAnimMenor0 = 0;
	contadorPesoTotal = 0;
	acumuladorPesoTotal = 0;
	nombreMasPesado = 0;
	

	respuesta = true;

	while(respuesta)
	{
		nombreAnimal = prompt("Ingrese el nombre de un animal");

		while(!nombreAnimal)
		{
			nombreAnimal = prompt("Error, ingrese el nombre de un animal");
		}

		pesoAnimal = prompt("Ingrese el peso del animal: Entre 1 y 1000kg");
		pesoAnimal = parseInt(pesoAnimal);

		while (isNaN(pesoAnimal) || pesoAnimal <1 || pesoAnimal > 1000)
		{
		pesoAnimal = prompt("Error, ingrese un peso valido: Entre 1 y 1000kg");
		pesoAnimal = parseInt(pesoAnimal);
		}

		temperaturaHabitat = prompt("Ingrese la temperatura del habitat: Ente -30 y 30");
		temperaturaHabitat = parseInt(temperaturaHabitat);

		while (isNaN(temperaturaHabitat) || temperaturaHabitat < -30 || temperaturaHabitat > 30)
		{
			temperaturaHabitat = prompt("Error, ingrese la temperatura del habitat: Ente -30 y 30");
			temperaturaHabitat = parseInt(temperaturaHabitat);
		}

		//a) La cantidad de temperaturas pares.
		if (temperaturaHabitat % 2 == 0)
		{
			contadorTemperaturaPar++;
		}


		//c) La cantidad de animales que viven a menos de 0 grados.
		if (temperaturaHabitat < 0)
		{
			contadorAnimMenor0++;
		}
		//f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
			else if (!pesoMaximo || pesoAnimal > pesoMaximo)
			{
				pesoMaximo = pesoAnimal;
			}
			if (!pesoMinimo || pesoAnimal < pesoMinimo)
			{
				pesoMinimo = pesoAnimal;
			}


		//d) El promedio del peso de todos los animales.
		contadorPesoTotal++;
		acumuladorPesoTotal += pesoAnimal;



		respuesta = confirm("Desea ingresar mas datos?");
	} // fin del while

		//b) El nombre y temperatura del animal más pesado
		if (!nombreMasPesado || nombreAnimal > nombreMasPesado || temperatura > temperaturaMasPesado)
		{
			nombreMasPesado = nombreAnimal;
			temperaturaMasPesado = temperaturaHabitat;
		}


	document.write("La cantidad de temperaturas pares es: " + contadorTemperaturaPar + "<br>");
	document.write("El nombre del animal mas pesado: " + nombreMasPesado + "y la temperatura del habitat: " + temperaturaMasPesado + "<br>");
	document.write("La cantidad de animales que viven a menos de 0 grados: " + contadorAnimMenor0 + "<br>");
	document.write("El promedio del peso de todos los animales es: " + acumuladorPesoTotal / contadorPesoTotal + "<br>");
	document.write("El peso minimo de los animales que viven bajo cero: " + pesoMinimo + "<br>");
	document.write("El peso maximo de los animales que viven bajo cero: " + pesoMaximo + "<br>");

}
