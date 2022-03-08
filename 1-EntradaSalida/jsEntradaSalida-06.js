/*
 EJERCICIO 2
2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:
nombre de producto, precio, unidades, tipo(minorista o mayorista)
a)informar el precio total de la compra.
b)el nombre del producto más caro de tipo minorista
c)el nombre del producto con menos unidades.*/

function mostrar(){
	var nombreProducto;
	var precio;
	var unidades;
	var tipo;
	var respuesta = true;
	var precioTotal = 0;
	var precioMinorista;
	var bandera = true;
	var banderaUnidades = true;
	var nombreMinorista;
	var unidadesMenor;
	var nombreUnidadesMenor;

	while (respuesta == true)
	{
		nombre = prompt ("Ingrese nombre del producto: ").toLowerCase();

		precio = parseFloat(prompt("Ingrese precio: "));

		unidades = parseInt (prompt("ingresar cantidad de unidades"));

		tipo = prompt("ingrese si es compra minorista o mayorista: ").toLowerCase();
		while (tipo != "minorista" && tipo != "mayorista") {
			tipo = prompt("ERROR. ingrese si es compra minorista o mayorista: ");
		}

		//A 
		precioTotal += precio;

		// B
		if (tipo == "minorista") 
		{
			if (precio > precioMinorista || bandera == true)
			{
				precioMinorista = precio;
				nombreMinorista = nombre;
				bandera = false;
			}
		}
		//C
		if (unidades < unidadesMenor || banderaUnidades == true)
		{
			unidadesMenor = unidades;
			nombreUnidadesMenor = nombre;
			banderaUnidades = false;
		}


		respuesta = confirm("¿Desea continuar?");

	} // FIN WHILE GENERAL

	document.write("Precio total de la compra: " + precioTotal);
	document.write("<br> Precio total de la compra: " + precioTotal);
	document.write("<br> Nombre del producto con menos unidades: " + nombreUnidadesMenor);

}

/* EJERCICIO 1
1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)informar la cantidad de personas de sexo femenino.
b)la altura promedio en total
c)el nombre del hombre con menos peso(si lo hay)
Pedir datos por prompt y mostrar por document.write 

function mostrar()
{
	var nombre;
	var altura = 0;
	var peso = 0;
	var sexo;
	var control = 0;
	var acumuladorAltura = 0;
	var promedioAtura;
	var bandera = true;
	var pesoMenor = 0;
	var nombreMenor;
	var nombreMenor = "No hay.";

	while (control < 5) {
		
		nombre = prompt("ingrese nombre: ");

		altura = parseFloat(prompt("ingrese altura :"));

		peso = parseFloat(prompt("ingresar peso: "));

		sexo = prompt("ingresar sexo (F o M):").toLowerCase();
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR. Ingrese F o M: ");
		}

		//A
		if (sexo == "f") {
			contadorMujeres ++;
		} //C
		else {

			if (peso < pesoMenor || bandera == true) {
				pesoMenor = peso;
				nombreMenor = nombre;
				bandera = false;
			}
		}

		//B
		acumuladorAltura += altura;



		control++;
	}

	promedioAtura = (acumuladorAltura / i);

	document.write("Cantidad de personas de sexo femenino: " + contadorMujeres);
	document.write("<br> Altura del promedio en total: " + promedioAtura);
	document.write("<br> Nombre del hombre con menos peso: " + nombreMenor);

}

*/




/*
Molteni Camila DIV I
E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value; 

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	mensaje = "La suma es "
	suma = numeroUno + numeroDos

	alert(mensaje + suma);

	/*suma = numeroUno + numeroDos;

	alert(suma);



}*/
//txtIdNumeroUno
//txtIdNumeroDos