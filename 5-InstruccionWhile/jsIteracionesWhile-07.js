/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var suma;
	var promedio;
	var contador;

	respuesta = "si"; // i=0 true
	suma = 0;
	contador = 0;


	while(respuesta=="si") // i<5 Si pongo el confirm pongo (respuesta==true) Este while
		//controla el ciclo (El = asigna, y el == compara)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado); //solo parseo variables que ingrese el usuario (a traves de prompt o id) y tengan que ser numeros (nombres no), el resto no es necesario
		while(isNaN(numeroIngresado) || numeroIngresado >100 || numeroIngresado <-100) //en el caso que ponga que no quiero que sea menor a -100 y mayor a 100, abro este while
			//ya que este while solo analiza el primero que lee
			//el is Nan se usa cuando el usuario se le pide un num e ingresa otra cosa,
			//
		{
			numeroIngresado = prompt("Reingrese un numero");
			numeroIngresado = parseInt(numeroIngresado); //cada vez q leo la var y voy a darle un vcalor, la parseo, antes no
		}
		suma = suma + numeroIngresado; // suma += numeroIngresado; (ambas sirven)

		contador++;
		respuesta = prompt("Desea ingresar otro numero?"); //i++
		//respuesta = confirm("Desea ingresar otro numero?"); Se puede usar el "confirm", es decir q el usario no tenga q poner "si", me ahorro validar ese ingreso
	}

	promedio = suma / contador;

	txtIdSuma.value = suma;
	txtIdPromedio.value = promedio;

}//fin de la funcion




/*  el ingreso por prompt de
  1-alturas en centimetros  (validar entre 0 y 250) ,
  2-la edad (validar)
  3-temperatura(validar)
  4-el sexo(validar el sexo “f” o “m” o "nb")
  5-nota (validar)
  6-nombre
  de 5 estudiantes de la UTN, */

/*function mostrar()
{
	var altura;
	var edad;
	var genero;
	var temperatura;
	var nota;
	var nombre;
	var contador;
	/*1ERA PARTE*/
	/*var promedioAltura; //a
	var contadorAltura;
	var acumuladorAltura;

	contadorAltura = 0
	acumuladorAltura = 0

	var contadorFemenino; //b
	var contadorMasculino;
	var contadorNoBinario;

	contadorFemenino = 0
	contadorMasculino = 0
	contadorNoBinario = 0

	var contadorAprobados; //c
	contadorAprobados = 0

	var contadorAlturaMujer; //d
	contadorAlturaMujer = 0;

	contador = 0;

	while(contador < 5) //while general
	{
		altura = prompt("Ingrese la altura");
		altura = parseInt(altura);
		while(isNan(altura) || altura < 0 || altura > 250)
		{
			altura = prompt("Error reingrese la altura");
			altura = parseInt(altura);
		}
			edad = prompt("Ingrese la edad");
			edad = parseInt(edad);
		while(isNan(edad) || edad < 0)
		{
			edad = prompt("Error reingrese la edad");
			edad = parseInt(edad);
		}
			temperatura = prompt("Ingrese la temperatura");
			temperatura = parseInt(temperatura);
		while(isNan(temperatura) || temperatura < 35 || temperatura > 41)
		{
			temperatura = prompt("Error reingrese la temperatura");
			temperatura = parseInt(temperatura);
		}
			genero = prompt("Ingrese el genero: f, m, o nb")
		while (genero != "f" && genero != "m" && genero != "nb")
		{
			genero = prompt("Error reingrese el genero: f, m o nb")
		}
		nota = prompt("Ingrese la nota");
		nota = parseInt(nota);
		while (isNan(nota) || nota < 0 || nota > 10)
		{
		nota = prompt("Error reingrese la nota");
		nota = parseInt(nota);
		}
		nombre = prompt("Ingrese su nombre");
	

	//a) El promedio de las alturas totales.

		acumuladorAltura = acumuladorAltura + altura;
		contadorAltura++;
	//b)Cantidad de personas de cada sexo.
	switch(genero)
	{
		case "f":
				contadorFemenino++;
		//d)La cantidad de mujeres que su altura supere los 190 centímetros.
				if (altura > 190)
			{
				contadorAlturaMujer++;
			}
		break;

		case "m":
				contadorMasculino++;
		break;

		case "nb":
				contadorNoBinario++;
		break;
	}
	// c)Cantidad de aprobados(más de 6)
	if (nota > 6)
	{
		contadorAprobados++;
	}



   	contador ++;
	}//fin del while general

	promedioAltura = acumuladorAltura / contador;
	document.write("El promedio de las alturas: " + promedioAltura + "<br>");
	document.write("Cantidad: " + contadorFemenino + " genero: Femenino" + "<br>");
	document.write("Cantidad: " + contadorMasculino + " genero: Masculino" + "<br>");
	document.write("Cantidad: " + contadorNoBinario + " genero: No Binario" + "<br>");
	document.write("Cantidad de alumnos aprobados " + contadorAprobados + "<br>");
	document.write("Cantidad de mujeres que miden mas de 190 centímetros " + contadorAlturaMujer + "<br>");
	}












	/*var numeroIngresado;
	var contador;
	var acumulador;
	var deseaContinuar;

	contador=0;
	acumulador=0;
	deseaContinuar='si';


	while (contador )
	while (deseaContinuar=="si")
	
	{
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt
	}


	acumulador = acumulador + numeroIngresado;

	deseaContinuar = prompt("Desea continuar: ingrese si"); 
	deseaContinuar = deseaContinuar.toLocaleLowerCase();

	contador = contador + 1


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN*/