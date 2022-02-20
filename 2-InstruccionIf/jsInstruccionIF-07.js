/*Camila Molteni DIV I
INSTRUCCION IF 07
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

	function mostrar()
{ 

	var edad;
	var estadoCivil;
	var nombre;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	nombre = prompt("Ingrese su nombre")
	nombre = nombre.toLowerCase();

	if (edad < 13) //menor de 13
	{
		mensaje = "Feliz dia";
		if (nombre == "Ricardo")
		{
			mensaje = mensaje + "Muy chico para ese nombre";
		}
	}
	else //mayor a 13
	{
		if (edad < 18) // menores a 18
			mensaje = " Usted es un adolescente";
		if (edad == 17) // igual a 17
		{
			mensaje = mensaje + " Ultimo año!";
		}
		if (nombre == " Violeta")
		{
			mensaje = mensaje + " Como el color";
		}
		if (estadoCivil == " Divorciado")
		{
			mensaje = mensaje = mensaje + " Todo un vida por delante";
		}
	else // mayor a 18
	{
		if (edad < 60)
		{
			mensaje = "Tenes edad para laburar";
		}
		if (edad == 33)
		{
			mensaje = mensaje + ", como Cristo";
		}
		if (edad > 60)
			{ 
				mensaje = mensaje + " A jubilarse";
			}
		if (edad == 88)
		{
			mensaje = mensaje + " Lindo numero";
		}
		if (nombre == " Alfredo")
		{
			mensaje = mensaje + " Como el de queen";
		}
	else
		{ 
		if(estadoCivil == " Casado")
		{
			mensaje = mensaje + " Casada quiere casa";
		}
	else
		{
			if (estadoCivil == " Soltero")
			{
				mensaje = mensaje + " A salir";
			}
		}
	}
	}
	}

	if (edad % 2 == 0)
	{
		mensaje = mensaje + ", sos par!";
	}


			alert(mensaje);
}


//FIN DE LA FUNCIÓN
//txtIdEdad
//estadoCivil

	
/*{

	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById('estadoCivil').value;


	if(edad<18 && estadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para NO ser soltero.");
	}
	
	


}*/
