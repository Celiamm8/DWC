var p = new Surtido(productos);
var micompra = [productos[0], productos[3]];

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
