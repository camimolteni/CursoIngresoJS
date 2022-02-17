/* Camila Molteni DIV I
SWITCH 09 */
function mostrar()
{
	var estacion;
	var destino;
	var precioBase;
	var precioFinal;
	var recargo;
	var mensaje;
	var porcentaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	precioBase = 15000;
	porcentaje = 0;

	mensaje = "El precio final es de: $";

	switch (estacion)
	{
		case "Invierno":
		if(destino == "Bariloche")
			{
			porcentaje = 20;
			}
		else
		{
		if(destino == "Mar del plata")
			{
			porcentaje = -20;
			}
		else
			{
			porcentaje = -10;
			}
		}
		break;
		case "Verano":
		if(destino == "Bariloche")
		{
			porcentaje = -20;
		}
		else
		{
			if(destino == "Mar del plata")
			{
				porcentaje = 20;
			}
			else
			{
				porcentaje = 10;
			}
		}
		break;
		default:
		if (destino != "Cordoba")
		{
			porcentaje = 10
		}
	}


	recargo = precioBase * porcentaje / 100;
	precioFinal = precioBase + recargo;

	alert(mensaje + precioFinal);




}//FIN DE LA FUNCIÓN
// txtIdEstacion
// txtIdDestino