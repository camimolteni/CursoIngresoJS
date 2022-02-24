/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los
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
c) Cuántas unidades de HDD hay en total.*/

function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var capacidad;

	control = 0;

	while (control < 5) //while general
	{
		tipo = prompt("Ingrese el tipo de disco rígido: HDD, SSD, SSDM2");

		while (tipo != "HDD" && tipo != "SSD" && tipo != "SSDM2")
		{
			tipo = prompt("Error, ingrese un producto valido: HDD, SSD, SSDM2");
		}

		precio = prompt("Ingrese el precio: Entre $5000 y $18000");
		precio = parseInt(precio);

		while (isNaN(precio) || precio < 5000 || precio > 18000)
		{
			precio = prompt("Error, ingrese un precio valido entre $5000 y $18000");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese la cantidad, puede ser entre 1 y 50:");
		cantidad = parseInt(cantidad);

		while (isNaN(cantidad) || cantidad < 0 || cantidad > 50)
		{
			cantidad = prompt("Error, ingrese una cantidad valida. Entre 1 y 50 unidades");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese la marca: Seagate, Western Digital o Kingston");

		while (marca != "Seagate" && marca != "Western Digital" && marca != "Kingston")
			{
				marca = prompt("Error, ingrese una marca valida: Seagate, Western Digital, Kingston");
			}

			capacidad = prompt("Ingrese la capacidad: 250gb, 500gb, 1tb o 2tb");
			capacidad = parseInt(capacidad);

			while (isNaN(capacidad) != "250gb" && capacidad != "500gb" && capacidad != "1tb" && capacidad != "2tb")
			{/*no muestra la capacidad*/
				capacidad = prompt("Error, ingrese una capacidad valida: 250Gb, 500Gb, 1Tb, 2Tb");
				capacidad = parseInt(capacidad);
			}
	} // fin while general

	alert()
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