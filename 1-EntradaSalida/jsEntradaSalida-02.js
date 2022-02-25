/*Camila Molteni DIV I

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
    var pais;
    var importe;
    var banderaMinimoPais;
    var banderaMaximoPais;
    var promedio;
    var control;
    var paisMin;
    var precioMin;
    var marcaMax;
    var cantidadProductosChina;
    var descuento;
    var acumuladorChina;
    var acumuladorUruguay;
    var acumuladorParaguay;
    var precioMax;
    var porcentaje;
    var importeTotal;
 
    porcentaje = 0;
    cantidadProductosChina = 0;    
    acumuladorChina = 0;  
    promedio = 0;
    precio = 0;
    contadorImporte = 5;
    
    banderaMinimoPais = false;
    banderaMaximoPais = false;

    control = 0;
    
    
    while(control < 5)
    {
    	importe = prompt("Ingrese un importe: ");
    	importe = parseInt(importe);

    	while(isNaN(importe) || importe < 1)
    	{
    	importe = prompt("Error, ingrese un importe valido: ");
    	importe = parseInt(importe);
    	}

        marcaProducto = prompt("Ingrese la marca del producto: ");

       	pais = prompt("Ingrese el pais: China, Uruguay o Paraguay ");

        while(pais != "China" && pais != "Uruguay" && pais != "Paraguay")
        {
        pais = prompt("Error. Reingrese el pais: China, Uruguay o Paraguay ");
        }

    	if (pais < paisMin || banderaMinimoPais == false) //a. Minimo importe con su pais
    	{
    		paisMin = pais;
    		precioMin = precio;
    		banderaMinimoPais = true;
    	}
    	if (marcaProducto > marcaMax || banderaMaximoPais == false) //b. Maximo importe con su marca
    	{
    		marcaMax = marcaProducto;
    		precioMax = precio;
    		banderaMaximoPais = true;
    	}

                 

        switch(cantidadProductosChina) //d.	Cantidad de productos de China 
        //ESTA MAL EL CONTADOR DE CHINA EN UN SWITCH, porque es una estructura de seleccion multiple
        //si solo tengo que preguntar una sola cosa, es con un if
        {
            case "China":
            cantidadProductosChina++;
            acumuladorChina += productos;
            contadorImporteChina++;                 
            break;
            
                        
                 
       }//FIN DEL SWITCH 

    	control++;      

      
    }//FIN DEL WHILE

    //e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
    if (precioMax > precio)
    {
    	porcentaje = 10
    }

    //c.	Promedio importe 
    
    		promedio = acumuladorImporte / 5;
    	

    	cantidadProductosChina += acumuladorChina;
    	importeTotal = importe + importe * porcentaje / 100;


    document.write("El pais con el minimo importe: " + paisMin + "<br>");
    document.write("La marca con el maximo importe: " + marcaMax + "<br>");
    document.write("El promedio del importe: " + promedio + "<br>");
    document.write("La cantidad de productos de China: " + cantidadProductosChina + "<br>");

}//FIN DE LA FUNCION


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

