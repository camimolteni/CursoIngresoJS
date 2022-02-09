/*Camila Molteni DIV I
INSTRUCCION IF 08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	edad = parseInt(edad);

	/*if (edad<=18 && estadoCivil != "Soltero")
    {
    	
    }
    else
	{Se puede hacer asi pero no tendria sentido, xq no tengo q hacer nada para ese ej*/
		if (edad>17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
   

}//FIN DE LA FUNCIÓN
//txtIdEdad
//estadoCivil