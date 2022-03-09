 /*. Una cervecería necesita realizar un sistema de ventas online, donde se calculará las
preferencias de 10 usuarios del sitio.
Los datos necesarios son:
-Nombre 
-Genero: (Masculino – Femenino –No binario)
-Edad (validar que sea mayor a 18 años)
-Tipo de cerveza:  Roja – Honey –Negra - Golden
-Preferencia: (tirada – en botella)
Calcular y mostrar en un document.write:
a.Porcentaje de usuarios que prefieren cada tipo de cerveza.
b.Cantidad de Mujeres entre 25 y 35 años que prefieren cerveza roja y tirada.
c.Preferencia del Masculino de más edad que toma Golden.*/

function mostrar()

{
    var control;
    var nombre;
    var genero;
    var edad;
    var tipoDeCerveza;
    var preferencia;
    var contadorRoja;
    var contadorHoney;
    var contadorNegra;
    var contadorGolden;
    var porcentajeRoja;
    var porcentaHoney;
    var porcentajeNegra;
    var porcentajeGolden;
    var contadorMujeres;
    var hombreMaximoGolden;
    var banderaHombreMaximo;
    var preferenciaHombreMaximo;
    

    control = 0;
    contadorRoja = 0;
    contadorHoney = 0;
    contadorNegra = 0;
    contadorGolden = 0; 
    contadorMujeres = 0;
    banderaHombreMaximo = false;
    
    

    while (control < 10)
    {
        nombre = prompt("Ingrese su nombre: ");

        genero = prompt("Ingrese su genero: masculino, femenino, no binario").toLowerCase();

        while(genero != "masculino" && genero != "femenino" && genero != "no binario")
        {
            genero = prompt("Error, reingrese su genero: masculino, femenino, no binario").toLowerCase();
        }

        edad = prompt("Ingrese a edad: Mayor a 18 años");
        edad = parseInt(edad);

        while(edad < 17)
        {
            edad = prompt("Ingrese a edad: Mayor a 18 años");
            edad = parseInt(edad);  
        }

        tipoDeCerveza = prompt("Ingrese el tipo de cerveza: roja, honey, negra, golden");

        while(tipoDeCerveza != "roja" && tipoDeCerveza != "honey" && tipoDeCerveza != "negra" && tipoDeCerveza != "golden")
        {
             tipoDeCerveza = prompt("Ingrese el tipo de cerveza: roja, honey, negra, golden");  
        }

        preferencia = prompt("Ingrese su preferencia: tirada, en botella");

        while(preferencia != "tirada" && preferencia != "en botella")
        {
            preferencia = prompt("Ingrese su preferencia: tirada, en botella");  
        }

        //a.Porcentaje de usuarios que prefieren cada tipo de cerveza.

        switch (tipoDeCerveza)
        {
            case "roja":
            contadorRoja++;
            if (genero == "femenino" && preferencia == "tirada")
            {
            	if (edad > 24 && edad < 36)
            	{
            		contadorMujeres++;
            	}
            }
            break;

            case "honey":
            contadorHoney++;
            break;

            case "negra":
            contadorNegra++;
            break;

            default:
            contadorGolden++;
            if (genero == "masculino")
            {
            	if (edad > hombreMaximoGolden || banderaHombreMaximo == false)
            	{
            		hombreMaximoGolden = edad;
            		preferenciaHombreMaximo = preferencia;
            		banderaHombreMaximo = true;
            	}
            }
            break;
        }

        //b.Cantidad de Mujeres entre 25 y 35 años que prefieren cerveza roja y tirada.
        //c.Preferencia del Masculino de más edad que toma Golden.



        control++;
    } // fin del while


    //a.Porcentaje de usuarios que prefieren cada tipo de cerveza.

    porcentajeRoja = contadorRoja / 10 * 100;
    porcentajeNegra = contadorNegra / 10 * 100;
    porcentajeGolden = contadorGolden / 10 * 100;
    porcentajeHoney = contadorHoney / 10 * 100;

    document.write("El porcentaje de usuarios que prefieren Honey:" + porcentajeHoney + "<br>");
    document.write("El porcentaje de usuarios que prefieren Negra:" + porcentajeNegra + "<br>");
    document.write("El porcentaje de usuarios que prefieren Golden:" + porcentajeGolden + "<br>");
    document.write("El porcentaje de usuarios que prefieren Roja:" + porcentajeRoja + "<br>");
    document.write("La cantidad de mujeres entre 25 y 35 años que prefieren cerveza roja y tirada:" + contadorMujeres + "<br>");
    document.write("Preferencia del masculino de mas edad que toma Golden:" + preferenciaHombreMaximo + "<br>");



}

