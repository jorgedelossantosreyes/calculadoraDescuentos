/*document.getElementById("checkbox").onclick = function(){
    document.querySelector("#label1").classList.add("icon-cancel-circled");
    document.querySelector("#label1").classList.remove("icon-menu");
    if((document.getElementById("checkbox")).checked ===true){
        document.querySelector("#label1").classList.add("icon-menu");
        document.querySelector("#label1").classList.remove("icon-cancel-circled");
    }
}
*/
    
//logica checked de radioIngresoExtra
if(document.getElementById("radioIngresoExtraNo").checked === true){
    document.getElementById("numberIngresoExtra").disabled = true;
}
else{
    document.getElementById("numberIngresoExtra").disabled = false;
}

document.getElementById("radioIngresoExtraSi").onclick = function () {
    document.getElementById("numberIngresoExtra").disabled = false;
}
document.getElementById("radioIngresoExtraNo").onclick = function () {
    document.getElementById("numberIngresoExtra").disabled = true;
    document.getElementById("numberIngresoExtra").value = "";
}


//logica checked de radioDescuentoAdicional
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

//logica de presionar enter desde numberSalario
var numberSalario = document.getElementById("numberSalario");
numberSalario.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnCalcular").click();
  }
});

//logica de presionar enter desde numberIngresoExtra
var numberIngresoExtra = document.getElementById("numberIngresoExtra");
numberIngresoExtra.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnCalcular").click();
  }
});

//logica de presionar enter desde numberDescuentoAdicional
var numberDescuentoAdicional = document.getElementById("numberDescuentoAdicional");
numberDescuentoAdicional.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnCalcular").click();
  }
});

