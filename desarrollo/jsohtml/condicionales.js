

//vamos a crear un inicio de sesion simple sin validacion

let Email = " barnieeldinasaurio@gmail.com";

let password = "5429222"

let userEmail = prompt("Ingrese su correo registrado");

let UserPassword = prompt(" Ingrese su contraseña registrada");



 if( Email === userEmail && password === UserPassword ){

    document.write(" Bienvenido al sistema")

 }else{

    alert(" valide sus credencial")


 }