/*
    Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la
    población para obtener distintos datos estadísticos:
    Se ingresará hasta que usuario decida:
    Nombre.
    Edad.
    Género: “F”, “M”, “NB”.
    Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
    Temperatura corporal (durante la primera noche).
    Se pide:
    a) El nombre y vacuna de la persona con mayor temperatura. nombreMayorTemperatura; vacunaMayorTemperatura;
    b) Cuántas personas de género Femenino recibieron la vacuna SputnikV. //
    c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra. // contadorNoBinarioAstrazenecaOtra;
    d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura 
    mayor a 38°.
    e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no
    presentaron fiebre. (37° o menos)

    HECHO EN CLASE REPASO


function mostrar()
{
//Variables de ingreso:
   var nombre;
   var edad;
   var genero;
   var vacuna;
   var temperaturaCorporal;
   
   var mayorTemperatura;
   var nombreMayorTemp;
   var vacunaMayorTemp;

   var contadorFemeninoSputnik=0;
   var contadorNoBinarioVacunas=0;
   var contadorFiebre=0;
   var contadorBajaTemperatura=0;

   var acumuladorEdadHombres=0;

   var promedioEdadHombres;

   var banderaMayorTemperatura=true;

   var respuesta=true;

   while(respuesta==true)
   {
      nombre=prompt("Ingrese un nombre: ");
   
      edad=parseInt(prompt("Ingrese un edad: "));
      while(isNaN(edad) || edad<0)
      {
         edad=parseInt(prompt("Error, ingrese un edad: "));  
      }
   
      genero=prompt("Ingrese un genero('f','m' o 'nb'): ");
      while(genero!='f' && genero!='m' && genero!='nb')
      {
         genero=prompt("Error ingrese un genero('f','m' o 'nb'): ");
      }
   
      vacuna=prompt('Ingrese una vacuna “sputnikv”, “astrazeneca”, “otra”: ');
      while(vacuna!='sputnikv' && vacuna!='astrazeneca' && vacuna!='otra')
      {
         vacuna=prompt('Error, ingrese una vacuna “sputnikv”, “astrazeneca”, “otra”: ');
      }
   
      temperaturaCorporal=parseInt(prompt("Ingrese su temperatura corporal: "));
      while(isNaN(temperaturaCorporal) || temperaturaCorporal<35 || temperaturaCorporal>45)
      {
         temperaturaCorporal=parseInt(prompt("Error ingrese su temperatura corporal: "));
      }
      
      if(temperaturaCorporal>mayorTemperatura || banderaMayorTemperatura==true)
      {
         mayorTemperatura=temperaturaCorporal;
         vacunaMayorTemp=vacuna;
         nombreMayorTemp=nombre;
         banderaMayorTemperatura=false;
      }

      switch(genero)
      {
         case "f":
         if(vacuna=="sputnikv")
         {
            contadorFemeninoSputnik++;
         }
         
         break;

         case "m":
            if(vacuna=="sputnikv" && temperaturaCorporal<38)
            {
               contadorBajaTemperatura++;
               acumuladorEdadHombres+=edad;
            }

         break;

         default:
            if(vacuna!="sputnikv")  // if(vacuna=="astrazeneca" || vacuna=="otra")
            {
               contadorNoBinarioVacunas++;
            }
         }

         if(vacuna=="astrazeneca" && temperaturaCorporal>38)
         {
            contadorFiebre++;
         }




      respuesta=confirm("Desea ingresar datos?");
   }
   if(contadorBajaTemperatura>0)
   {
      promedioEdadHombres=acumuladorEdadHombres/contadorBajaTemperatura;
   }
   else
   {
      promedioEdadHombres=0;
   }
   
   //a
   document.write("El nombre de la persona con mayor temperatura es: "+nombreMayorTemp+" y la vacuna que tiene es: "+vacunaMayorTemp+"<br>");
   //b
   document.write("Las cantidad de personas de genero femenino que se hayan aplicado la vacuna sputnik: "+contadorFemeninoSputnik+"<br>");
   //c
   document.write("La cantidad de personas de genero no binario con la vacuna astrazeneca u otra son: "+contadorNoBinarioVacunas+"<br>");
   //d 
   document.write("La cantidad de  personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38° es: "+contadorFiebre+"<br>");
   //e
   document.write(" El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es: "+promedioEdadHombres+"<br>");
}
*/