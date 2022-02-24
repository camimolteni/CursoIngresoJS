/*
Ejercicios de PRACTICA 1:
HECHO EN DISCORD 24/02/2022

Se ingresan 10 notas, nombre del alumno y materia 
(Matematica, Lectura o Programación).

CALCULAR Y MOSTRAR

A.Mínima nota con el nombre del alumno.
B.La materia con máxima nota.
C.Promedio de notas para lectura.
D.Porcentaje de alumnos que rindió cada materia.
*/



function mostrar()
{
	
	var nombreAlumno;
	var nota;
	var materia;
	var controlador;

	//A
	var banderaNotaMin;
	var notaMin;
	var nombreMin;
	var mensajeA;

	//B
	var banderaNotaMax;
	var materiaMax;
	var notaMax;
	var mensajeB;

	//C
	var contadorLectura;
	var acumuladorLectura;
	var promedioLectura;
	var mensajeC;

	//D
	var contadorAlumnosLectura;
	var contadorAlumnosMatematica;
	var contadorAlumnosProgramacion;
	var porcentajeLectura;
	var porcentajeMatematica;
	var porcentajeProgramacion;
	var mensajeD;
	
	controlador = 0;
	
	banderaNotaMin = false;
	banderaNotaMax = false;
	
	contadorLectura = 0;
	acumuladorLectura = 0;
	
	contadorAlumnosLectura = 0;
	contadorAlumnosMatematica = 0;
	contadorAlumnosProgramacion = 0;

	while(controlador < 10)
	{
		nota = prompt("Ingrese la nota");
		nota = parseFloat(nota);
		
		while(isNaN(nota) || nota < 1 || nota > 10)
		{
			nota = prompt("Reingrese la nota");
			nota = parseFloat(nota);
		}

		nombreAlumno = prompt("Ingrese el nombre del alumno");

		materia = prompt("Ingrese la materia : matematica, lectura o programacion");
		
		while(materia != "matematica" && materia != "lectura" && materia != "programacion" )
		{
			materia = prompt("Reingrese la materia : matematica, lectura o programacion");
		}

		
		if(nota < notaMin || banderaNotaMin == false)
		{
			notaMin = nota;
			nombreMin = nombreAlumno;
			banderaNotaMin = true;
		}

		if(nota > notaMax || banderaNotaMax == false)
		{
			notaMax = nota;
			materiaMax = materia;
			banderaNotaMax= true;
		}
		switch(materia)
		{
			case "lectura":
				contadorLectura++;
				//acumuladorLectura += nota;
				acumuladorLectura = acumuladorLectura + nota;
				contadorAlumnosLectura++;
				break;
			case "matematica":
				contadorAlumnosMatematica++;
				break;
			default:
				contadorAlumnosProgramacion++;
		}

		controlador++;
	}

	promedioLectura = acumuladorLectura / contadorLectura;

	porcentajeLectura = (contadorAlumnosLectura * 100) / controlador;
	porcentajeMatematica = (contadorAlumnosMatematica * 100) / controlador;
	porcentajeProgramacion = (contadorAlumnosProgramacion * 100) / controlador;

	mensajeA = "El alumno con nota minima es: " + nombreMin + " y su nota fue: " + notaMin + "<br>";
	
	mensajeB = "La materia con maxima nota es: " + materiaMax + " y su nota fue: " + notaMax + "<br>";
	
	mensajeC = "El promedio de las nota de la materia lectura es: " + promedioLectura + "<br>";
	
	mensajeD = "El porcentaje de alumnos para lectura fue del: " + porcentajeLectura.toFixed(2) + "% <br>";
	mensajeD += "El porcentaje de alumnos para matematica fue del: " + porcentajeMatematica.toFixed(2) + "% <br>";
	mensajeD += "El porcentaje de alumnos para programacion fue del: " + porcentajeProgramacion.toFixed(2) + "% <br>";
	
	

	document.write(mensajeA+mensajeB+mensajeC+mensajeD);
	
}
