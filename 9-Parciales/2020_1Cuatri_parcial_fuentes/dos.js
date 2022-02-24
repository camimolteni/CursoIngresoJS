/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  var tipo;
  var cantidadBolsas;
  var precioUnidad;
  var respuesta;
  var acumuladorBolsas;
  var porcentaje;
  var importeBruto;
  var importeTotal;
  var acumuladorArena;
  var acumuladorCal;
  var acumuladorCemento;
  var tipoConMasCantidad;
  var precioMaximo;
  var banderaPrecioMasCaro;
  var tipoMasCaro;

  respuesta = true;
  porcentaje = 0;
  acumuladorBolsas = 0;
  importeBruto = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  banderaPrecioMasCaro = false;

  while(respuesta==true)
  {
  	tipo = prompt("Ingrese el tipo de producto (arena, cal o cemento): ");

  	while(tipo!="arena" && tipo!="cal" && tipo!="cemento")
  	{
  		tipo = prompt("Error. Intente nuevamente: arena, cal o cemento ");
  	}

  	cantidadBolsas = prompt("Ingrese la cantidad: ");
  	cantidadBolsas = parseInt(cantidadBolsas);

  	while(isNaN(cantidadBolsas)|| cantidadBolsas<1)
  	{
	  	cantidadBolsas = prompt("Error. Ingrese una cantidad válida: ");
	  	cantidadBolsas = parseInt(cantidadBolsas);
  	}

  	precioUnidad = prompt("Ingrese el precio: ");
  	precioUnidad = parseInt(precioUnidad);

  	while(isNaN(precioUnidad)|| precioUnidad<1)
  	{
	  	precioUnidad = prompt("Error. Ingrese un precio válido: ");
	  	precioUnidad = parseInt(precioUnidad);
  	}


//a) El importe total a pagar , bruto sin descuento y...
  	importeBruto += cantidadBolsas * precioUnidad; 

//d) Informar el tipo con mas cantidad de bolsas.
  	switch(tipo)
  	{
  		case "arena":
  		acumuladorArena = cantidadBolsas + acumuladorArena;
  		break;
  		case "cal":
  		acumuladorCal = cantidadBolsas + acumuladorCal;
  		break;
  		default:
  		acumuladorCemento = cantidadBolsas + acumuladorCemento;
  		break;
  	}
//f) El tipo mas caro

	if (precioUnidad>precioMaximo || banderaPrecioMasCaro == false) 
	{
		precioMaximo = precioUnidad;
		banderaPrecioMasCaro = true;
		tipoMasCaro = tipo;
	}


  	respuesta = confirm("Desea ingresar más?");

  }//fin while general

  	acumuladorBolsas = acumuladorArena + acumuladorCal + acumuladorCemento;  

  	if (acumuladorArena>acumuladorCemento && acumuladorArena>acumuladorCal) 
  	{
  		tipoConMasCantidad = "arena";
  	}
  	else
  	{
  		if (acumuladorCemento>acumuladorCal) 
  		{
  			tipoConMasCantidad = "cemento";
  		}
  		else
  		{
  			tipoConMasCantidad = "cal";
  		}
  	}

//Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  if (acumuladorBolsas>30) 
  {
  	porcentaje = 25;
  }
  else //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  {
  	if (acumuladorBolsas>10) 
  	{
  		porcentaje = 15;
  	}
  }

//b) el importe total a pagar con descuento(solo si corresponde)
  importeTotal = importeBruto - importeBruto * porcentaje/100;

  alert(tipoMasCaro);

}
