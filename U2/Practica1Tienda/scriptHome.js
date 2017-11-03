'use strict'

var p = new Surtido(productos);
var mcompra = [productos[0], productos[3],productos[5],productos[7],productos[2]];
p.dibujarSutido();
function recarga(){
location.reload();
}

function verPorPrecioMas(p){
  p.ordenPorPrecioMas();
  p.dibujarSutido();
}

function verPorPrecioMenos(p){
  p.ordenPorPrecioMenos();
  p.dibujarSutido();
}

function verVegano(){

  p.dibujarSutido(p.ordenarVegano());

}
function navegarCarrito(){
  location.replace("carrito.html");
}
function condCompraOnline(){
    window.open("condiciones.html", "nuevo" , "directories=no, location=no, menubar=no, statusbars=no,scrollbars=yes, tittlebars=no, width=400px , heigth=400px" );
}
