/*Ingresar el nombre de los 5 candidatos a presidente de Berlinberlin,  
la edad de cada uno (mayor o igual a 20 años) y la cantidad de votos que sacó en las elecciones.
Informar: 
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
Cantidad de candidatos que tienen entre 25 y 50 años que hayan recibido entre 500 y 900 votos.*/

function mostrar ()
{
	var control;
	var nombre;
	var edad;
	var cantidadVotos;
	var banderaMasVotos;
	var nombreMasVotos;
	var cantidadMaximaVotos;
	var nombreMenosVotos;
	var banderaMenosVotos;
	var cantidadMinimaVotos;
	var promedioEdades;
	var acumuladorEdades;
	var contadorEdadVotos;

	control = 0;
	banderaMasVotos = false;
	banderaMenosVotos = false;
	acumuladorEdades = 0;
	contadorEdadVotos = 0;

	while(control < 5)
	{
		nombre = prompt("Ingrese el nombre del candidato:")

		edad = prompt("Ingrese la edad del candidato: Debe tener 20 años o mas")
		edad = parseInt(edad);

		while(edad < 20)
		{
			edad = prompt("Reingrese la edad del candidato: Debe tener 20 años o mas")
			edad = parseInt(edad);
		}

		cantidadVotos = prompt("Ingrese la cantidad de votos que saco en las elecciones:")
		cantidadVotos = parseInt(cantidadVotos);


		//el candidato con más votos
		if(cantidadVotos > cantidadMaximaVotos || banderaMasVotos == false)
		{
			nombreMasVotos = nombre;
			cantidadMaximaVotos = cantidadVotos;
			banderaMasVotos = true;
		}

		//el candidato con menos votos
		if(cantidadVotos < cantidadMinimaVotos || banderaMenosVotos == false)
		{
			nombreMenosVotos = nombre;
			cantidadMinimaVotos = cantidadVotos;
			banderaMenosVotos = true;
		}

		//el promedio de edades de los candidatos
		acumuladorEdades += edad;

		//Cantidad de candidatos que tienen entre 25 y 50 años que hayan recibido entre 500 y 900 votos.
		if (edad >=25 && edad <50)
		{
			if (cantidadVotos >=500 && cantidadVotos <900)
			{
				contadorEdadVotos++;
			}
		}

	control++;
	}//fin while general

	promedioEdades = acumuladorEdades / control;


	document.write("El candidato con más votos: " + nombreMasVotos + "<br>");
	document.write("El candidato con menos votos: " + nombreMenosVotos + "<br>");
	document.write("El promedio de edades de los candidatos: " + promedioEdades + "<br>");
	document.write("La cantidad de candidatos que tienen entre 25 y 50 años que hayan recibido entre 500 y 900 votos. " + contadorEdadVotos + "<br>");


}














/*2. Se pide gestionar los ingresos en pesos de un club de fútbol.
 No se sabe cuántos son los ingresos.
El equipo tiene ingresos por "ENTRADAS", "INDUMENTARIA" y "ACCESORIOS".
Se solicita:  Tipo de Ingreso, ya mencionados anteriormente y Valor de Ingreso. 
Se pide:
Ingreso BRUTO del club.
Ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO.
Del total de ingresos NETO se sabe que un 35% se destinan a la compra
 de dólares al costo de $220c/u, informar ese monto.
Determinar si se recaudó más por INDUMENTARIA o ACCESORIOS. 
Informando la diferencia del mayor. (Ej: Se recaudó $x más de ACCESORIOS)

function mostrar()
{
	var tipoIngreso;
	var valorIngreso;
	var respuesta; 
	var ingresoBrutoClub;
	var ingresoNetoClub;
	var compraDolares;
	var destinoDolares;
	var acumuladorIndumentaria;
	var acumuladorAccesorios;
	var diferencia;

	respuesta = true;
	ingresoBrutoClub = 0;
	acumuladorAccesorios =0;
	acumuladorIndumentaria =0;
	diferencia=0;

	while(respuesta==true)
	{
		tipoIngreso=prompt("Ingrese tipo de ingreso").toLowerCase();
			while(tipoIngreso!="indumentaria" && tipoIngreso!="entradas" && tipoIngreso!="accesorios")
			{
				tipoIngreso=prompt("Ingrese un tipo de ingreso valido");
			}

		valorIngreso=prompt("Ingrese el valor de los ingresos");
		valorIngreso=parseInt(valorIngreso);

		respuesta=confirm("¿Desea seguir agregando ingresos?");

		ingresoBrutoClub+=valorIngreso;

		switch(tipoIngreso)
		{
			case "indumentaria":
				acumuladorIndumentaria+=valorIngreso;
				acumuladorIndumentaria=parseInt(acumuladorIndumentaria);
				break;

			case "accesorios":
				acumuladorAccesorios+=valorIngreso;
				acumuladorAccesorios=parseInt(acumuladorAccesorios);
				break;
		}

		if(acumuladorIndumentaria>acumuladorAccesorios)
		{
			diferencia=acumuladorIndumentaria-acumuladorAccesorios
			document.write("<br>Se recaudo "+ diferencia + " mas por indumentaria");
		}
		else
			if(acumuladorAccesorios>acumuladorIndumentaria)
		{	
			diferencia=acumuladorAccesorios-acumuladorIndumentaria
			document.write("<br>Se recaudo "+ diferencia +" mas por accesorios");
		}
		



	}

	ingresoNetoClub=ingresoBrutoClub-(ingresoBrutoClub*0.18);
	destinoDolares=ingresoNetoClub*0.35
	compraDolares= destinoDolares/220
	

	document.write("<br>El ingreso total bruto del club es de $ " + ingresoBrutoClub);
	document.write("<br>El ingreso neto del club pagando el impuesto de 18% es de $ " + ingresoNetoClub);
	document.write("<br>La cantidad de dolares comprados es de U$D " + compraDolares);
	*/



/*3.  Debemos realizar un programa que lleve el registro de los partidos jugados por nuestro equipo.
	 No se sabe cuántos.
    Se deberá cargar en cada entrada el nombre del equipo contrario, si jugamos de local o visitante(validar) ,
	 los goles hechos por nuestro equipo y los goles hechos por el equipo contrario (validar,
		 la cantidad de goles no puede ser negativo).
    El programa deberá evaluar la cantidad de goles de cada equipo y determinará si fue empate, victoria o derrota.
    Al final se deberá mostrar:
    a) el promedio de victorias de nuestro equipo
    b) cantidad de goles hechos y recibidos.
    c) cantidad de goles realizado en nuestra primer victoria y el nombre del equipo rival
    d) promedio de victorias como local y promedio de derrotas como visitante.
    e) nombre y cantidad de goles del equipo que nos hizo más goles.*/