//logica de actualizar numeros con comas mientras escribes en numberSalario
var numberSalarioConComa = document.getElementById("numberSalario");
numberSalarioConComa.addEventListener("keyup", function(event) {
  if ((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode > 47 && event.keyCode < 58)){
      event.preventDefault();
      numberSalarioConComa.value = (numberSalarioConComa.value).replace(/,/g,"");
      numberSalarioConComa.value = (numberSalarioConComa.value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  if (event.keyCode ===8){
      event.preventDefault();
      numberSalarioConComa.value = (numberSalarioConComa.value).replace(/,/g,"");
      numberSalarioConComa.value = (numberSalarioConComa.value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
});

//logica de actualizar numeros con comas mientras escribes en numberIngresoExtra
var numberIngresoExtraConComa = document.getElementById("numberIngresoExtra");
numberIngresoExtraConComa.addEventListener("keyup", function(event) {
  if ((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode > 47 && event.keyCode < 58)) {
      event.preventDefault();
      numberIngresoExtraConComa.value = (numberIngresoExtraConComa.value).replace(/,/g,"");
      numberIngresoExtraConComa.value = (numberIngresoExtraConComa.value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  if (event.keyCode ===8){
      event.preventDefault();
      numberIngresoExtraConComa.value = (numberIngresoExtraConComa.value).replace(/,/g,"");
      numberIngresoExtraConComa.value = (numberIngresoExtraConComa.value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
});

//logica de actualizar numeros con comas mientras escribes en numberDescuentoAdicional
var numberDescuentoConComa = document.getElementById("numberDescuentoAdicional");
numberDescuentoConComa.addEventListener("keyup", function(event) {
  if ((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode > 47 && event.keyCode < 58)) {
      event.preventDefault();
      numberDescuentoConComa.value = (numberDescuentoConComa.value).replace(/,/g,"");
      numberDescuentoConComa.value = (numberDescuentoConComa.value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  if (event.keyCode ===8){
      event.preventDefault();
      numberDescuentoConComa.value = (numberDescuentoConComa.value).replace(/,/g,"");
      numberDescuentoConComa.value = (numberDescuentoConComa.value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
});

var salarioMensualBruto = document.getElementById("numberSalario").value;
var salarioMensualMenosAFPyARS = 0.00;
var salarioAnualMenosAFPyARS = 0.00;
var descuentoISR = 0.00;
var salarioMensualBruto = 0.00;
var salarioAnualBruto = 0.00;
var descuentoAFPMensual = 0.00;
var descuentoAFPAanual = 0.00;
var descuentoARSMensual = 0.00;
var descuentoARSAnual = 0.00;
var descuentoISRMensual = 0.00;
var descuentoISRAnual = 0.00;
var totalDescuentosMensual = 0.00;
var totalDescuentosAnual = 0.00;
var ingresosNetosMensual = 0.00;
var ingresosNetosAnual = 0.00;
var descuentoAdicionalMensual = 0.00;
var descuentoAdicionalAnual = 0.00;

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
function EsIngresoExtraValido(ingresoExtra){
    if(ingresoExtra>=0){
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
function CapturarDatoSalarioBruto(){
    //Asignando el valor del textbox Salario a la variable salarioMensualBruto
    let valorDatoSalario = document.getElementById("numberSalario").value;
    let valorDatoIngresoExtra = document.getElementById("numberIngresoExtra").value;
    
    valorDatoSalario = FormatearNumeroSinComas(valorDatoSalario);
    valorDatoIngresoExtra = FormatearNumeroSinComas(valorDatoIngresoExtra);
    
    if(EsSalarioValido(valorDatoSalario) === true && EsIngresoExtraValido(valorDatoIngresoExtra) === true){
        salarioMensualBruto = +valorDatoSalario + +valorDatoIngresoExtra;
        salarioAnualBruto = salarioMensualBruto * 12;
        salarioAnualBruto = salarioAnualBruto.toFixed(2);
    }
    else{
        salarioMensualBruto = 0.00;
        salarioAnualBruto = 0.00;
    }
}
function CapturarDatoDescuentoAdicional(){
    //Asignando el valor del textbox DescAdicional a la variable
    let valorDatoSalario = document.getElementById("numberSalario").value;
    valorDatoSalario = FormatearNumeroSinComas(valorDatoSalario);
    let valorDatoDescuentoAdicional = document.getElementById("numberDescuentoAdicional").value;
    valorDatoDescuentoAdicional = FormatearNumeroSinComas(valorDatoDescuentoAdicional);
    if(EsDescuentoAdicionalValido(valorDatoSalario , valorDatoDescuentoAdicional) === true){
        descuentoAdicionalMensual = valorDatoDescuentoAdicional;
        descuentoAdicionalAnual = descuentoAdicionalMensual * 12;
        descuentoAdicionalAnual = descuentoAdicionalAnual.toFixed(2);
    }
    else{
        descuentoAdicionalMensual = 0.00;
        descuentoAdicionalAnual = 0.00;
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
function FormatearNumeroConComas(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function FormatearNumeroSinComas(num){
    return num.toString().replace(/,/g,"");
}

//Que hacer cuando se clickea el boton de Calcular
document.getElementById("btnCalcular").onclick = function () {
    CapturarDatoSalarioBruto();
    CapturarDatoDescuentoAdicional();
    AlmacenarDescuentosAFP();
    AlmacenarDescuentosARS();
    AlmacenarDescuentosISR();
    AlmacenarTotalDescuentos();
    AlmacenarIngresoNeto();
    InsertarDatoEnTabla("ingresosBrutosMensualTD", "ingresosBrutosAnualTD", FormatearNumeroConComas(salarioMensualBruto), FormatearNumeroConComas(salarioAnualBruto));
    InsertarDatoEnTabla("descuentosAFPMensualTD", "descuentosAFPAnualTD", FormatearNumeroConComas(descuentoAFPMensual), FormatearNumeroConComas(descuentoAFPAanual));
    InsertarDatoEnTabla("descuentosARSMensualTD", "descuentosARSAnualTD", FormatearNumeroConComas(descuentoARSMensual), FormatearNumeroConComas(descuentoARSAnual));
    InsertarDatoEnTabla("descuentosISRMensualTD", "descuentosISRAnualTD", FormatearNumeroConComas(descuentoISRMensual), FormatearNumeroConComas(descuentoISRAnual));
    InsertarDatoEnTabla("descuentoAdicionalMensual", "descuentoAdicionalAnual", FormatearNumeroConComas(descuentoAdicionalMensual),FormatearNumeroConComas(descuentoAdicionalAnual));
    InsertarDatoEnTabla("totalDescuentosMensualTD", "totalDescuentosAnualTD", FormatearNumeroConComas(totalDescuentosMensual), FormatearNumeroConComas(totalDescuentosAnual));
    InsertarDatoEnTabla("ingresosNetosMensualTD", "ingresosNetosAnualTD", FormatearNumeroConComas(ingresosNetosMensual), FormatearNumeroConComas(ingresosNetosAnual));
    
    // element which needs to be scrolled to
    var element = document.querySelector("#numberDescuentoAdicional");

    // scroll to element
    element.scrollIntoView({behavior:"smooth", block:"start"});
};  
