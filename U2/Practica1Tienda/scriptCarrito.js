
'use strict'

if(navigator.cookieEnabled){
  alert("Cookies activadas!");
}else{
  alert("Sin cookes");
}

var compra = [productos[0],productos[2],productos[5]];
var e = new Usuario(compra);

e.calcularImporte();
e.mostrarCompra();




function condCompraOnline(){
  window.open("condiciones.html", "nuevo" , "directories=no, location=no, menubar=no, statusbars=no,scrollbars=yes, tittlebars=no, width=400px , heigth=400px" );
}

function eliminar(){
   if(e.compra.length==0){
     alert("No tienes ningun articulo");
   }else {
     e.compra.pop(3);
   }

   e.calcularImporte(compra);
   e.mostrarCompra(compra);

}

function hacerPedido(){
  var pedido = confirm("¿Aceptas el pedido que has realizado?");
  if(compra.length>0){

    if(pedido){
      location.assign("pedidoOk.html");
    }else{
     location.assign("carrito.html");
    }
  }

}



function inicio(){
 location.assign("home.html");
}

function imprimir(){
 window.print();
}
