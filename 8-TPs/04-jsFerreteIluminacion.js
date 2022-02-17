/*Camila Molteni DIV I
TP 4 CON SWITCH + IF
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


function CalcularPrecio () 

{
    var precio=35;
    var cantidad=0;
    var marca;
    var descuento;
    var aumento;
    var mensaje;
    var precioBase;
    var precioFinal;

    cantidad=document.getElementById("txtIdCantidad").value;
    marca=document.getElementById("Marca").value;

        cantidad = parseInt(cantidad);

    precioBase=cantidad*precio;

    /* Cambiar switch de cantidad por if */
    if(cantidad>0 && cantidad <3)
    {              
        descuento = 0;
    }
    else
    {
        if (cantidad == 3)
        {
           switch(marca)
            {
                case "ArgentinaLuz":
                    descuento=15;
                    break;
                
                case "FelipeLamparas":
                    descuento=10;
                    break;
               
                default:
                    descuento=5; 
        }
    }
        else
        {
            if (cantidad == 4)
            {
                switch(marca)
                {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25;
                    break;
                
                default:
                    descuento=20;
                }
            }
        else
        {
            if (cantidad == 5)
            {
                switch(marca)
                {
                case "ArgentinaLuz":
                    descuento=40;
                    break;
                
                default:
                    descuento=30;
            }
        }
        else
            {
            descuento = 50;
            }
        }
    }
}
        precioFinal=precioBase-precioBase*descuento/100;

    
    if(precioFinal>120)
    {
       aumento=precioFinal*10/100;
       
       mensaje="Usted pago "+aumento+ " de IIBB.";
       precioFinal=precioFinal+aumento;
       alert(mensaje);
       
    }
    
    document.getElementById("txtIdprecioDescuento").value=precioFinal;
    
}



/* TP CON IF
{

	var descuento = 0;
	var precioUnitario = 35;
	var cantidad;
	var precioFinal;
	var marca;
	var ingresosBrutos;
	var impuesto;

	cantidad = document.getElementById("txtIdCantidad").value;
	marca = document.getElementById("Marca").value;
	cantidad = parseInt(cantidad)

	precioFinal = cantidad * precioUnitario;

	if(cantidad >5)
	{
		descuento = 50;
	}
	else
	{
		if(cantidad == 5)
		{
			descuento = 30
			if (marca == "ArgentinaLuz")
			{
				descuento = 40;
			}
		
		}

	else
	{
		if(cantidad == 4)
		{
			descuento = 20;
			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
			{
					descuento = 25;
			}
			
		}
	
	else
	{
		if(cantidad == 3)
		{
			descuento = 5;
			if(marca == "FelipeLamparas")
			{
				descuento = 10;
			}
			if (marca == "ArgentinaLuz")
			{
				descuento = 15;
			}
		}
	}
 }
 }


	precioFinal = precioFinal - precioFinal * descuento / 100;

	if (precioFinal > 120);
	{
		ingresosBrutos = 10;
	}

	impuesto = precioFinal * ingresosBrutos / 100;
	precioFinal = precioFinal + impuesto;

	alert("IIBB Usted pago " + impuesto);

	document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);

}*/
//txtIdCantidad
//txtIdprecioDescuento
//Marca