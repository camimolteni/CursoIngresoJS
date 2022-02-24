/*HECHO POR JULI
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var temperaturaMaxima;
	var banderaTemperatura;
	var nombreMasTemperatura;
	var contadorViudo;
	var contadorSoltero;
	var acumuladorSolteros;
	var contadorHombreViudo;
	var contadorTerceraEdad;
	var promedio;
	var viudoSoltero;

	respuesta = "si";
	banderaTemperatura = false;
	contadorViudo= 0;
	contadorSoltero= 0;
	acumuladorSolteros= 0;
	contadorHombreViudo= 0;
	contadorTerceraEdad= 0;

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese el nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while(edad < 0)
		{
			edad = prompt("Ingrese una edad valida: ");
			edad = parseInt(edad);
		}
		sexo = prompt("Ingrese el sexo: f, m, o nb");

		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Reingrese el sexo");
		}
		estadoCivil = prompt("Ingrese estado civil: soltero, casado, viudo");

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese un estado civil valido");
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		while(temperaturaCorporal < 35 || temperaturaCorporal > 45)
		{
			temperaturaCorporal = prompt("Ingrese una temperatura corporal valida");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}

		if(temperaturaMaxima < temperaturaCorporal || banderaTemperatura == false)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreMasTemperatura = nombre;
			banderaTemperatura = true;
		} 
		
		switch(estadoCivil)
		{
			case "viudo":
			if(edad > 17)
			{
				contadorViudo++;
			}
			
			if(sexo == "m")
			{
				contadorHombreViudo++;
			}
			break;

			case "soltero":
			if(sexo == "m")
			{
				contadorSoltero++;
				acumuladorSolteros += edad;
			}
			break;
			
		}
		
		if(edad > 60 && temperaturaCorporal > 38)
		{	
			contadorTerceraEdad++;
		}
		
		respuesta = prompt("¿Desea ingresar a otra persona?");
	}
	if(estadoCivil == "soltero")
	{
		promedio = acumuladorSolteros / contadorSoltero;
		document.write("Promedio entre hombres solteros: " + promedio + "<br>");

	}

	viudoSoltero = contadorSoltero + contadorHombreViudo;
	document.write("Nombre de la persona con mas temperatura: " + nombreMasTemperatura + "<br>");
	document.write("Cantidad de viudos mayores de edad: " + contadorViudo + "<br>");
	document.write("Cantidad de hombres solteros o viudos: " + viudoSoltero + "<br>");
	document.write("Cantidad de personas de tercera edad con temperatura mayor a 38: " + contadorTerceraEdad + "<br>");
	
}
