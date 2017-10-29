function ordenarMenos(p1,p2){
  return p1.precio - p2.precio;
}
function ordenarMas (p1,p2){
  return p2.precio - p1.precio
}
function vegano(p){
     return p.vegano == true;
}


function Surtido(productos){
  this.productos = productos;

   this.ordenarVegano = function (){
        var v = this.productos.filter(vegano);
        return v;

      }

  this.ordenPorPrecioMenos = function (){
    this.productos.sort(ordenarMas);
  }
  this.ordenPorPrecioMas= function(){
  this.productos.sort(ordenarMenos);
  }
  this.dibujarSutido = function(produ){
    cuerpo.innerHTML = " ";
    var str = " ";
    if (produ == undefined){
       for (var i = 0; i < this.productos.length; i++) {
         str += "<div>";
         str += "<img src='" + this.productos[i].foto + "'alt= '"
         str += this.productos[i].nombre + "'>";
         str += "<p>el producto " + this.productos[i].nombre +"</p>";
         str += "<p>La descripcion:  " + this.productos[i].descripcion+"</p>";
         str += "<p> <b>Precio:  " + this.productos[i].precio+"</b></p>";
         str += "</div>";

       }

    }else{
      for (var i = 0; i < produ.length; i++) {
        str += "<div>";
        str += "<img src='" + produ[i].foto + "'alt= '"
        str += produ[i].nombre + "'>";
        str += "<p> " + produ[i].nombre +"</p>";
        str += "<p> " + produ[i].descripcion+"</p>";
        str += "<p> " + produ[i].precio+"</p>";
        str += "</div>";

      }

    }
       cuerpo.innerHTML = str;


  }
}
