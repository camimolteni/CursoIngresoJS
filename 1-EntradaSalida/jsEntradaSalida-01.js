/******************************************************************************
CAMILA MOLTENI DIV I - EJ 3
3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.  
Dicho parque se caracteriza por su variedad de montañas rusas. 
Se pide el ingreso del nombre del visitante, la edad (mayores a 12 años), 
tipo de pasaporte (sin pasaporte, convencional, premium), 
tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). 

Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.

Se necesita saber: 

A)La recaudación en efectivo por las tres montañas rusas.
B)Porcentaje de visitantes que se subieron a cada montaña rusa.
C)Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)



*******************************************************************************/

function mostrar ()
{
  var nombreDelVisitante;
  var edadVisitante;
  var tipoPasaporte;
  var tipoMontañaRusa;
  var respuesta;
  var valorAcceso = 500;

  var contadorMontañaFantasma;
  var contadorMontañaAcuatica;
  var contadorMontañaAdrenalina;
  var contadorGeneralMontañas;

  var porcentajeFantasma;
  var porcentajeAcuatica;
  var porcentajeAdrenalina;

  var contadorSinPasaporte;
  var contadorConvencional;
  var contadorPremium;

  var recaudacionTotalSinPasaporte;
  var recaudacionTotalConvencional;
  var recaudacionTotalPremium;
  var recaudacionGeneral;

  var pasaporteMasUsado;

  respuesta = true;

  contadorSinPasaporte = 0;
  contadorConvencional = 0;
  contadorPremium = 0;

  contadorMontañaFantasma = 0;
  contadorMontañaAcuatica = 0;
  contadorMontañaAdrenalina = 0;
  contadorGeneralMontañas = 0;

  while(respuesta == true)
  {
    nombreDelVisitante = prompt("Ingrese el nombre del visitante: ");

    edadVisitante = prompt("Ingrese la edad del visitante: ");
    edadVisitante = parseInt(edadVisitante);

    while(edadVisitante < 12)
    {
      edadVisitante = prompt("Ingrese la edad del visitante: ");
      edadVisitante = parseInt(edadVisitante);
    }

    tipoPasaporte = prompt("Ingrese el tipo de pasaporte: sin pasaporte, convencional, premium").toLowerCase();

    while(tipoPasaporte != "sin pasaporte" && tipoPasaporte != "convencional" && tipoPasaporte != "premium")
    {
      tipoPasaporte = prompt("Ingrese el tipo de pasaporte: sin pasaporte, convencional, premium").toLowerCase();
    }

    tipoMontañaRusa = prompt("Ingrese el tipo de montaña rusa: fantasma, acuática, adrenalina100%").toLowerCase();

    while(tipoMontañaRusa != "fantasma" && tipoMontañaRusa != "acuatica" && tipoMontañaRusa != "adrenalina100%")
    {
      tipoMontañaRusa = prompt("Ingrese el tipo de montaña rusa: fantasma, acuática, adrenalina100%").toLowerCase();
    }

    switch(tipoPasaporte)
    {
      case "sin pasaporte":
      contadorSinPasaporte++;
      recaudacionTotalSinPasaporte = valorAcceso * contadorSinPasaporte;
      break;

      case "convencional":
      contadorConvencional++;
      recaudacionTotalConvencional = valorAcceso * contadorConvencional;
      break;

      default:
      contadorPremium++;
      recaudacionTotalPremium = valorAcceso * contadorPremium;
      break;
    }

    //A)La recaudación en efectivo por las tres montañas rusas.
    //B)Porcentaje de visitantes que se subieron a cada montaña rusa.
    // C)Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)
    if(contadorSinPasaporte > contadorConvencional && contadorSinPasaporte > contadorPremium)
    {
      pasaporteMasUsado = "Sin pasaporte";
    }
      else
      {
        if (contadorConvencional > contadorPremium)
        {
          pasaporteMasUsado = "Convencional";
        }
        else
        {
          pasaporteMasUsado = "Premium";
        }
      }

    

    switch(tipoMontañaRusa)
    {
      case "fantasma":
      contadorMontañaFantasma++;
      break;

      case "acuática":
      contadorMontañaAcuatica++;
      break;

      default:
      contadorMontañaAdrenalina++;
      break;

    }

    contadorGeneralMontañas++;

    respuesta = confirm("Desea ingresar mas datos?");
  }// fin while general

  recaudacionGeneral = recaudacionTotalPremium + recaudacionTotalConvencional + recaudacionTotalSinPasaporte;

  porcentajeAdrenalina = contadorMontañaAdrenalina / contadorGeneralMontañas;
  porcentajeAcuatica = contadorMontañaAcuatica / contadorGeneralMontañas;
  porcentajeFantasma = contadorMontañaFantasma / contadorGeneralMontañas;


  document.write("La recaudación en efectivo por las tres montañas rusas:" + recaudacionGeneral + "<br>");
  document.write("El porcentaje de visitantes que se subieron a Adrenalina100: " + porcentajeAdrenalina + "<br>");
  document.write("El porcentaje de visitantes que se subieron a Acuatica: " + porcentajeAcuatica + "<br>");
  document.write("El porcentaje de visitantes que se subieron a Fantasma: " + porcentajeFantasma + "<br>");
  document.write("El tipo de pasaporte que mas se utilizo es: " + pasaporteMasUsado + "<br>");
  


}
