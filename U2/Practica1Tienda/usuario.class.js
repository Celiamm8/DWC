'use strict'

function Usuario (compra){
  this.id = (Math.random() * 1000 ) +1;
  this.idioma = navigator.lenguage;
  this.navegador = navigator.userAgent;
  this.compra = compra;
  this.importe = 0;


  this.mostrarCompra = function(c){

      cuerpo.innerHTML = " ";
      var str = " ";
      if (c == undefined){
         for (var i = 0; i < this.compra.length; i++) {
           str += "<div>";
           str += "<img src='" + this.compra[i].foto + "'alt= '";
           str += this.compra[i].nombre + "'>";
           str += "<p>el producto " + this.compra[i].nombre +"</p>";
           str += "<p>La descripcion:  " + this.compra[i].descripcion+"</p>";
           str += "<p> <b>Precio:  " + this.compra[i].precio+"</b></p>";
           str += "</div>";



         }


      }else{
        for (var i = 0; i < c.length; i++) {
          str += "<div>";
          str += "<img src='" + c[i].foto + "'alt= '";
          str += c[i].nombre + "'>";
          str += "<p> " + c[i].nombre +"</p>";
          str += "<p> " + c[i].descripcion+"</p>";
          str += "<p> " + c[i].precio+"</p>";


          str += "</div>";

        }


      }
         cuerpo.innerHTML = str + "El importe total es: " + this.importe ;


    }

function eliminarCompra(){
  if(e.compra.length==0){
    alert("No tienes ningun articulo");
  }else {
    this.compra.pop();
  }
  e.mostrarCompra();
}

this.calcularImporte = function (){
  if(this.compra.length > 0){
    var i = this.compra.reduce(function (total,n){
      return total + n.precio;
    },0);
      this.importe = i;
  }else {

  }

}
}
