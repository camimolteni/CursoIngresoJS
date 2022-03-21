/*Camila Molteni DIV I 

1.	Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.



function mostrar()

{
	var marcaProducto;
	var paisDeOrigen;
	var control;
	var importeIngresado;
	var banderaImporte;
	var paisMin;
	var importeMin;
	var importeMax;
	var marcaMax;
	var promedio;
	var importeTotal;
	var productosChina;
	var contadorChina;
	var importeMax;
	var acumuladorImporte;
	var descuentoImpMax;

	control = 0;
	banderaImporte = false;
	contadorChina = 0;
	acumuladorImporte = 0;


	while(control < 2)
	{
		importeIngresado = prompt("Ingrese el importe: ");
		importeIngresado = parseInt(importeIngresado); 

		marcaProducto = prompt("Ingrese la marca del producto");

		paisDeOrigen = prompt("Ingrese el pais de origen: China, Uruguay, Paraguay");

		while (paisDeOrigen != "china" && paisDeOrigen != "uruguay" && paisDeOrigen != "paraguay")
		{
			paisDeOrigen = prompt("Error, ingrese un pais de origen valido: China, Uruguay, Paraguay");
		}

	if (importeMin > importeIngresado || banderaImporte == false)
	{
		paisMin = paisDeOrigen;
		importeMin = importeIngresado;
	}

	if (importeMax < importeIngresado || banderaImporte == false)
	{
		marcaMax = marcaProducto
		importeMax = importeIngresado;
	}

	acumuladorImporte += importeIngresado;

	if (paisDeOrigen == "china")
	{
		contadorChina++;
	}

	banderaImporte = true;

	control++;
	} // fin while general

	promedio = acumuladorImporte / control;


	descuentoImpMax = importeMax - importeMax * 10/100;

	document.write("El minimo importe ingresado es: " + importeMin + " y su pais: " + paisMin + "<br>");
	document.write("El maximo importe ingresado es: " + importeMax + " y su marca: " + marcaMax + "<br>");
	document.write("El promedio es: " + promedio + "<br>");
	document.write("La cantidad de productos de china es: " + contadorChina + "<br>");
	document.write("El total con descuento es: " + descuentoImpMax + "<br>");




}	*/

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

FUNCIONA Y ESTA BIEN HECHO!

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





}*/


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

/*LIZZIO JULIETA DIV I
EJERCICIO 1
1.  Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.  Minimo importe con su pais
b.  Maximo importe con su marca
c.  Promedio importe
d.  Cantidad de productos de China
e.  Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

/*function mostrar()
{
    var importe;
    var marca;
    var paisOrigen;
    var contador;
    var minimoImporte;
    var banderaImporteMinimo;
    var paisMinimoImporte;
    var maximoImporte;
    var marcaMaximoImporte;
    var contadorChina;
    var acumuladorImporte;
    var promedioImporte;
    var maximoImporteConDescuento;
    var banderaImporteMaximo;
    

    contador = 0;
    banderaImporteMaximo = false;
    banderaImporteMinimo = false;
    contadorChina = 0;
    acumuladorImporte = 0;
    


    while(contador < 5)
    {
        importe = prompt("Ingrese el importe del producto");
        importe = parseFloat(importe);

        marca = prompt("Ingrese la marca del producto");
        
        paisOrigen = prompt("Ingrese el pais de origen: China, Uruguay, Paraguay");
        while(paisOrigen != "China" && paisOrigen != "Uruguay" && paisOrigen != "Paraguay")
        {
            paisOrigen = prompt("Reingrese el pais de origen: China, Uruguay, Paraguay");
        }

        //a.    Minimo importe con su pais

        if(minimoImporte > importe || banderaImporteMinimo == false )
        {
            minimoImporte = importe;
            paisMinimoImporte = paisOrigen;
            banderaImporteMinimo = true;

        }
        //b.    Maximo importe con su marca
        if(maximoImporte < importe || banderaImporteMaximo == false)
        {
            maximoImporte = importe;
            marcaMaximoImporte = marca;
            banderaImporteMaximo = true;
            

        }

        //c.    Promedio importe
        acumuladorImporte += importe;



        //d.    Cantidad de productos de China
        if(paisOrigen == "China")
        {
            contadorChina++;
        }
    
    contador++;
    }
    //c.    Promedio importe
    promedioImporte = acumuladorImporte / contador;
    
    //e.    Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
    maximoImporteConDescuento = maximoImporte - maximoImporte * 10/100;

    document.write("El minimo importe es " + minimoImporte + " en " + paisMinimoImporte + "<br>");
    document.write("El maximo importe es " + maximoImporte + " y su marca es " + marcaMaximoImporte + "<br>");
    document.write("EL promedio importe es " + promedioImporte + "<br>");
    document.write("Cantidad de productos de China es " + contadorChina + "<br>");
    document.write("El maximo con un descuento del 10% queda en " + maximoImporteConDescuento + "<br>");

}*/


