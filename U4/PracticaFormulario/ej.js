onload = function(){
var formulario = document.forms[0];
formulario.onsubmit = function(e){
    var err = document.getElementsByClassName('errores')[0];
    var errList ="";
    var ret = true;
    e.preventDefault();

// validamos el nombre
   var nombre = document.getElementById('nombre').value;
    if(nombre == null || nombre.length == 0 || !(/^\S+$/.test(nombre))){
        errList += " el nombre introducido es erroneo <br>";
        ret = false;
    }

// validamos los Apellidos

    var apellidos = document.getElementById('apellidos').value;
       if(apellidos == null || nombre.length == 0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
         errList += " Los apellidos introducidos son erroneos <br>";
         ret = false;
       }

  // validamos el email
     var email = document.getElementById('email').value;
      if(!/^\w+@\w+\.\w+$/.test(email)){
        errList += " El email introducido es erroneo <br>";
        ret = false;
      }

    // validamos la repeticion del email

    var emailrepito = document.getElementById('emailRepe').value;
       if (!/^\w+@\w+\.\w+$/.test(email)) {
         errList += " el email no coincide <br>";
         ret = false;

       }

    // validamos el DNI
       var dni = document.getElementById('dni').value
       function validaDNI(){

    var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
      if( !(/^\d{8}[A-Z]$/.test(dni)) ){
         return false;
       }
        if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]){
           return false;
          }
          errList += " El DNI no es correcto";
           ret =  true;
         }
    //validamos si es mayor de Edad
     var fecha = (document.getElementById('fecha').value).split('-');
        var año = fecha[0];
        var mes = fecha[1];
        var dia = fecha[2];
        var nuevaF = new Date ( año,(mes-1),dia);

      var hoy = new Date();
        var edad = hoy.getFullYear()-año -1;
        if (hoy.getMonth()+1 - mes >0) {
          edad++;

        }
        if (hoy.getMonth() + 1 - mes > 0){
          	edad++;
        }

       	if (hoy.getUTCDate() - dia >= 0){
          	edad++;
        }

        if ( isNaN(nuevaF) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || año < 0 || año >= hoy.getFullYear()){
          errList += "La fecha es errónea <br>"
          ret = false;
        }else if (edad < 18){
          errList += "Debe ser mayor de edad para inscribirse <br>"
          ret = false;
        }

    // validamos la seccion favorita
    var seleccion = document.getElementById("selector").value;
    if (seleccion == null || seleccion == 0){
        errList += "Escoja una su seccion favorita <br>";
        ret = false;
    }
     if(seleccion=="libros"){
       formulario.action="libros.html";

     }
     if(seleccion =="discos"){
       formulario.action="discos.html";

     }
     if(seleccion=="tecnologia"){
       formulario.action="tecnologia.html";

     }

    // comprobar efectivo y terjeta
     if (!document.getElementById("efectivo").checked && !!document.getElementById("tarjeta").checked) {
       ret=false;
       errList+= "Seleccine un metodo de pago";
     }

     if (!document.getElementById("cond").checked) {
       ret=false;
       errList +="No se han probado";

     }

     //validar Enviar
     if (ret) {
       document.getElementById("enviar").value="enviando";
       document.getElementById("enviar").disabled=true;
       errList += "Peticion enviada";
       console.log(errList);
       formulario.submit();
       err.style.color="lime";


     }
     err.innerHTML= errList;
     return ret;
}

}
