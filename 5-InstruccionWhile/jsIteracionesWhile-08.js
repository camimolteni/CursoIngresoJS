/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var suma;
	var multiplicacion;

	contador=0;
	suma=0;
	multiplicacion=1;
	respuesta=true;

	while (respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado > -1)
		{
			suma = suma + numeroIngresado
		}
		else 
		{ 		
			multiplicacion = multiplicacion * numeroIngresado
		}

		respuesta = confirm("Desea ingresar otro numero?");
		
	}

	

	txtIdSuma.value=suma;
	txtIdProducto.value=multiplicacion;

}//FIN DE LA FUNCIÓN
//txtIdSuma
//txtIdProducto