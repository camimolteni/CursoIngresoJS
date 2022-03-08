/*Camila Molteni DIV I
2. Un jugador de League of Legends tiene un fin de semana libre y va a jugar 15
partidas.
Para mejorar su jugabilidad, por cada partida jugada va a registrar:
- Modo de juego ("Normal", "Clasificatoria", "ARAM")
- Nombre del personaje que usó (“Vayne”,”Annie”,”Renata”)
- La cantidad de asesinatos. (No puede ser negativo)
- La cantidad de muertes. (No puede ser negativo)
- La cantidad de asistencias. (No puede ser negativo)
De lo registrado, al jugador le interesa lo siguiente:
a) El modo de juego más jugado.
b) De las partidas ARAM, el personaje con menos asistencias.
c) El promedio de muertes.
d) El porcentaje sobre los modos de juego. (ejemplo: 20% normal, 50% clasificatoria y
30 % ARAM.)

FUNCIONA Y ESTA BIEN HECHO!*/

function mostrar()

{

  var modoDeJuego;
  var nombreDelPersonaje;
  var cantidadAsesinatos;
  var cantidadMuertes;
  var cantidadAsistencias;
  var control;

  var contadorNormal;
  var contadorClasificatoria;
  var contadorAram;
  var modoMasJugado;

  var asistenciaMinima;
  var personajeMenosAsistencias;
  var banderaMenosAsistencias;
  var nombreMenosAsistencias;

  var promedioMuertes;
  var acumuladorMuertes;
  var porcentajeNormal;
  var porcentajeClasificatoria;
  var porcentajeAram;


  control = 0;
  contadorNormal = 0;
  contadorClasificatoria = 0;
  contadorAram = 0;
  banderaMenosAsistencias = false;
  acumuladorMuertes = 0;

  while(control < 15)
  {
    modoDeJuego = prompt("Ingrese el modo de juego: normal, clasificatoria, ARAM").toLowerCase();

    while(modoDeJuego != "normal" && modoDeJuego != "clasificatoria" && modoDeJuego != "aram")
    {
      modoDeJuego = prompt("Reingrese el modo de juego: normal, clasificatoria, ARAM");
    }

    nombreDelPersonaje = prompt("Ingrese el nombre del personaje: Vayne, Annie, Renata").toLowerCase();

    while(nombreDelPersonaje != "vayne" && nombreDelPersonaje != "annie" && nombreDelPersonaje != "renata")
    {
      nombreDelPersonaje = prompt("Reingrese el nombre del personaje: Vayne, Annie, Renata");
    }

    cantidadAsesinatos = prompt("Ingrese la cantidad de asesinatos:");
    cantidadAsesinatos = parseInt(cantidadAsesinatos);

    while(cantidadAsesinatos < 0)
    {
      cantidadAsesinatos = prompt("Reingrese la cantidad de asesinatos:");
      cantidadAsesinatos = parseInt(cantidadAsesinatos);
    }

    cantidadMuertes = prompt("Ingrese la cantidad de muertes:");
    cantidadMuertes = parseInt(cantidadMuertes);

    while(cantidadMuertes < 0)
    {
      cantidadMuertes = prompt("Reingrese la cantidad de muertes:");
      cantidadMuertes = parseInt(cantidadMuertes);
    }

    cantidadAsistencias = prompt("Ingrese la cantidad de asistencias:");
    cantidadAsistencias = parseInt(cantidadAsistencias);

    while(cantidadAsistencias < 0)
    {
      cantidadAsistencias = prompt("Reingrese la cantidad de asistencias:");
      cantidadAsistencias = parseInt(cantidadAsistencias);
    }

    //a) El modo de juego más jugado.

    switch(modoDeJuego)
    {
      case "normal":
      contadorNormal++;
      break;

      case "clasificatoria":
      contadorClasificatoria++;
      break;

      default:
      contadorAram++;
      ////b) De las partidas ARAM, el personaje con menos asistencias.
      if(cantidadAsistencias < asistenciaMinima || banderaMenosAsistencias == false)
      {
        nombreMenosAsistencias = nombreDelPersonaje;
        asistenciaMinima = cantidadAsistencias;
        banderaMenosAsistencias = true;
      }
      break;
    }

    //c) El promedio de muertes.
    acumuladorMuertes += cantidadMuertes;


    control++;
  } //fin while general

  if(contadorNormal > contadorClasificatoria && contadorNormal > contadorAram)
  {
    modoMasJugado = "Normal";
  }
  else
    {
      if (contadorClasificatoria > contadorAram)
      {
         modoMasJugado = "Clasificatoria";
      }
      else
      {
         modoMasJugado = "ARAM";
      }
    }


  promedioMuertes = acumuladorMuertes / control;

  //d) El porcentaje sobre los modos de juego. (ejemplo: 20% normal, 50% clasificatoria y 30 % ARAM.)

  porcentajeNormal = (contadorNormal * 100) / control
  porcentajeClasificatoria = (contadorClasificatoria * 100) / control;
  porcentajeAram = (contadorAram *100) / control;

  document.write("El modo de juego mas jugado fue: " + modoMasJugado + "<br>");
  document.write("De las partidas de ARAM, el personaje con menos asistencias: " + nombreMenosAsistencias + "<br>");
  document.write("El promedio de muertes: " + promedioMuertes + "<br>");
  document.write("El porcentaje de juego normal: " + porcentajeNormal + "<br>");
  document.write("El porcentaje de juego clasificatoria: " + porcentajeClasificatoria + "<br>");
  document.write("El porcentaje de juego ARAM: " + porcentajeAram + "<br>");





}










