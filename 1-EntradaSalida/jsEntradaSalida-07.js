
/*
Molteni Camila DIV I
E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;


	alert(suma);	
}

function restar()
{

	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	restar = numeroUno - numeroDos;

	alert(restar);
	
}

function multiplicar()

{ 

   var numeroUno
   var numeroDos
   var multiplica

   numeroUno = txtIdNumeroUno.value;
   numeroDos = txtIdNumeroDos.value;

   numeroUno = parseInt(numeroUno);
   numeroDos = parseInt(numeroDos);

   multiplicar = numeroUno * numeroDos;

   alert(multiplicar)	
}

function dividir()
{

	var numeroUno
	var numeroDos
	var divide

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	dividir = numeroUno / numeroDos;

	alert(dividir)
	
}

//txtIdNumeroUno
//txtIdNumeroDos