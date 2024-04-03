

  var  rostro = prompt("Acerque su rostro")


   let rostros = ["Pepito", "Laura", "pedro"]


    function reconocer(){

     if(rostro.includes(rostro)){
     return true;

    

    } else {
         
        return false


    }

}




alert("El valor de la funcion reconocer es:" + reconocer(rostro))


function abrirPuerta(reconocer){

    if (reconocer()  == true){

        alert("Abriendo Puerta");


    }else{

        alert("Debe registrarse en TI")
    }
}

abrirPuerta(reconocer);