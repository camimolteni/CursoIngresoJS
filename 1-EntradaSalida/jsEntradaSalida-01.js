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

PROBADO Y DA BIEN!!!!!*/

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
          tipoProducto= prompt("Error, ingrese el tipo de disco correspodiente");
      }
          precio= prompt("Ingrese el precio del producto");
          precio= parseInt(precio);

      while(precio <5000 || precio >18000)
      {
          precio= prompt("Error, reingrese el rango de precio indicado");
          precio= parseInt(precio);
      }
          marca= prompt("Ingrese la marca: Seagate / Western Digital / Kingston");

      while(marca !="Seagate" && marca !="Western Digital" && marca !="Kingston")
      {
          marca= prompt("Error, ingrese el tipo de marca correcta");
      }
          capacidad= prompt("Ingrese la capacidad; 250Gb / 500Gb / 1Tb / 2Tb");

      while(capacidad!= "250Gb" && capacidad!= "500Gb" && capacidad!= "1Tb" && capacidad!= "2Tb")
      {
          capacidad= prompt("Error, reingrese la capacidad");
      }
          cantidadUnidades= prompt("Ingrese la cantidad de unidades");
          cantidadUnidades= parseInt(cantidadUnidades);
      
      while(cantidadUnidades <0 || cantidadUnidades >50)
      {
         cantidadUnidades= prompt("Ingrese la cantidad de unidades");
         cantidadUnidades= parseInt(cantidadUnidades);
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



/*
Molteni Camila DIV I
E/S-01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	alert("Esto funciona de maravilla");
}*/