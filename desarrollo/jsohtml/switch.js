
//vamos a hacer una aplicacion que permite: inicio de sesion, registro y salida

let opc = parseInt ( prompt (" seleccione:  \n 1. Registrar usuario \n 2. Iniciar sesion \n 3. salir de la app") );

 switch (opc){
    
    case 1:
    document.write("registro");
    break;

    case 2:

    document.write( "2. Iniciar Sesion");

    break;

    case 3:
        document.write("3. Onichan uwu Micomprade");

        break;

        default:
            document.write("Seleccione alguna opcion en pantalla");

 }