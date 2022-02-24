/*Camila Molteni DIV I
  SWITCH 08
 Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	var destinoIngresado;
	var clima;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	mensaje = "Hace calor en este destino."

	switch (destinoIngresado)
	{
		case "Bariloche" && "Ushuaia":
			{
			mensaje = "Hace frio en este destino.";
			}
		break;
		
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN
//txtIdDestino