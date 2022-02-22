/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var precio;
	var cantidadUnidades;
	var fabricante;
	var marca;
	var control;
	var alcoholBarato;
	var cantidadDeAlcohol;
	var fabricanteAlcohol;

	control = 0

	while(control <50) // while general
	{
		tipo = prompt("Ingrese el tipo de productos");

		while(tipo != barbijo || tipo != "jabon" || tipo != "alcohol")
		{
			tipo = prompt("Reingrese el tipo de productos");
		}
		precio = prompt("Ingrese el precio");
		precio = parseInt(precio);

		while(precio <100 || precio >300)
		{
			precio = prompt("Reingrese el precio");
			precio = parseInt(precio);
		}
		cantidadUnidades = prompt("Ingrese la cantidad de unidades: ");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades<1 || cantidadUnidades>1000)
		{
			cantidadUnidades = prompt("Reingrese la cantidad de unidades: ");
			cantidadUnidades = parseInt(cantidadUnidades);
		}
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");
		//fin de la validacion

		if(tipo == "alcohol")
		{
			if (alcoholBarato<precio || control == 0)
			{
				alcoholBarato = precio;
				cantidadDeAlcohol = cantidadUnidades;
			}
		}
	}
}
