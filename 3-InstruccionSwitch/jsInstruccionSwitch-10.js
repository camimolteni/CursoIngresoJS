/*Molteni Camila DIV I
  Switch + IF 10

Una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".
en Verano: Se viaja a Mar del plata y Cataratas solamente.
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche.*/

function mostrar()
{
	var estacion;
	var destino;
	var posibilidadDeViaje;
	var mensaje;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion)
//en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".
	{	
		case"Invierno":
			if(destino=="Bariloche")
			{
				posibilidadDeViaje="se viaja";
			}
			else
			{
				posibilidadDeViaje="no se viaja";
			}
			break;
//en Verano: Se viaja a Mar del plata y Cataratas solamente.
		case"Verano":
			if(destino=="Mar del plata" || destino=="Cataratas")
			{
				posibilidadDeViaje="se viaja";
			}
			else
			{
				posibilidadDeViaje="no se viaja";
			}
			break;
//en Otoño: Se viaja a todos los destinos.
		case"Otoño":
			posibilidadDeViaje="se viaja";
			break;
//primavera: solo no se viaja a Bariloche.	
		default:
			if(destino=="Bariloche")
			{
				posibilidadDeViaje="no se viaja";
			}
			else
			{
				posibilidadDeViaje="se viaja";
			}
			break;
	}
//nos piden informar si hacemos viajes a lugares según la estación del año estemos,
//informar si "Se viaja" o "No se viaja" a ese lugar

	mensaje="En "+estacion+" "+posibilidadDeViaje+" a "+destino+".";

	alert(mensaje);
}

/*function mostrar()
{
	var estacion;
	var destino;
	var posibilidadDeViaje;
	var mensaje;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
//en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".
		case"Invierno":
			switch(destino)
			{
				case"Bariloche":
					posibilidadDeViaje="se viaja";
					break;
				default:
					posibilidadDeViaje="no se viaja";
					break;
			}
			break;
//en Verano: Se viaja a Mar del plata y Cataratas solamente.
		case"Verano":
			switch(destino)
			{
				case"Mar del plata":
				case"Cataratas":
					posibilidadDeViaje="se viaja";
					break;
				default:
					posibilidadDeViaje="no se viaja";
					break;
			}
			break;
//en Otoño: Se viaja a todos los destinos.
		case"Otoño":
			switch(destino)
			{
				default:
					posibilidadDeViaje="se viaja";
					break;
			}
			break;
//primavera: solo no se viaja a Bariloche.
		default:
			switch(destino)
			{
				case"Bariloche":
					posibilidadDeViaje="no se viaja";
					break;
				default:
					posibilidadDeViaje="se viaja";
			}
			break;
	}
//nos piden informar si hacemos viajes a lugares según la estación del año estemos,
//informar si "Se viaja" o "No se viaja" a ese lugar

	mensaje = "En "+estacion+" "+posibilidadDeViaje+" a "+destino+".";

	alert(mensaje);

}*/
//FIN DE LA FUNCIÓN
//txtIdEstacion
//txtIdDestino