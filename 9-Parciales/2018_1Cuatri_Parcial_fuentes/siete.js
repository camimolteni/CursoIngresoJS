/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos
alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a
pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a) El importe total a pagar bruto, sin descuento.
b) El importe total a pagar con descuento (solo si corresponde)
c) Informar el tipo con más cantidad de bolsas.
d) El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/
function mostrar()
{ 
  var tipo;
  var cantidadBolsas;
  var precioPorBolsa;
  var totalSinDescuento;
  var totalConDescuento;
  var compraMasBarata;
  var importeBruto;
  var acumuladorBolsas;
  var acumuladorYerba;
  var acumuladorAzucar;
  var acumuladorCafe;
  var porcentaje;
  var importeTotal;
  var tipoConMasBolsas;
  var tipoMasBarato;
  var precioMasBarato;

  acumuladorBolsas = 0;
  acumuladorYerba = 0;
  acumuladorAzucar = 0;
  acumuladorCafe = 0;
  porcentaje = 0;
  importeBruto = 0;
  banderaPrecioMinimo = false;

  respuesta = true;

  while(respuesta == true)
  {
    tipo = prompt("Ingrese el tipo de producto: Yerba, Azucar, Cafe");

    while(tipo != "Azucar" && tipo != "Yerba" && tipo != "Cafe")
    {
      tipo = prompt("Error, ingrese un producto valido: Yerba, Cafe, Azucar");
    }

    cantidad = prompt("Ingrese la cantidad de bolsas (debe ser mayor a 0)");
    cantidad = parseInt(cantidad);

    while(isNaN)(cantidad < 0)
    {
      cantidad = prompt("Error, ingrese una cantidad valida, mayor a 0");
      cantidad = parseInt;
    }

    precioPorBolsa = prompt("Ingrese el precio por bolsa");
    precioPorBolsa = parseInt(precioPorBolsa);

    while(isNaN)(precioPorBolsa<0)
    {
    precioPorBolsa = prompt("Error, ingrese un precio valido");
    precioPorBolsa = parseInt(precioPorBolsa);
    }


    /*d) El tipo de la compra más barata. (sobre el Bruto sin descuento)*/
    if (precioPorBolsa < precioMasBarato || banderaPrecioMinimo == false)
    {
      precioMasBarato = precioPorBolsa;
      banderaPrecioMinimo = true;
      tipoMasBarato = tipo;
    }

    respuesta=confirm("Desea ingresar mas datos?");

  } //cierre while general
  /*c) Informar el tipo con más cantidad de bolsas.*/
  acumuladorBolsas = acumuladorCafe + acumuladorAzucar + acumuladorYerba;

  if (acumuladorCafe > acumuladorAzucar && acumuladorCafe > acumuladorYerba)
  {
    tipoConMasBolsas = "Cafe";
  }
  else
  { 
    if (acumuladorAzucar>acumuladorYerba)
    {
      tipoConMasBolsas = "Azucar";
    }
      else
      {
        tipoConMasBolsas = "Yerba";
      }
    }
  }


   /*a) El importe total a pagar bruto, sin descuento.*/
  importeBruto += cantidadBolsas + precioPorBolsa;

  /*Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.*/
  if (acumuladorBolsas > 10)
  {
    porcentaje = 15;
  }
  else /*Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a
pagar.*/
{ 
    if (acumuladorBolsas > 5)
    {
      porcentaje = 10;
    }


    /*b) El importe total a pagar con descuento (solo si corresponde)*/

    importeTotal = importeBruto - importeBruto * porcentaje / 100;

  document.write("El importe total bruto a pagar: "+importeBruto+  "<br>");
  document.write("El importe total a pagar con descuento (si corresponde): "+importeTotal+ "<br>");
  document.write("El tipo con mas cantidad de bolsas es: " +acumuladorBolsas+ "<br>");
  document.write("El tipo de la compra mas barata es: " +tipoMasBarato+ "<br>");

}














/*function mostrar()
{
  var seguir;
   var tipo;
   var precioIngresado;
   var cantidadUnidades;
   var marca;
   var capacidad;
   var banderaSSDmasBarato;
   var precioSSDmasBarato;
   var cantidadUnidadesMasBarato;
   var marcaMasBarato;
   var precioHDDMasCaro;
   var capacidadAlmacenamientoMasCaro;
   var cantidadUnidadesMasCaro;
   var banderaMascaro;
   var acumuladorHDD;
   capacidadAlmacenamientoMasCaro=0;
   acumuladorHDD=0;
   banderaMascaro=true;
   cantidadUnidadesMasBarato=0;
   banderaSSDmasBarato=true;
   seguir=true;
   while(seguir==true)
   {
      tipo=prompt("Ingrese el tipo de disco: HDD/SSD/SSDM2");
      while(tipo!="HDD" && tipo!="SSD" && tipo!="SSDM2")
      {
         tipo=prompt("ingrese un tipo de disco valido HDD/SSD/SSDM2");

      }
      precioIngresado=prompt("Ingrese el precio del disco");
      precioIngresado=parseInt(precioIngresado);
      while(precioIngresado<5000 || precioIngresado>18000)
      {
         precioIngresado=prompt("ingrese un valor valido entre 5000 y 18000");
         precioIngresado=parseInt(precioIngresado);
      }
      cantidadUnidades=prompt("Ingrese la cantidad de unidades.")
      cantidadUnidades=parseInt(cantidadUnidades)
      while(cantidadUnidades<0 || cantidadUnidades>50)
      {
         cantidadUnidades=prompt("Ingrese una cantidad Valida hasta 50 unidades");
         cantidadUnidades=parseInt(cantidadUnidades);
      }
      marca=prompt("Ingresar la marca del disco ( Seagate, Western Digital, Kingston)");
      while(marca!="Seagate" && marca!="Western Digital" && marca!="Kingston")
      {
         marca=prompt("Ingrese una opcion valida ( Seagate, Western Digital, Kingston) ");
      }
      capacidad=prompt("Ingrese la capacidad 250GB, 500GB, 1TB, 2TB ");
      while(capacidad!= "250GB" && capacidad!="500GB" && capacidad!="1TB" && capacidad!="2TB")
      {
         capacidad=prompt("Ingrese una capacidad valida: 250GB, 500GB, 1TB, 2TB");
      }
      switch(tipo)
      {
         case "SSD":
            if(precioIngresado<precioSSDmasBarato|| banderaSSDmasBarato==true)
            {
               precioSSDmasB7arato=precioIngresado;
               cantidadUnidadesMasBarato=cantidadUnidades;
               marcaMasBarato=marca;
               banderaSSDmasBarato=false;
            }
            break;
         case "HDD":
            
            if(precioIngresado>precioHDDMasCaro||banderaMascaro==true)
            {
               precioHDDMasCaro=precioIngresado;
               capacidadAlmacenamientoMasCaro=capacidad;
               cantidadUnidadesMasCaro=cantidadUnidades;
               banderaMasCaro=false;
            }
            break;
            acumuladorHDD=acumuladorHDD+cantidadUnidades;


      }
      seguir=confirm("Desea ingresar otra");
   }
   document.write("Del SSD mas barato se compraron :"+cantidadUnidadesMasBarato+ " unidades y la marca fue "+marcaMasBarato+"<br>");
   document.write("Del HDD mas caro se compraron "+cantidadUnidadesMasCaro+" unidades y de la capadidad de "+capacidadAlmacenamientoMasCaro+"<br>");
   document.write("la cantidad de HDD" + acumuladorHDD+" unidades "+"<br>");
}*/
