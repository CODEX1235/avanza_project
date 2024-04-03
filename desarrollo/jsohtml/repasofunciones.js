
let  nivelBateria = prompt("Ingrese el nivel de carga del celular")



function celular(nivelBateria){


  if(nivelBateria <=100  && nivelBateria > 51){

      document.write("Desconecte el cargador");


  }else if(nivelBateria <=50  && nivelBateria > 11){

    document.write(parseInt("Tu bateria esta al 50% o menos"));


  }else if(nivelBateria <=10  && nivelBateria > 5){
            
    document.write(parseInt("Tu bateria esta al 10% y necesita cargar"));

  }else (nivelBateria <=4 && nivelBateria > 1)

  document.write("Tu dispositivo esta apunto de descargar,¡por favor conectalo a un cargador! ");


}


celular(nivelBateria);




 

  
    











