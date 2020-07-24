/*document.getElementById("numberSalario").value = 90000;
document.getElementById("radioDescuentoAdicionalSi").checked = true;


if(document.getElementById("radioDescuentoAdicionalNo").checked = true){
    document.getElementById("numberDescuentoAdicional").disabled = true;
}
else{
    document.getElementById("numberDescuentoAdicional").disabled = false;
}*/
var salarioMensualBruto = document.getElementById("numberSalario").value;
var salarioMensualMenosAFPyARS = 0;
var salarioAnualMenosAFPyARS = 0;
var descuentoISR = 0;

function CalcularDescuentosAFP(salario){
    var descuentoAFP = salario * 0.0287;
    return descuentoAFP;
}
function CalcularDescuentosARS(salario){
    var descuentoARS = salario * 0.0304;
    return descuentoARS;
}
function CalcularDescuentosISR(SalarioAnualMenosAFPARS){
    if(EstaExentoDeISR(SalarioAnualMenosAFPARS)===false){
        if(SalarioAnualMenosAFPARS > 416220 && SalarioAnualMenosAFPARS <= 624329){
            Exedente = SalarioAnualMenosAFPARS - 416220;
            porcentajeDescuentoISR = 0.15;
            descuentoISR = Exedente * porcentajeDescuentoISR;
            descuentoISR/=12;
            return descuentoISR;
        }
        if(SalarioAnualMenosAFPARS > 624329 && SalarioAnualMenosAFPARS <= 867123){
            Exedente = SalarioAnualMenosAFPARS - 624329;
            porcentajeDescuentoISR = 0.20;
            descuentoISR = Exedente * porcentajeDescuentoISR + 31216;
            descuentoISR/=12;
            return descuentoISR;
        }
        else{
            Exedente = SalarioAnualMenosAFPARS - 867123;
            porcentajeDescuentoISR = 0.25;
            descuentoISR = Exedente * porcentajeDescuentoISR + 79776;
            descuentoISR/=12;
            return descuentoISR;
        }
    }
    else{
        descuentoISR=0;
        return descuentoISR;
    }
    
}
function EstaExentoDeISR(salario){
    if(salario> 416220){
        return false;
    }
    else{
        return true;
    }
}
document.getElementById("btnCalcular").onclick = function () {
    
    //Asignando el valor del textbox Salario a la variable salarioMensualBruto
    let salarioMensualBruto = document.getElementById("numberSalario").value;
    let salarioAnualBruto = salarioMensualBruto * 12;
    
    //Asignando el valor de descuentoAFP a la variable descuentoAFPMensual
    let descuentoAFPMensual = CalcularDescuentosAFP(salarioMensualBruto);
    let descuentoAFPAanual = descuentoAFPMensual * 12;
    descuentoAFPMensual = descuentoAFPMensual.toFixed(2);
    descuentoAFPAanual = descuentoAFPAanual.toFixed(2);
    
    //Asignando el valor de descuentoARS a la variable descuentoARSMensual
    let descuentoARSMensual = CalcularDescuentosARS(salarioMensualBruto);
    let descuentoARSAnual = descuentoARSMensual * 12;
    descuentoARSMensual = descuentoARSMensual.toFixed(2);
    descuentoARSAnual = descuentoARSAnual.toFixed(2);
    
    //Insertando el valor de la variable salarioMensualBruto a la celda correspondiente de la tabla
    document.getElementById("ingresosBrutosMensualTD").innerHTML="$"+salarioMensualBruto;
    document.getElementById("ingresosBrutosAnualTD").innerHTML="$"+salarioAnualBruto;
    
    //Insertando el valor de la variable descuentoAFPMensual a la celda correspondiente de la tabla
    document.getElementById("descuentosAFPMensualTD").innerHTML ="$"+descuentoAFPMensual;
    document.getElementById("descuentosAFPAnualTD").innerHTML ="$"+descuentoAFPAanual;
    
    //Insertando el valor de la variable descuentoARSMensual a la celda correspondiente de la tabla
    document.getElementById("descuentosARSMensualTD").innerHTML ="$"+descuentoARSMensual;
    document.getElementById("descuentosARSAnualTD").innerHTML ="$"+descuentoARSAnual;
    
    //Asignando el valor de salarioMensualMenosAFPyARS a la variable salarioMensualMenosAFPyARS
    salarioMensualMenosAFPyARS = salarioMensualBruto - descuentoAFPMensual - descuentoARSMensual;
    
    //Asignando el valor de salarioAnualMenosAFPyARS a la variable salarioAnualMenosAFPyARS
    salarioAnualMenosAFPyARS = salarioMensualMenosAFPyARS *12;
    
    //Asignando el valor de descuentoARS a la variable descuentoARSMensual
    let descuentoISRMensual = CalcularDescuentosISR(salarioAnualMenosAFPyARS);
    let descuentoISRAnual = descuentoISRMensual * 12;
    descuentoISRMensual = descuentoISRMensual.toFixed(2);
    descuentoISRAnual = descuentoISRAnual.toFixed(2);
    
    //Insertando el valor de la variable descuentosISRMesual  a la celda correspondiente en la tabla
    document.getElementById("descuentosISRMensualTD").innerHTML="$"+descuentoISRMensual;
    document.getElementById("descuentosISRAnualTD").innerHTML="$"+descuentoISRAnual;
    
    //Asignando el valor de TotalDescuentos a la variable TotalDescuentos
    let totalDescuentosMensual = +descuentoAFPMensual + +descuentoARSMensual + +descuentoISRMensual;
    let totalDescuentosAnual = totalDescuentosMensual * 12;
    totalDescuentosMensual = totalDescuentosMensual.toFixed(2);
    totalDescuentosAnual = totalDescuentosAnual.toFixed(2);
    
    //Insertando el valor de la variable TotalDescuentos  a la celda correspondiente en la tabla
    document.getElementById("totalDescuentosMensualTD").innerHTML="$"+totalDescuentosMensual;
    document.getElementById("totalDescuentosAnualTD").innerHTML="$"+totalDescuentosAnual;
    
    //Asignando el valor de ingresosNetos a la variable ingresosNetos
    let ingresosNetosMensual = salarioMensualBruto - totalDescuentosMensual;
    let ingresosNetosAnual = ingresosNetosMensual * 12;
    ingresosNetosMensual = ingresosNetosMensual.toFixed(2);
    ingresosNetosAnual = ingresosNetosAnual.toFixed(2);
    
    //Insertando el valor de la variable ingresosNetos  a la celda correspondiente en la tabla
    document.getElementById("ingresosNetosMensualTD").innerHTML="$"+ingresosNetosMensual;
    document.getElementById("ingresosNetosAnualTD").innerHTML="$"+ingresosNetosAnual;
};  