/*function mostrar()
{
    var modoDeJuego;
    var nombreDelPersonaje;
    var cantidadDeAsesinatos;
    var cantidadDeMuertes;
    var cantidadDeAsistencias;
    var control;
    var juegoNormal;
    var juegoClasificatoria;
    var juegoAram;
    var acumuladorMuertes;
    var banderaPersonajeMinimo;
    var nombreMenosAsistencias;
    var personajeMenosAsistencias;
    var porcentaje;
    var contadorNormal;
    var contadorAram;
    var contadorClasificatoria;
    var acumuladorNormal;
    var acumuladorAram;
    var acumuladorClasificatoria;


    acumuladorMuertes = 0;
    porcentaje = 0;
    contadorNormal = 0;
    contadorClasificatoria = 0;
    contadorAram = 0;
    acumuladorClasificatoria = 0;
    acumuladorAram = 0;
    acumuladorNormal = 0;
    banderaPersonajeMinimo = false;
    control = 0;


    while(control <2)
    {
      modoDeJuego = prompt("Ingrese el modo de juego: normal, clasificatoria, aram").toLowerCase();

      while(modoDeJuego != "normal" && modoDeJuego != "clasificatoria" && modoDeJuego != "aram")
      {
        modoDeJuego = prompt("Error, ingrese el modo de juego: normal, clasificatoria, aram").toLowerCase();
      }

      nombreDelPersonaje = prompt("Ingrese el nombre del personaje: Vayne, Annie, Renatta").toLowerCase();

      while(nombreDelPersonaje != "vayne" && nombreDelPersonaje != "annie" && nombreDelPersonaje != "rennata")
      {
        nombreDelPersonaje = prompt("Ingrese el nombre del personaje: Vayne, Annie, Renatta").toLowerCase();
      }

      cantidadDeAsesinatos = prompt("Ingrese la cantidad de asesinatos: ");
      cantidadDeAsesinatos = parseInt(cantidadDeAsesinatos);

      while(isNaN(cantidadDeAsesinatos) || cantidadDeAsesinatos <1)
      {
        cantidadDeAsesinatos = prompt("Ingrese la cantidad de asesinatos: ");
        cantidadDeAsesinatos = parseInt(cantidadDeAsesinatos);
      }

      cantidadDeMuertes = prompt("Ingrese la cantidad de muertes: ");
      cantidadDeMuertes = parseInt(cantidadDeMuertes);

      while(isNaN(cantidadDeMuertes) || cantidadDeMuertes <1)
      {
        cantidadDeMuertes = prompt("Ingrese la cantidad de muertes: ");
        cantidadDeMuertes = parseInt(cantidadDeMuertes);
      }

      cantidadDeAsistencias = prompt("Ingrese la cantidad de asistencias: ");
      cantidadDeAsistencias = parseInt(cantidadDeAsistencias);

      while(isNaN(cantidadDeAsistencias) || cantidadDeAsistencias <1)
      {
        cantidadDeAsistencias = prompt("Ingrese la cantidad de asistencias: ");
        cantidadDeAsistencias = parseInt(cantidadDeAsistencias);
      }

      //a) El modo de juego más jugado.
      if (juegoNormal > juegoClasificatoria && juegoNormal > juegoAram)
      {
        document.write("El modo de juego mas jugado es el normal. <br>");
      }
        else
        {
          if (juegoClasificatoria > juegoAram)
          {
            document.write("El modo de juego mas jugado es el clasificatoria. <br>");
          
        }
          else
          {
            document.write("El modo de juego mas jugado es el ARAM. <br>");
          }
          }

      //b) De las partidas ARAM, el personaje con menos asistencias.
      if (modoDeJuego == "aram" || banderaPersonajeMinimo == false)
      {
        nombreMenosAsistencias = nombreDelPersonaje;
        personajeMenosAsistencias = cantidadDeAsistencias;
        banderaPersonajeMinimo = true;
      }

      //c) El promedio de muertes.
      acumuladorMuertes += cantidadDeMuertes;

      //d) El porcentaje sobre los modos de juego. (ejemplo: 20% normal, 50% clasificatoria y 30 % ARAM.)
   

      switch(modoDeJuego)
      {
        case "normal":
        contadorNormal++;
        porcentaje = (contadorNormal * 100) / control;
        break;

        document.write("El porcentaje del juego normal es: " + porcentaje + "<br>"); //deberian estar abajo de todo

        case "clasificatoria":
        contadorClasificatoria++;
        porcentaje = (contadorClasificatoria * 100) / control; // la cuenta esta bien
        break;

        document.write("El porcentaje del juego clasificatoria es: " + porcentaje + "<br>");

        default:
        contadorAram++;
        porcentaje = (contadorAram * 100) / control;
        break;

        document.write("El porcentaje del juego ARAM es: " + porcentaje + "<br>");
      }





    control++;
    }// fin del while

    promedio = acumuladorMuertes / control;



  document.write("De las partidas del ARAM, el personaje con menos asistencias es: " + nombreMenosAsistencias + "<br>");
  document.write("El promedio de muertes es de: " + promedio + " <br>");
  

}*/


