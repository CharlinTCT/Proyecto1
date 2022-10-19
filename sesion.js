//redireccionar al inicio.html
var boton_sesion = document.querySelector('#boton_sesion');
boton_sesion.addEventListener('click', function(){

    window.location.assign("sesionini.html");
});



/*
//para definir los usuarios

function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

if(listaUsuarios == null)
    {
        listaUsuarios =
        [
            // Correo, paswword
          ['Charlincano12@gmail.com','Pepe],
          [ ]
       
       ]
    
    return listaUsuarios;
}

function validarCredenciales(pCorreo , pContraseña){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso =false;
    
    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][1] && pContraseña ==listaUsuarios[i][2]){
        bAcceso =true;
        }
    }
 return bAcceso;
}



if (typeof(Storage) !== 'undefined') {
    // Código cuando Storage es compatible
  } else {
   // Código cuando Storage NO es compatible
  }
*/






function I (){
    var Contraseña = Pepe;
    var Usuario = "Charlín";
    if(document.form.login.value == Contraseña && document.form.login.value == Usuario){
        alert (Bienvenido);
        window.location ="sesionini.html";
    }
    else{
        alert("Contraseña erronea, intentelo de nuevo");
    }
  
}