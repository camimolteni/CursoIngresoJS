/*Camila Molteni DIV I PRACTICA HECHO POR MI

1.	Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/


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





}	

  /*  var marcaProducto;
    var paisOrigen;
    var importeIngresado;
    var contadorIngresos;
    var importeMax;
    var importeMin;
    var banderaImporte;
    var paisMin;
    var marcaMax;
    var cantidadChina;
    var promedioImporte;
    var sumaImporte;
    var descuento;

    importeIngresado =0;
    contadorIngresos =0;
    banderaImporte =true;
    cantidadChina =0;
    sumaImporte =0;
    descuento =0;

    while(contadorIngresos<3)
    {
        contadorIngresos++

        importeIngresado=prompt("Ingrese importe");
        importeIngresado=parseInt(importeIngresado);
            while(importeIngresado<1)
            {
                importeIngresado=prompt("Ingrese importe valido");
                importeIngresado=parseInt(importeIngresado);
            }
                
            marcaProducto=prompt("Ingrese marca de producto");
            paisOrigen=prompt("Ingrese pais de origen").toLowerCase();
                while(paisOrigen!="china" && paisOrigen!="uruguay" && paisOrigen!="paraguay")
                {
                    paisOrigen=prompt("Ingrese un pais valido").toLowerCase();
                }

                //a.	Minimo importe con su pais
                //b.	Maximo importe con su marca

                if(importeIngresado<importeMin || banderaImporte == true)
                {
                    importeMin=importeIngresado;
                    paisMin=paisOrigen;
                }

                if(importeIngresado>importeMax || banderaImporte == true)
                {
                    importeMax=importeIngresado;
                    marcaMax=marcaProducto;
                }

                banderaImporte=false

                if(paisOrigen=="china")
                {
                    cantidadChina++;
                }

                sumaImporte+=importeIngresado;
                promedioImporte= sumaImporte/contadorIngresos;
                descuento= importeMax-(importeMax*0.10);



    }//FIN DEL WHILE GENERAL

    document.write("El minimo importe es " + importeMin + " y su pais es " + paisMin);
    document.write("<br>El maximo importe es " + importeMax + " y marca es " + marcaMax);
    document.write("<br>El promedio del importe total es " + promedioImporte);
    document.write("<br>La cantidad de productos de china es " + cantidadChina);
    document.write("<br>El precio maximo con descuento del 10 % es " + descuento);





}//FIN DE LA FUNCION*/


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






/*
Molteni Camila DIV I
E/S 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
function mostrar()
{
	var nombreDelEmpleado;

	nombreDelEmpleado = prompt("Ingrese su nombre");

	alert(nombreDelEmpleado)
}*/