/*{
    var nombrePersonaje;
    var modoJuego;
    var cantidadAsesinatos;
    var cantidadMuertes;
    var cantidadAsistencias;
    var contadorPartidas;
    var contadorNormal = 0;
    var contadorClasificatoria = 0;
    var contadorARAM = 0;
    var asistenciaMinima;
    var nombrePersonajeMinimo;
    var banderaMinima = true;
    var acumuladorMuertes = 0;
    var promedioMuertes;
    var porcentajeNormal;
    var porcentajeClasisficatoria;
    var pocentajeARAM;

    contadorPartidas = 0;

    while(contadorPartidas < 15)
    {
        switch(modoJuego) // ej A
        {
            case "Normal":
                contadorNormal++;
            break;
            case "ARAM":
                contadorARAM++;
                //     if(cantidadAsistencias < asistenciaMinima || contadorARAM == 1) Alternativa
                   // {
                     //   asistenciaMinima = cantidadAsistencias;
                     //   nombrePersonajeMinimo = nombrePersonaje;
                   // }
                if(cantidadAsistencias < asistenciaMinima || banderaMinima == true)// ej B
                {
                    asistenciaMinima = cantidadAsistencias;
                    nombrePersonajeMinimo = nombrePersonaje;
                    banderaMinima = false;
                }
            break;
            default:
                contadorClasificatoria++;
        }

        acumuladorMuertes += cantidadMuertes;



        contadorPartidas++;
    }

    // ej A
    // falta la comparación para saber cual se jugó más


    // ej C
    promedioMuertes = acumuladorMuertes / 15;

    // ej D
    porcentajeNormal = contadorNormal * 100 / 15;
    porcentajeClasisficatoria = contadorClasificatoria * 100 / 15;
    pocentajeARAM = contadorARAM * 100 / 15;
}
*/





















