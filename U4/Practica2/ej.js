
       var pista = document.getElementsByTagName('p');
       var regalo = document.getElementsByTagName('div');
       var imagen = document.getElementsByTagName('img');

        for (var i = 0; i < pista.length; i++) {
          pista[i].style.display= 'none';
        }

        function mostrarPista1(){
          pista[0].style.display= "block";
        }
        function mostrarPista2(){
          pista[1].style.display= "block";
        }
        function mostrarPista3(){
          pista[2].style.display= "block";
        }





            function mensaje1(){
              alert(" te has ganado una AUTOCARAVANA");
            }
            function mensaje2(){
              alert("te has ganado un PORTATIL");
            }
            function mensaje3() {
              alert("te has ganado un PIZZA");
            }





       function mostrarImagen1(){
         imagen[0].style.display = "block";
         regalo[0].style.display = "none";
         regalo[1].removeEventListener("click", mensaje2);
         regalo[1].addEventListener("click",mensaje1);
         regalo[1].removeEventListener("click", mostrarImagen2);
         regalo[2].removeEventListener("click", mensaje3);
         regalo[2].addEventListener("click", mensaje1);
         regalo[2].removeEventListener("click", mostrarImagen3);
       }

       function mostrarImagen2(){
         imagen[1].style.display = "block";
         regalo[1].style.display = "none";
         regalo[0].removeEventListener("click", mensaje1);
         regalo[0].addEventListener("click", mensaje2);
         regalo[0].removeEventListener("click", mostrarImagen1);
         regalo[2].removeEventListener("click", mensaje3);
         regalo[2].addEventListener("click", mensaje2);
         regalo[2].removeEventListener("click", mostrarImagen3);

       }

      function mostrarImagen3(){
        imagen[2].style.display = "block";
        regalo[2].style.display = "none";
        regalo[0].removeEventListener("click", mensaje1);
        regalo[0].addEventListener("click", mensaje3);
        regalo[0].removeEventListener("click", mostrarImagen1);
        regalo[1].removeEventListener("click", mensaje2);
        regalo[1].addEventListener("click",mensaje3);
        regalo[1].removeEventListener("click", mostrarImagen2);

      }

      for (var i = 0; i < regalo.length; i++) {
        regalo[i].oncontextmenu = function (e){
          e.preventDefault();
        }
      }
