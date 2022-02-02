/*
Camila Molteni DIV I
E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var totalConAumento;

    sueldo = txtIdSueldo.value;
    sueldo = parseInt(sueldo);
    aumento = sueldo * 0.10;

    totalConAumento = sueldo + aumento;

    txtIdResultado.value = totalConAumento;


}
//txtIdSueldo
//txtIdResultado