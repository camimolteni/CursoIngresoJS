/*Camila Molteni DIV I
INSTRUCCION IF 02
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18)

    {

    	alert("Usted es mayor de edad.")

    }

    alert("Estoy afuera del if. Me ejecuto igual.")
	

}//FIN DE LA FUNCIÓN
//txtIdEdad