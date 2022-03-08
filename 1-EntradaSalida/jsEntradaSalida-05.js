/*
LGJ

3.	De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)

El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que: 

   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 5000
   *Si tiene dos hijos le corresponde 8000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones

*/

function mostrar()
{
	var nombre;
	var apellido;
	var genero;
	var cantidadHijos;
	var controlador;

	var contadorMasculino;
	var contadorFemenino;
	var contadorNoBinario;

	var porcentajeMasculino;
	var porcentajeFemenino;
	var porcentajeNoBinario;

	var empleadoMasHijos;
	var maxHijos;

	var empleadoSinHijos;
	var banderaSinHijos;

	var contadorHijos;

	var asignacionFamiliar;

	controlador = 0;

	contadorFemenino = 0;
	contadorMasculino = 0;
	contadorNoBinario = 0;

	maxHijos = 0;

	banderaSinHijos = false;

	contadorHijos = 0;

	asignacionFamiliar = 0;

   do
   {
      nombre = prompt("Ingrese el nombre del empleado");

      apellido = prompt("Ingrese el apellido del empleado");

      genero = prompt("Ingrese el genero del empleado: Femenino - Masculino - No Binario");
      genero = genero.toLowerCase();
      
      while(genero != "femenino" && genero != "masculino" && genero != "no binario")
      {
         genero = prompt("Por favor reingrese el genero del empleado: Femenino - Masculino - No Binario");
         genero = genero.toLowerCase();
      }

      cantidadHijos = prompt("Ingrese la cantidad de Hijos del empleado");
      cantidadHijos = parseInt(cantidadHijos);
      
      while(isNaN(cantidadHijos) || cantidadHijos < 0)
      {
         cantidadHijos = prompt("Por favor reingrese la cantidad de Hijos del empleado");
         cantidadHijos = parseInt(cantidadHijos);
      }

      switch(genero)
      {
         case "femenino":
               contadorFemenino++;
            break;
         case "masculino":
               contadorMasculino++;
            break;
           default:
               contadorNoBinario++;

               if(cantidadHijos > maxHijos || controlador == 0)
               {
                  maxHijos = cantidadHijos;
                  empleadoMasHijos = nombre + " " + apellido;
               }
      }
      if(cantidadHijos == 0 || banderaSinHijos == false)
      {
         empleadoSinHijos = nombre + " " + apellido;
         banderaSinHijos = true;
      }

      switch(cantidadHijos)
      {
         case 0:
            break;
         case 1:
            asignacionFamiliar += 5000;
            break;
         case 2:
            asignacionFamiliar += 8000;
            break;
         default:
            asignacionFamiliar += 10000;  
      }

      controlador++

   } while(controlador < 10)


   porcentajeFemenino = (contadorFemenino * 100) / controlador;
   porcentajeMasculino = (contadorMasculino * 100) / controlador;
   porcentajeNoBinario = (contadorNoBinario * 100) / controlador;

   document.write("El porcentaje de empleadas de genero femenino es del: " + porcentajeFemenino.toFixed(2) +"% <br>");
   document.write("El porcentaje de empleados de genero masculino es del: " + porcentajeMasculino.toFixed(2) + "% <br>");
   document.write("El porcentaje de empleados de genero no binario es del: " +porcentajeNoBinario.toFixed(2) + "% <br>");

   document.write("<br> El empleado No binario con mas hijos es: " + empleadoMasHijos + " con " + maxHijos + " Hijos <br>");

   document.write("<br> El primer empleado sin hijos es: " + empleadoSinHijos + "<br>");

   document.write("<br> En concepto de asignacion la PYME debe pagar: $"+ asignacionFamiliar);

}	


