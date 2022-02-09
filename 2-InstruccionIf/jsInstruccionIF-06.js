/*Camila Molteni DIV I
INSTRUCCION IF 06
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
function mostrar()
{
    var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);

	if(edad<13)
    {
    	alert("Es niño.");
    }
else
{
	if(edad<18)
	{
		alert("Es adolescente.");
	}
else 
    {
    	alert("Es adulto.");
    }

}

}//FIN DE LA FUNCION
//txtIdEdad