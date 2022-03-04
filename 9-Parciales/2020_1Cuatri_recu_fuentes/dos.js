
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