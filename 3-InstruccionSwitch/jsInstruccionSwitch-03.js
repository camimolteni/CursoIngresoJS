/* Camila Molteni DIV I
   Switch 03

Al seleccionar un mes informar.
si es Febrero: "Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
    var mes;
    var mensaje;

    mes = txtIdMes.value;

    mensaje = "Este mes tiene 30 días o más.";

    switch(mes)
    {
        case "Febrero":
            mensaje = "Este mes no tiene más de 29 días.";
            break;
}

	alert(mensaje);

}
//FIN DE LA FUNCIÓN