
/*1.UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos,
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros el mínimo
- 18000 kilómetros máximo), el precio por asiento es 1500 pesos, informar:
A. La recaudación total del vuelo.
B. La cantidad total de asientos ocupados.
C. La edad promedio por pasajero.
D. La cantidad de pasajeros que tienen entre 18 y 45 años, que realizarán un viaje a un destino cuya distancia
es 5000 km ó 13000 km*/


function mostrar()
{
    var nombre;
    var edad;
    var cantidadDeAsientos;
    var cantidadKms;
    var precioPorAsiento = 1500;

    var acumuladorRecaudacionTotalVuelo = 0;
    var acumuladorCantidadTotalAsientosOcu = 0;

    var contadorEdad = 0;
    var acumuladorEdad = 0;
   

    var edadPromedioPasajero;
    var cantidadPasajerosEdadDestino = 0;

    var respuesta = true;

    while(respuesta==true)
    {
        nombre = prompt("Ingrese su edad: ");
        
        edad = prompt("Ingrese su edad: ");
        edad = parseInt(edad);

        cantidadDeAsientos = prompt("Ingrese la cantidad de asientos: ");
        cantidadDeAsientos = parseInt(cantidadDeAsientos);

        cantidadKms = prompt("ingrese cantidad de kms: ");
        cantidadKms = parseInt(cantidadKms);


        acumuladorCantidadTotalAsientosOcup += cantidadDeAsientos;
        //acumuladorRecaudacionTotalVuelo+=precioPorAsiento*cantidadDeAsientos; 
        
        acumuladorEdad += edad;
        
        if(edad>18 && edad<45)
        {
            if(cantidadKms == 5000 || cantidadKms == 13000)
            {
                cantidadPasajerosEdadDestino++;
            }
        }
        

        contadorEdad++;


        respuesta=confirm("Desea seguir ingresando datos?");
    }
    edadPromedioPasajero = acumuladorEdad / contadorEdad;

    acumuladorRecaudacionTotalVuelo = acumuladorCantidadTotalAsientosOcup * precioPorAsiento; 

    //a 
    document.write("La recaudación total del vuelo: " + acumuladorRecaudacionTotalVuelo + "<br>");
    //b
    document.write("La cantidad total de asientos ocupados: " + acumuladorCantidadTotalAsientosOcup + "<br>");
    //c
    document.write("La edad promedio por pasajero " + edadPromedioPasajero + "<br>");
    //d
    document.write("Cantidad de pasajeros entre 18 y 45 años, que realizarán un viaje a un destino cuya distancia es 5000 km ó 13000 km: " + cantidadPasajerosEdadDestino + "<br>");
    
    

}


/*
3.Se debe llevar a cabo el registro de los ingresos a la guardia, 
los mismos se dividen en tres grupos: clínica,  pediátrica y traumatológica . 
Se pide el ingreso del nombre del paciente, la edad y el tipo de atención (anteriormente mencionado). 
Al momento de la recepción se solicita el tipo de prestación (prepaga - obra social - sin prestación). 
El valor de la consulta es de $2500, 
en caso de contar con prepaga la cobertura es del 100%, 
para obra social es del 50%.

Se precisa saber:

A.Ingresos por obra social y sin prestación.
B.Nombre y tipo de prestación del paciente de más edad en traumatología.
C.Qué tipo de prestación es la más utilizada.
D.Cuántos pacientes menores de edad solicitaron atención traumatológica.
E.El total en pesos de todas las prestaciones.
F.El reintegro que deberán hacer las prepagas.
  */

function mostrar() 
{

	var nombre;
	var edad;
	var tipoAtencion;
	var tipoPrestacion;
	var precio = 2500;
	var respuesta = true;
	var contadorObraSocial = 0;
	var contadorSinPrestacion = 0;
	var contadorPrepaga = 0;
	var contadorConsultas = 0;
	var acumuladorPrecios;
	var mayorEdadTraumato;
	var prestacionTraumato;
	var nombreTraumato;
	var banderaTraumato = false;
	var contadorMenores = 0;
	var acumuladorPrepagas;

	while(respuesta==true)
	{

		nombre = prompt("Ingrese nombre");

		edad = prompt("Ingrese edad");

		tipoAtencion = prompt("Ingrese tipo de atencion: clínica, pediátrica o traumatológica").toLowerCase();

		while(tipoAtencion != "clinica" && tipoAtencion != "pediatrica" && tipoAtencion != "traumatologica")
		{
			tipoAtencion = prompt("Reingrese tipo de atencion: clínica, pediátrica o traumatológica").toLowerCase();
		}

		tipoPrestacion = prompt("Ingrese tipo de prestacion: prepaga, obra social, sin prestación").toLowerCase();

		while(tipoPrestacion != "prepaga" && tipoPrestacion != "obra social" && tipoPrestacion != "sin prestacion")
		{
			tipoPrestacion = prompt("Reingrese tipo de prestacion: prepaga, obra social, sin prestación").toLowerCase();
		}


		switch(tipoPrestacion) //A.Ingresos por obra social y sin prestación.
		{
			case "obra social":
				contadorObraSocial++;
				acumuladorPrecios += (precio * 0.5);
			break;
			case "sin prestacion":
				contadorSinPrestacion++;
				acumuladorPrecios += precio;
			break;
			default:
				contadorPrepaga++;
				acumuladorPrepagas += precio;
			break;
		}

		//B.Nombre y tipo de prestación del paciente de más edad en traumatología.
		if (tipoAtencion == "traumatologia")
		{
			if (edadPaciente > mayorEdadTraumato || banderaTraumato == false)
			{
				mayorEdadTraumato = edadPaciente;
				nombreTraumato = nombrePaciente;
				prestacionTraumato = tipoPrestacion;
				banderaTraumato = true;
			  }
		//D.Cuántos pacientes menores de edad solicitaron atención traumatológica.
			if (edad < 18)
			{
				contadorMenores++;
			}
			
		}
		
		contadorConsultas++;

		respuesta = confirm("Desea ingresar más pacientes?");

	} //fin while general

	//C.Qué tipo de prestación es la más utilizada.
	if (contadorObraSocial > contadorPrepaga && contadorObraSocial > contadorSinPrestacion)
	{
		masUsado = "obra social";
	}else
	{
		if(contadorPrepaga > contadorSinPrestacion)
		{
			masUsado = "prepaga";
		}
		else
		{
			masUsado = "sin prestación";
		}
	}

}

















/* 
Molteni Camila DIV I
E/S 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

function mostrar()
{
	var nombreIngresado;

	nombreIngresado = prompt("Ingrese el nombre");

	document.getElementById('txtIdNombre').value = nombreIngresado;
}*/

