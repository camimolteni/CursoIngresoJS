/*Camila Molteni DIV I
  SWITCH 07
Al selecionar un destino , indicar el punto cardinal de nuestro pais
en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
	var destinoIngresado;
	var puntoCardinal;


	destinoIngresado = document.getElementById("txtIdDestino").value;

	

	switch(destinoIngresado)
	{
		case "Bariloche":
			puntoCardinal = "Esta ubicado al Oeste del pais.";
			break;
		case "Cataratas":
			puntoCardinal = "Esta ubicado al Norte del pais.";
			break;
		case "Mar del plata":
			puntoCardinal = "Esta ubicado al Este del pais.";
			break;
		default:
			puntoCardinal = "Esta ubicado al Sur del pais.";
			break;
	}

	alert(puntoCardinal);

}//FIN DE LA FUNCIÓN
//txtIdDestino