/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos,
 de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.

PROBADO Y DA BIEN!!!!!

function mostrar()
{
   var tipoProducto;
   var precio;
   var cantidad;
   var marca;
   var capacidad;
   var cantidadUnidades;

   var cantidadUnidadesSSD;
   var precioMasBaratoSSD;
   var marcarMasBarataSSD;
   var banderaMasBarataSSD;
   
   var precioMayorHDD;
   var cantidadUnidadesDisponiblesHDD; 
   var capacidadDeAlmacenamientoHDD
   var acumuladorDeUnidadesHDD; 
   var banderaMayorprecioHDD;

   cantidadUnidadesSSD= 0;
   precioMasBaratoSSD= 0;
   banderaMasBarataSSD= true;
   
   precioMayorHDD= 0;
   acumuladorDeUnidadesHDD= 0;
   cantidadUnidadesDisponiblesHDD= 0;
   banderaMayorprecioHDD= true;

   contador= 0;

   while(contador < 5)
   {
      tipoProducto= prompt("Ingrese el tipo de disco");

      while(tipoProducto !="HDD" && tipoProducto !="SSD" && tipoProducto !="SSDM2")
      {
          tipoProducto = prompt("Error, ingrese el tipo de disco correspodiente");
      }
          precio = prompt("Ingrese el precio del producto");
          precio = parseInt(precio);

      while(precio <5000 || precio >18000)
      {
          precio = prompt("Error, reingrese el rango de precio indicado");
          precio = parseInt(precio);
      }
          marca = prompt("Ingrese la marca: Seagate / Western Digital / Kingston");

      while(marca !="Seagate" && marca !="Western Digital" && marca !="Kingston")
      {
          marca = prompt("Error, ingrese el tipo de marca correcta");
      }
          capacidad = prompt("Ingrese la capacidad; 250Gb / 500Gb / 1Tb / 2Tb");

      while(capacidad!= "250Gb" && capacidad!= "500Gb" && capacidad!= "1Tb" && capacidad!= "2Tb")
      {
          capacidad = prompt("Error, reingrese la capacidad");
      }
          cantidadUnidades = prompt("Ingrese la cantidad de unidades");
          cantidadUnidades = parseInt(cantidadUnidades);
      
      while(cantidadUnidades <0 || cantidadUnidades >50)
      {
         cantidadUnidades = prompt("Ingrese la cantidad de unidades");
         cantidadUnidades = parseInt(cantidadUnidades);
      }
       

      switch(tipoProducto)
      {
        case "SSD": 
            if (precio < precioMasBaratoSSD || banderaMasBarataSSD == true)
            {  
               precioMasBaratoSSD= precio;
               cantidadUnidadesSSD= cantidadUnidades;
               marcarMasBarataSSD= marca;
               banderaMasBarataSSD = false;
            }  
            break;

        case "HDD": //estoy buscando el mas caro de los HDD
            if (precio > precioMayorHDD || banderaMayorprecioHDD == true)
            {
               precioMayorHDD= precio;
               cantidadUnidadesDisponiblesHDD= cantidadUnidades;
               capacidadDeAlmacenamientoHDD= capacidad; 
               banderaMayorprecioHDD= false;
            }
            
            acumuladorDeUnidadesHDD= acumuladorDeUnidadesHDD + cantidadUnidades;

            break;
      }//CIERRA EL SWITCH..
      contador ++;
   }// CIERRA EL WHILE GENERAL..

   document.write("Del SSD mas barato se compraron :"+cantidadUnidadesSSD+ " unidades y la marca fue "+marcarMasBarataSSD+"<br>");
   document.write("Del HDD mas caro se compraron "+cantidadUnidadesDisponiblesHDD+" unidades y de la capadidad de "+capacidadDeAlmacenamientoHDD+"<br>");
   document.write("la cantidad de HDD"+acumuladorDeUnidadesHDD+" unidades "+"<br>");


  
}




Molteni Camila DIV I
E/S-01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	alert("Esto funciona de maravilla");
}*/