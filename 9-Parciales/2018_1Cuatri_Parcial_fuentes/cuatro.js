/*Bienvenidos (IF).
EJERCICIO 4 - PARCIAL 2018
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var mensaje;
	var suma;

	numeroUno = prompt("Ingrese un numero");
	numeroDos = prompt("Ingrese otro numero");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);




	mensaje = "";


		if (numeroUno == numeroDos)
		{
		mensaje = "" + numeroUno + numeroDos;
		alert(mensaje);
		}
	else
	{
		if (numeroUno > numeroDos)
		{
		alert(numeroUno - numeroDos);
		}
	else
	{ 
		if (numeroUno < numeroDos)
		{
		suma = numeroUno + numeroDos;
		alert(suma);
			
		if (suma > 10)
		{
		alert("La suma es " + suma + " y supero el 10.");
		}
	}
	}
}
}