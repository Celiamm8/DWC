onload=function(){



  var formulario = document.forms[0];
  formulario.onsubmit = function(e){

    function cookieNom(nombre,valor,dia){
      if (dia) {
          var date = new Date();
          date.setTime(date.getTime()+(dia*24*60*60*1000));
          var expires = ";expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = nombre+"="+valor+expires+";path=/";
        console.log(document.cookie);
    }




  var err = document.getElementsByClassName('errores')[0];
  var errores ="";
  var ret = true;
  e.preventDefault();

  var name = document.getElementById('nombre').value;
  if (name==null||name.length==0) {
    errores += "El nombre no puede estar vacio<br>";
    ret = false;
  }

  var apellidos = document.getElementById('apellidos').value;
  if (apellidos==null||apellidos==0) {
     errores += "Los apellidos no pueden estar vacio<br>";
     ret = false;
  }

  var email = document.getElementById('email').value;
  if (email==null|| email=="") {
    errores +="Email no puede ser vacio<br>";
    ret=false;
  }

  var emailRepe = document.getElementById('emailRepe').value;
  if (emailRepe == null || emailRepe!=email|| emailRepe=="") {
    errores += "Los emails no pueden estar vacios<br>";
    ret= false;
  }

  var fecha = document.getElementById("fecha").value;
  if (fecha==null) {
    errores += "indica una fecha </br>";
    ret = false;
  }

  var seccion = document.getElementById('selector').value;
  if (seccion==0 || seccion == null) {
    errores += "elige una seccion<br>";
    ret = false;
  }


  if (!document.getElementById("efectivo").checked && !document.getElementById("tarjeta").checked) {
    ret = false;
    errores += "Seleccione un metodo de pago <br>";
  }

  var dni = document.getElementById('dni').value;

  if (ret){
           var nombre = "nombre Usuario";
           var valor = nom;
           var dia = 360;
           cookieNom(nombre,valor,dia);
           var apellido = "Apellido";
           var apell = apellido;
           var dia =360;
           cookieNom(apellido,apell,dia);
           var email = "Email";
           var valoremail= document.getElementById('email').value;
           window.localStorage.setItem(email,valoremail);
           formulario.action ="alta.html";
       formulario.submit();
     }

  err.innerHTML = errores;
  return ret;
}

}
