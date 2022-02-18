/*Camila Molteni DIV I
  WHILE 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("No es valido, ingrese nuevamente.");
	}

	txtIdSexo.value=sexoIngresado;

}//FIN DE LA FUNCIÓN
//txtIdSexo