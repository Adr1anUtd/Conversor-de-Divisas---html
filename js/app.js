//Variables
const form=document.getElementById("form");
const moneda=document.getElementById("relacion");
const error=document.getElementById("error");
const cantidad=document.getElementById("cantidad")
const conversionusuario=document.getElementById("conversion")

//funcion de eventos
function comprobarform(event){
    error.innerText = "";
    if(moneda.value=="0"){
        event.preventDefault();
        moneda.focus();
        error.innerText="Selecciona la conversion a realizar";
        return;   
    }else if(cantidad.value.trim() === "" || Number(cantidad.value) <= 0 || isNaN(Number(cantidad.value))){
        event.preventDefault();
        cantidad.focus();
        error.innerText="Ingresa una cantidad valida";
        return;
    }else if(moneda.value=="1"){
        event.preventDefault();
        let conversion=Number(cantidad.value) / 1.16;
        conversionusuario.innerText= conversion.toFixed(2);
        return;
    }else if(moneda.value=="2"){
        event.preventDefault();
        let conversion=Number(cantidad.value) * 1.16;
        conversionusuario.innerText= conversion.toFixed(2);
        return;
    }else if(moneda.value=="3"){
        event.preventDefault();
        let conversion=Number(cantidad.value) * 160.37;
        conversionusuario.innerText= conversion.toFixed(2);
        return;
    }else if(moneda.value=="4"){
        event.preventDefault(); 
        let conversion=Number(cantidad.value) / 160.37;
        conversionusuario.innerText= conversion.toFixed(2);
        return;
    }else if(moneda.value=="5"){
        event.preventDefault(); 
        let conversion=Number(cantidad.value) * 186.31;
        conversionusuario.innerText= conversion.toFixed(2);
        return;
    }else if(moneda.value=="6"){
        event.preventDefault(); 
        let conversion=Number(cantidad.value) / 186.31;
        conversionusuario.innerText= conversion.toFixed(2);
        return;
    }

    return true;
}


//Carga de eventos
form.addEventListener('submit', comprobarform)