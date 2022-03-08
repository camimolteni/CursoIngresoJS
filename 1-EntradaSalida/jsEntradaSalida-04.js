/*1.UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos,
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros el mínimo
- 18000 kilómetros máximo), el precio por asiento es 1500 pesos, informar:
A. La recaudación total del vuelo.
B. La cantidad total de asientos ocupados.
C. La edad promedio por pasajero.
D. La cantidad de pasajeros que tienen entre 18 y 45 años, que realizarán un viaje a un destino cuya distancia
es 5000 km ó 13000 km*/


function mostrar()
{
    var nombre;
    var edad;
    var cantidadDeAsientos;
    var cantidadKms;
    var precioPorAsiento=1500;

    var acumuladorRecaudacionTotalVuelo=0;
    var acumuladorCantidadTotalAsientosOcup=0;

    var contadorEdad=0;
    var acumuladorEdad=0;
   

    var edadPromedioPasajero;
    var cantidadPasajerosEdadDestino=0;

    var respuesta=true;

    while(respuesta==true)
    {
        nombre=prompt("Ingrese su edad: ");
        
        edad=prompt("Ingrese su edad: ");
        edad=parseInt(edad);

        cantidadDeAsientos=prompt("Ingrese la cantidad de asientos: ");
        cantidadDeAsientos=parseInt(cantidadDeAsientos);

        cantidadKms=prompt("ingrese cantidad de kms: ");
        cantidadKms=parseInt(cantidadKms);


        acumuladorCantidadTotalAsientosOcup+=cantidadDeAsientos;
        //acumuladorRecaudacionTotalVuelo+=precioPorAsiento*cantidadDeAsientos; 
        
        acumuladorEdad+=edad;
        
        if(edad>18 && edad<45)
        {
            if(cantidadKms==5000 || cantidadKms==13000)
            {
                cantidadPasajerosEdadDestino++;
            }
        }
        





        contadorEdad++;


        respuesta=confirm("Desea seguir ingresando datos?");
    }
    edadPromedioPasajero=acumuladorEdad/contadorEdad;

    acumuladorRecaudacionTotalVuelo=acumuladorCantidadTotalAsientosOcup*precioPorAsiento; 

    //a 
    //document.write(""++"<br>");
    //b
    //document.write(""++"<br>");
    //c
    //document.write(""++"<br>");
    //d
    //document.write(""++"<br>");
    
    

}





























/*La universidad tecnológica nacional necesita un programa que calcule cuantos kilos de cemento necesita hacer
para una determinada construcción. Para eso, necesita un algoritmo que permita el ingreso de bolsas de cal,
cemento, arena y piedra. Sabemos que para 1 metro cuadrado se usan 3 de cemento, 1 de cal, 2 de arena y medio kilo
de piedras, para el programa se necesita ingresar: nombre del arquitecto, edad del arquitecto validar que sea
al menos mayor a 25 años, años de experiencia en la profesión (novato de 1 a 5 años de experiencia,
avanzado de 6 a 12 años y experto con más de 22 años de experiencia), cantidad de metros cuadrados que necesita
para la construcción de la casa (validar que no sea 0 o negativo, y la casa no puede tener más de 1250 metros
cuadrados), también dar la opción de qué tipo de casa quiere realizar, una casa cuadrada, rectangular, triangular
o circular (validar) 
Informar: 
1) la cantidad de bolsas de cemento, cal, arena y la cantidad de kilos de piedra que va a necesitar para cualquiera
que sea la construcción indicada.
2) el nombre del arquitecto más joven
3) la cantidad de años de experiencia del arquitecto más viejo
4) la cantidad de arquitectos de cada nivel de experiencia (novato, avanzado, profesional)
5) el promedio de años de los arquitectos que son avanzados
6) el promedio de edad de los arquitectos expertos que tienen más de 50 años de edad 
7) el arquitecto que más bolsas de cemento usó
8) el arquitecto experto que menos kilos de piedra uso
9) cual fue el formato de casa más pedido
10) del formato más pedido, indicar que arquitecto lo realizó, cuántas bolsas de los distintos materiales y
su nombre
11) indicar el nombre y edad del arquitecto que menos experiencia tiene en total*/


/* 
Molteni Camila DIV I
E/S 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

function mostrar()
{
	var nombreIngresado;

	nombreIngresado = prompt("Ingrese el nombre");

	document.getElementById('txtIdNombre').value = nombreIngresado;
}*/

