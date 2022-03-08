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

FUNCIONA, ESTA BIEN HECHO!*/

function mostrar()
{

  var control;
  var tipo;
  var precio;
  var cantidadUnidades;
  var marca;
  var capacidad;
  var banderaMinimoSsd;
  var cantidadMinimaSsd;
  var precioMinimoSsd;
  var marcaMinimaSsd;
  var banderaMaximoHdd;
  var capacidadMaximaHdd;
  var precioMaximoHdd;
  var cantidadMaximaHdd;
  var acumuladorHdd;



  control = 0;
  banderaMinimoSsd = false;
  acumuladorHdd = 0;


  while(control<5)
  {
    tipo = prompt("Ingrese el tipo de disco rigido: HDD, SSD, SSDM2").toLowerCase();

    while(tipo != "hdd" && tipo != "ssd" && tipo != "ssdm2")
    {
      tipo = prompt("Reingrese el tipo de disco rigido: hdd, ssd, ssdm2").toLowerCase();
    }

    precio = prompt("Ingrese el precio: Entre $5000 y $18000");
    precio = parseInt(precio);

    while(precio < 5000 || precio > 18000)
    {
      precio = prompt("Reingrese el precio: Entre $5000 y $18000");
      precio = parseInt(precio);
    }

    cantidadUnidades = prompt("Ingrese la cantidad de unidades, hasta 50:");
    cantidadUnidades = parseInt(cantidadUnidades);

    while(cantidadUnidades <1 || cantidadUnidades >50)
    { 
      cantidadUnidades = prompt("Reingrese la cantidad de unidades, hasta 50:");
      cantidadUnidades = parseInt(cantidadUnidades);
    }

    marca = prompt("Ingrese la marca: Seagate, Western Digital, Kingston").toLowerCase();

    while(marca != "seagate" && marca != "western digital" && marca != "kingston")
    {
      marca = prompt("Ingrese la marca: “Seagate”, “Western Digital”, “Kingston").toLowerCase();
    }

    capacidad = prompt("Ingrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb").toLowerCase();

    while(capacidad != "250gb" && capacidad != "500gb" && capacidad != "1tb" && capacidad != "2tb")
    {
      capacidad = prompt("Reingrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb").toLowerCase();
    }


    switch(tipo)
    {
    	case "ssd":
    		if (precio < precioMinimoSsd || banderaMinimoSsd == false)
    		{
      			cantidadMinimaSsd = cantidadUnidades;
      			precioMinimoSsd = precio;
      			marcaMinimaSsd = marca;
      			banderaMinimoSsd = true;
      		}
    	break;

    	case "hdd":
    		if (precio > precioMaximoHdd || banderaMaximoHdd == false)
    		{
     			capacidadMaximaHdd = capacidad;
     			precioMaximoHdd = precio;
      			cantidadMaximaHdd = cantidadUnidades;
      			banderaMaximoHdd = true;
      			acumuladorHdd += cantidadUnidades;
    	    }
    	break;
    }


    control++;
  }//fin while
  

  document.write("De los discos SSD mas barato se compraron " + cantidadMinimaSsd + " unidades. Y su marca es " + marcaMinimaSsd + "<br>");
  document.write("De los discos HDD mas caro se compraron" + cantidadMaximaHdd + " unidades. Y su capacidad de almacenamiento es " + capacidadMaximaHdd + "<br>");
  document.write("El total de unidades de los discos HDD es de:" + acumuladorHdd + "<br>");
 

  
}