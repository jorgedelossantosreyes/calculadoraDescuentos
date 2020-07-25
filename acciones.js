if(document.getElementById("radioDescuentoAdicionalNo").checked = true){
    document.getElementById("numberDescuentoAdicional").disabled = true;
}
else{
    document.getElementById("numberDescuentoAdicional").disabled = false;
}

document.getElementById("radioDescuentoAdicionalSi").onclick = function () {
    document.getElementById("numberDescuentoAdicional").disabled = false;
}
document.getElementById("radioDescuentoAdicionalNo").onclick = function () {
    document.getElementById("numberDescuentoAdicional").disabled = true;
    document.getElementById("numberDescuentoAdicional").value = "";
}

var numberSalario = document.getElementById("numberSalario");
numberSalario.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnCalcular").click();
  }
});
var numberDescuentoAdicional = document.getElementById("numberDescuentoAdicional");
numberDescuentoAdicional.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnCalcular").click();
  }
});

var salarioMensualBruto = document.getElementById("numberSalario").value;
var salarioMensualMenosAFPyARS = 0;
var salarioAnualMenosAFPyARS = 0;
var descuentoISR = 0;
var salarioMensualBruto = 0;
var salarioAnualBruto = 0;
var descuentoAFPMensual = 0;
var descuentoAFPAanual = 0;
var descuentoARSMensual = 0;
var descuentoARSAnual = 0;
var descuentoISRMensual = 0;
var descuentoISRAnual = 0;
var totalDescuentosMensual = 0;
var totalDescuentosAnual = 0;
var ingresosNetosMensual = 0;
var ingresosNetosAnual = 0;
var descuentoAdicionalMensual = 0;
var descuentoAdicionalAnual = 0;

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
function EsSalarioValido(salario){
    if(salario>0){
        return true;
    }
    else{
        return false;
    }
}
function EsDescuentoAdicionalValido(salario,descuentoAdicional){
    if(descuentoAdicional>0 && descuentoAdicional<salario && salario !==0){
        return true;
    }
    else{
        return false;
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
function CapturarDatoSalario(){
    //Asignando el valor del textbox Salario a la variable salarioMensualBruto
    if(EsSalarioValido(document.getElementById("numberSalario").value) == true){
        salarioMensualBruto = document.getElementById("numberSalario").value;
        salarioAnualBruto = salarioMensualBruto * 12;
    }
    else{
        salarioMensualBruto = 0;
        salarioAnualBruto = 0;
    }
}
function CapturarDatoDescuentoAdicional(){
    //Asignando el valor del textbox DescAdicional a la variable
    if(EsDescuentoAdicionalValido(salarioMensualBruto,document.getElementById("numberDescuentoAdicional").value)){
        descuentoAdicionalMensual = document.getElementById("numberDescuentoAdicional").value;
        descuentoAdicionalAnual = descuentoAdicionalMensual * 12;
        descuentoAdicionalAnual = descuentoAdicionalAnual.toFixed(2);
    }
    else{
        descuentoAdicionalMensual = 0;
        descuentoAdicionalAnual = 0;
    }
    
}
function AlmacenarDescuentosAFP(){
    //Asignando el valor de descuentoAFP a la variable descuentoAFP
    descuentoAFPMensual = CalcularDescuentosAFP(salarioMensualBruto);
    descuentoAFPAanual = descuentoAFPMensual * 12;
    descuentoAFPMensual = descuentoAFPMensual.toFixed(2);
    descuentoAFPAanual = descuentoAFPAanual.toFixed(2);
}
function AlmacenarDescuentosARS(){
    //Asignando el valor de descuentoARS a la variable descuentoARS
    descuentoARSMensual = CalcularDescuentosARS(salarioMensualBruto);
    descuentoARSAnual = descuentoARSMensual * 12;
    descuentoARSMensual = descuentoARSMensual.toFixed(2);
    descuentoARSAnual = descuentoARSAnual.toFixed(2);
}
function AlmacenarDescuentosISR(){
    //Asignando el valor de descuentoISR a la variable descuentoISR
    salarioMensualMenosAFPyARS = salarioMensualBruto - descuentoAFPMensual - descuentoARSMensual;
    salarioAnualMenosAFPyARS = salarioMensualMenosAFPyARS *12;
    descuentoISRMensual = CalcularDescuentosISR(salarioAnualMenosAFPyARS);
    descuentoISRAnual = descuentoISRMensual * 12;
    descuentoISRMensual = descuentoISRMensual.toFixed(2);
    descuentoISRAnual = descuentoISRAnual.toFixed(2);
}
function AlmacenarTotalDescuentos(){
    //Asignando el valor de TotalDescuentos a la variable TotalDescuentos
    totalDescuentosMensual = +descuentoAFPMensual + +descuentoARSMensual + +descuentoISRMensual + +descuentoAdicionalMensual;
    totalDescuentosAnual = totalDescuentosMensual * 12;
    totalDescuentosMensual = totalDescuentosMensual.toFixed(2);
    totalDescuentosAnual = totalDescuentosAnual.toFixed(2);
}
function AlmacenarIngresoNeto(){
    //Asignando el valor de ingresosNetos a la variable ingresosNetos
    ingresosNetosMensual = salarioMensualBruto - totalDescuentosMensual;
    ingresosNetosAnual = ingresosNetosMensual * 12;
    ingresosNetosMensual = ingresosNetosMensual.toFixed(2);
    ingresosNetosAnual = ingresosNetosAnual.toFixed(2);
}
function InsertarDatoEnTabla(ElementIDMensual, ElementIDAnual, DatoMensual, DatoAnual){
    //Insertando el valor de la variable a la celda correspondiente en la tabla
    document.getElementById(ElementIDMensual).innerHTML="$"+DatoMensual;
    document.getElementById(ElementIDAnual).innerHTML="$"+DatoAnual;
}
document.getElementById("btnCalcular").onclick = function () {
    CapturarDatoSalario();
    CapturarDatoDescuentoAdicional();
    AlmacenarDescuentosAFP();
    AlmacenarDescuentosARS();
    AlmacenarDescuentosISR();
    AlmacenarTotalDescuentos();
    AlmacenarIngresoNeto();
    InsertarDatoEnTabla("ingresosBrutosMensualTD", "ingresosBrutosAnualTD", salarioMensualBruto, salarioAnualBruto);
    InsertarDatoEnTabla("descuentosAFPMensualTD", "descuentosAFPAnualTD", descuentoAFPMensual, descuentoAFPAanual);
    InsertarDatoEnTabla("descuentosARSMensualTD", "descuentosARSAnualTD", descuentoARSMensual, descuentoARSAnual);
    InsertarDatoEnTabla("descuentosISRMensualTD", "descuentosISRAnualTD", descuentoISRMensual, descuentoISRAnual);
    InsertarDatoEnTabla("descuentoAdicionalMensual", "descuentoAdicionalAnual", descuentoAdicionalMensual,descuentoAdicionalAnual);
    InsertarDatoEnTabla("totalDescuentosMensualTD", "totalDescuentosAnualTD", totalDescuentosMensual, totalDescuentosAnual);
    InsertarDatoEnTabla("ingresosNetosMensualTD", "ingresosNetosAnualTD", ingresosNetosMensual, ingresosNetosAnual);
    // element which needs to be scrolled to
    var element = document.querySelector("#divTable");

    // scroll to element
    element.scrollIntoView({behavior:"smooth", block:"start"});

    //Asignando el valor del textbox Salario a la variable salarioMensualBruto
    //let salarioMensualBruto = document.getElementById("numberSalario").value;
    //let salarioAnualBruto = salarioMensualBruto * 12;
    
    //Asignando el valor de descuentoAFP a la variable descuentoAFPMensual
    //let descuentoAFPMensual = CalcularDescuentosAFP(salarioMensualBruto);
    //let descuentoAFPAanual = descuentoAFPMensual * 12;
    //descuentoAFPMensual = descuentoAFPMensual.toFixed(2);
    //descuentoAFPAanual = descuentoAFPAanual.toFixed(2);
    
    //Asignando el valor de descuentoARS a la variable descuentoARSMensual
    //let descuentoARSMensual = CalcularDescuentosARS(salarioMensualBruto);
    //let descuentoARSAnual = descuentoARSMensual * 12;
    //descuentoARSMensual = descuentoARSMensual.toFixed(2);
    //descuentoARSAnual = descuentoARSAnual.toFixed(2);
    
    //Insertando el valor de la variable salarioMensualBruto a la celda correspondiente de la tabla
    //document.getElementById("ingresosBrutosMensualTD").innerHTML="$"+salarioMensualBruto;
    //document.getElementById("ingresosBrutosAnualTD").innerHTML="$"+salarioAnualBruto;
    
    //Insertando el valor de la variable descuentoAFPMensual a la celda correspondiente de la tabla
    //document.getElementById("descuentosAFPMensualTD").innerHTML ="$"+descuentoAFPMensual;
    //document.getElementById("descuentosAFPAnualTD").innerHTML ="$"+descuentoAFPAanual;
    
    //Insertando el valor de la variable descuentoARSMensual a la celda correspondiente de la tabla
    //document.getElementById("descuentosARSMensualTD").innerHTML ="$"+descuentoARSMensual;
    //document.getElementById("descuentosARSAnualTD").innerHTML ="$"+descuentoARSAnual;
    
    //Asignando el valor de salarioMensualMenosAFPyARS a la variable salarioMensualMenosAFPyARS
    //salarioMensualMenosAFPyARS = salarioMensualBruto - descuentoAFPMensual - descuentoARSMensual;
    
    //Asignando el valor de salarioAnualMenosAFPyARS a la variable salarioAnualMenosAFPyARS
    //salarioAnualMenosAFPyARS = salarioMensualMenosAFPyARS *12;
    
    //Asignando el valor de descuentoARS a la variable descuentoARSMensual
    //let descuentoISRMensual = CalcularDescuentosISR(salarioAnualMenosAFPyARS);
    //let descuentoISRAnual = descuentoISRMensual * 12;
    //descuentoISRMensual = descuentoISRMensual.toFixed(2);
    //descuentoISRAnual = descuentoISRAnual.toFixed(2);
    
    //Insertando el valor de la variable descuentosISRMesual  a la celda correspondiente en la tabla
    //document.getElementById("descuentosISRMensualTD").innerHTML="$"+descuentoISRMensual;
    //document.getElementById("descuentosISRAnualTD").innerHTML="$"+descuentoISRAnual;
    
    //Asignando el valor de TotalDescuentos a la variable TotalDescuentos
    //let totalDescuentosMensual = +descuentoAFPMensual + +descuentoARSMensual + +descuentoISRMensual;
    //let totalDescuentosAnual = totalDescuentosMensual * 12;
    //totalDescuentosMensual = totalDescuentosMensual.toFixed(2);
    //totalDescuentosAnual = totalDescuentosAnual.toFixed(2);
    
    //Insertando el valor de la variable TotalDescuentos  a la celda correspondiente en la tabla
    //document.getElementById("totalDescuentosMensualTD").innerHTML="$"+totalDescuentosMensual;
    //document.getElementById("totalDescuentosAnualTD").innerHTML="$"+totalDescuentosAnual;
    
    //Asignando el valor de ingresosNetos a la variable ingresosNetos
    //let ingresosNetosMensual = salarioMensualBruto - totalDescuentosMensual;
    //let ingresosNetosAnual = ingresosNetosMensual * 12;
    //ingresosNetosMensual = ingresosNetosMensual.toFixed(2);
    //ingresosNetosAnual = ingresosNetosAnual.toFixed(2);
    
    //Insertando el valor de la variable ingresosNetos  a la celda correspondiente en la tabla
    //document.getElementById("ingresosNetosMensualTD").innerHTML="$"+ingresosNetosMensual;
    //document.getElementById("ingresosNetosAnualTD").innerHTML="$"+ingresosNetosAnual;
};  
