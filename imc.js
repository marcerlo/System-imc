const CalcularPeso =()=> {
                  
    let p  = document.getElementById("peso").value;
    let a = document.getElementById("altura").value; 
    let rr  = parseFloat(p) / (parseFloat(a) * parseFloat(a));
    let imc =rr.toString();
      if (imc < 18.5) {
           document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.substring(0,4) + " y tienes bajo peso";
      } else if (imc >= 18.5 && imc <= 24.9) {
           document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.substring(0,4) + " y tienes peso normal";
      } else if (imc >= 25 && imc <= 29.9) {
           document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.substring(0,4) + " y tienes sobrepeso";
      } else if (imc >= 30 && imc <= 34.9) {
           document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.substring(0,4) + " y tienes obesidad grado 1";
      } else if (imc >= 35 && imc <= 39.9) {
           document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.substring(0,4) + " y tienes obesidad grado 2";
      } else if (imc >= 40 && imc <= 49.9) {
           document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.substring(0,4) + " y tienes obesidad grado 3";
      }else if (imc == 50) {
           document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc.substring(0,4) + " y tienes obesidad grado 4";
      } 
      else if (imc > 50) {
           alert("IMC no valido")
           setTimeout(() => {

               document.getElementById("peso").value="";
               document.getElementById("altura").value="";
          }, 1000);
      } 
      else {
           document.getElementById("resultado").innerHTML = "No se pudo calcular";
      }
         
 }