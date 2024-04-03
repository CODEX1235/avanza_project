let init = prompt(" Presione 1 para iniciar ");

while( init !=0 ){

    let opc = parseInt ( prompt (" seleccione:  \n 1. Registrar usuario \n 2. Iniciar sesion \n 3. salir de la app") );

 switch (opc){
    
    case 1:
    document.write("registro");
    break;

    case 2:
    document.write( "2. Iniciar Sesion");

    let Email = " barnieeldinasaurio@gmail.com";

let password = "5429222"

let userEmail = prompt("Ingrese su correo registrado");

let UserPassword = prompt(" Ingrese su contraseña registrada");



 if( Email === userEmail && password === UserPassword ){

    document.write(" Bienvenido al sistema")

 }else{

    alert(" valide sus credencial")


 }


    break;

    case 3:
    document.write("3. Onichan uwu Micomprade");
        init = 0;
        break;

        default:
            document.write("Seleccione alguna opcion en pantalla");
            break;
 }
}