/*    3.  Debemos realizar un programa que lleve el registro de los partidos jugados por nuestro equipo.
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
    e) nombre y cantidad de goles del equipo que nos hizo más goles.

    ESTA BIEN Y FUNCIONA*/

function mostrar ()

{
	var respuesta;
	var nombreEquipoContrario;
	var condicion; //local o visitantes
	var golesAFavor;
	var golesEnContra;
	var contadorVictorias;
	var promedioVictorias;
	var contadorPartidos;
	var acumuladorGolesAFavor;
	var acumuladorGolesEnContra;
	var cantidadGolesPrimerVictoria;
	var nombreRivalPrimerVictoria;
	var banderaPrimerVictoria;
	var contadorDerrotasVisitante;
	var contadorVictoriasLocal;
	var contadorPartidoLocal;
	var contadorPartidoVisitante;
	var promedioVictoriaLocal;
	var promedioDerrotaVisitante;
	var nombreMasGolesEnContra;
	var banderaMasGolesEnContra;
	var cantidadGolesEnContra;




	respuesta = true;
	contadorVictorias = 0;
	contadorPartidos = 0;	
	acumuladorGolesAFavor = 0;
	acumuladorGolesEnContra = 0;
	banderaPrimerVictoria = false;
	contadorVictoriasLocal = 0;
	contadorDerrotasVisitante = 0;
	contadorPartidoLocal = 0;
	contadorPartidoVisitante = 0;
	banderaMasGolesEnContra = false;


	while(respuesta==true)
	{
		nombreEquipoContrario = prompt("Ingrese el nombre del equipo contrario: ")

		condicion = prompt("Ingrese su juega de local o visitante: ").toLowerCase();

		while(condicion != "local" && condicion != "visitante")
		{
			condicion = prompt("Reingrese su juega de local o visitante: ").toLowerCase();
		}

		golesAFavor = prompt("Ingrese los goles a favor: ")
		golesAFavor = parseInt(golesAFavor);

		while(golesAFavor < 0)
		{
			golesAFavor = prompt("Ingrese los goles a favor: ")
			golesAFavor = parseInt(golesAFavor);
		}

		golesEnContra = prompt("Ingrese los goles en contra: ");
		golesEnContra = parseInt(golesEnContra);

		while(golesEnContra < 0)
		{
			golesEnContra = prompt("Ingrese los goles en contra: ");
			golesEnContra = parseInt(golesEnContra);
		}

			if(golesAFavor > golesEnContra)
		{
			alert("Victoria");
		}
		else
		{
			if(golesAFavor == golesEnContra)
			{
				alert("Empate");
			}
			else
			{
				alert("Derrota");
			}
		}

		//a) el promedio de victorias de nuestro equipo
		contadorPartidos++;
		contadorPartidos = parseInt(contadorPartidos);

		//b) cantidad de goles hechos y recibidos.
		acumuladorGolesAFavor += golesAFavor;
		acumuladorGolesAFavor = parseInt(acumuladorGolesAFavor);

		acumuladorGolesEnContra += golesEnContra;
		acumuladorGolesEnContra = parseInt(acumuladorGolesEnContra);

		if (golesAFavor > golesEnContra)
		{
			contadorVictorias++;
		}

		//c) cantidad de goles realizado en nuestra primer victoria y el nombre del equipo rival
		if(golesAFavor > cantidadGolesPrimerVictoria || banderaPrimerVictoria == false)
		{
			cantidadGolesPrimerVictoria = golesAFavor;
			nombreRivalPrimerVictoria = nombreEquipoContrario;
			banderaPrimerVictoria = true;
		}

		//d) promedio de victorias como local y promedio de derrotas como visitante.
		switch(condicion)
		{
			case "local":
			contadorPartidoLocal++;
			if(golesAFavor > golesEnContra)
			{
				contadorVictoriasLocal++;
			}
			break;

			case "visitante":
			contadorPartidoVisitante++;
			if(golesEnContra > golesAFavor)
			{
				contadorDerrotasVisitante++;
			}
			break;
		}

		//e) nombre y cantidad de goles del equipo que nos hizo más goles.
		if (golesEnContra > cantidadGolesEnContra || banderaMasGolesEnContra == false)
		{
			nombreMasGolesEnContra = nombreEquipoContrario;
			cantidadGolesEnContra = golesEnContra;
			banderaMasGolesEnContra = true;
		}


	respuesta = confirm ("Desea ingresar mas datos?");
	} //fin del while

	promedioVictorias = contadorVictorias * 100 / contadorPartidos;
	promedioVictoriaLocal = contadorVictoriasLocal / contadorPartidoLocal;
	promedioDerrotaVisitante = contadorDerrotasVisitante / contadorPartidoVisitante;


	document.write("El promedio de victorias es: " + promedioVictorias + "<br>");
	document.write("La cantidad de goles hechos: " + acumuladorGolesAFavor + "<br>");
	document.write("La cantidad de goles recibidos: " + acumuladorGolesEnContra + "<br>");
	document.write("Cantidad de goles realizado en nuestra primer victoria" + cantidadGolesPrimerVictoria + " y el nombre del equipo rival " + nombreRivalPrimerVictoria + "<br>");
	document.write("El promedio de victorias local es: " + promedioVictoriaLocal + "<br>");
	document.write("El promedio de derrotas visitante es: " + promedioDerrotaVisitante + "<br>");
	document.write("El nombre del equipo que nos hizo más goles. " + nombreMasGolesEnContra + " y nos hizo " + cantidadGolesEnContra + " goles <br>");





}





















 /*
Camila Molteni DIV I
E/S 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
function SacarResto()
{

	var dividendo;
	var divisor;
	var resultado;

	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resultado = dividendo % divisor;

	alert("El resto es " + resultado);

}

//txtIdNumeroDividendo
//txtIdNumeroDivisor*/

