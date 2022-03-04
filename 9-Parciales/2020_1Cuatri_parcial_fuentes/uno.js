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

} 





















/*    let control; //carga de productos
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;

    let alcoholMinimo;//a)
    let cantidadAlcohol;
    let fabricanteAlcoholBarato;
    let banderaAlcohol;
    banderaAlcohol= false;
    
    let contadorJabon;//b)
    let contadorAlcohol;
    let contadorBarbijo;
    let acumuladorJabon;
    let acumuladorAlcohol;
    let acumuladorBarbijo;
    let promedio;
    let tipoConMasCantidad;

    contadorJabon= 0;
    contadorAlcohol= 0;
    contadorBarbijo= 0;
    acumuladorJabon= 0;
    acumuladorAlcohol= 0;
    acumuladorBarbijo= 0;

    control= 0;

    while(control < 5)//while general 
    {
        tipo= prompt("Ingrese el tipo de producto barbijo, jabon o alcohol");
        
        while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
        {
            tipo= prompt("Error.. reingrese el tipo de producto barbijo, jabon o alcohol");
        }

        precio= prompt ("Ingrese el precio entre: 100 y 300");
        precio= parseInt(precio);

        while(isNaN(precio) || precio < 100 || precio > 300)
        {
            precio= prompt ("Error.. reingrese el precio entre 100 y 300");
            precio= parseInt(precio);
        }

        cantidad= prompt("Ingrese la cantidad");
        cantidad= parseInt(cantidad);

        while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000)
        {
           cantidad= prompt("Error.. reingrese la cantidad");
           cantidad= parseInt(cantidad);
        }

        marca= prompt("Ingrese la marca");

        fabricante= prompt("Ingrese el fabricante");
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
        if (tipo == "alcohol")
        {   acumuladorAlcohol+= cantidad;
            contadorAlcohol++;
            if (precio < alcoholMinimo || banderaAlcohol == false) 
            {
                alcoholMinimo= precio;
                cantidadAlcohol= cantidad;
                fabricanteAlcoholBarato= fabricante;
                banderaAlcohol= true;
            }
        }
        else
        { 
          if(tipo == "jabon") /*c) Cuántas unidades de jabones hay en total*/
           /* {
            acumuladorJabon+= cantidad;
              contadorJabon++;
          }
          else
          {
            acumuladorBarbijo+= cantidad;
              contadorBarbijo++;
          }
      }
      control++;
    }//fin del while general*
    if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo)
    {
        promedio = acumuladorAlcohol/contadorAlcohol;
        tipoConMasCantidad = "alcohol";
    }
    else /*b) Del tipo con mas unidades, el promedio por compra*/
    /*{
      if (acumuladorJabon>acumuladorBarbijo)
      {
        promedio = acumuladorJabon/contadorJabon;
          tipoConMasCantidad = "jabon";
      }
      else
      {
        promedio = acumuladorBarbijo/contadorBarbijo;
          tipoConMasCantidad = "barbijo";
      }
    }
    if(contadorAlcohol>0)
    {*/

  

  /*Este lo hicimos el domingo practicando
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
}*/