/*
Simulacro parcial
Nro: 3
Div I
Ezequiel Moran

function mostrar()
{

    let nombre;
    let apellido;
    let genero;
    let cantidadHijos;
    let asignacion;
    let totalAsignacion;
    let contadorEmpleadoF;
    let contadorEmpleadoM;
    let contadorEmpleadoNb;

    let banderaPrimerNbSinHijos;
    let nombreNbSinHijos;
    let apellidoNbSinHijos; 
    
    let maximaCantidadDeHijosNb;
    let nombreNbConMasHijos;

    let acumuladorHijosF;
    let acumuladorHijosM;
    let acumuladorHijosNb;
    acumuladorHijosF= 0;
    acumuladorHijosM= 0;
    acumuladorHijosNb= 0;

    contadorEmpleadoF= 0;
    contadorEmpleadoM= 0;
    contadorEmpleadoNb= 0;
    totalAsignacion= 0;
    banderaPrimerNbSinHijos= false;
    banderaMaximaCantidadDeHijos= false;

    for (let i = 0; i < 10; i++)
    {
         
        nombre= prompt("Ingrese el nombre");
        apellido= prompt("Ingrese el apellido");
      
        genero= prompt("Ingrese el genero: Femenino, Masculino, No Binario ");

        while(genero != "Femenino" && genero != "Masculino" && genero != "No Binario")
        {
           genero = prompt("Error.. reingrese el genero: Femenino, Masculino, No Binario ");
        }

        cantidadHijos= prompt("Ingrese la cantidad de hijos ");
        cantidadHijos= parseInt(cantidadHijos);

        while(isNaN(cantidadHijos) ||cantidadHijos < 0)
        {
           cantidadHijos= prompt("Error.. reingrese la cantidad de hijos");
           cantidadHijos = parseInt(cantidadHijos);

        switch(genero)
        {
            case "Femenino":
            acumuladorHijosF+= cantidadHijos;
            contadorEmpleadoF++;     
            break;

            case "Masculino":
            acumulaadorHijosM+= cantidadHijos;
            contadorEmpleadoM++;    
            break;

            case "No binario":
            //b. El nombre del empleado No Binario con mas cantidad de hijos.
            if (cantidadHijos > maximaCantidadDeHijosNb || banderaMaximaCantidadDeHijos== false)
            {  
               maximaCantidadDeHijosNb= cantidadHijos;
               nombreNbConMasHijos= nombre;
            }
            acumuladorHijosNb+= cantidadHijos;
            contadorEmpleadoNb++;
            break;  
       }//FIN DEL SWITCH
       //c. Nombre y apellido del primer empleado que no tiene hijos.
            if (cantidadHijos == 0 || banderaPrimerNbSinHijos== false) 
            {
               nombreNbSinHijos= nombre;
               apellidoNbSinHijos= apellido;
               banderaPrimerNbSinHijos= true;
            }
            //d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones
            
            totalAsignacion+= asignacion;

    }//FIN DE FOR
   if (cantidadHijos > 2)
   {
      asignacion= 10000
   }
   else if (cantidadHijos == 2) 
   {
      asignacion= 8000;
   }
   else if (cantidadHijos < 1)
   { 
      asignacion= 5000;     
   }
   else{
   asignacion=0;
   }
    //a. Porcentaje de empleados por cada genero.
    document.write("Porcentaje de empleados Femenino " + ((contadorEmpleadoF / 100) * 10) "%<br>");
    document.write("Porcentaje de empleados Masculino " + ((contadorEmpleadoM / 100) * 10) "%<br>");
    document.write("Porcentaje de empleados No ninario " + ((contadorEmpleadoNb / 100) *10) "%<br>");
    //El nombre del empleado No Binario con mas cantidad de hijos.
    document.write("Nombre del empleado No Binario con mas cantidad de hijos " + nombreNbConMasHijos + "<br>");
    //c. Nombre y apellido del primer empleado que no tiene hijos.
    document.write("Nombre " + nombreNbSinHijos + " apellido " + apellidoNbSinHijos + "sin hijos<br>");
    // d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones*/
    document.write("total de dinero que debera pagar la PYME en concepto de asignaciones " + totalAsignacion + "<br>");
}FIN DE LA FUNCION





/*
Molteni Camila DIV I
E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{	
var nombre;
var edad;

nombre = txtIdNombre.value;	
edad = txtIdEdad.value; 

alert("Usted se llama " + nombre + " y tiene " + edad + " años")

//alert("Usted se llama" + " " + nombre + " " + "y tiene" + " "  + edad + " " + "años"); Ambas formas esta bien
}

//txtIdNombre
//txtIdEdad*/