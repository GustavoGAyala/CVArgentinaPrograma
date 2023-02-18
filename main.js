
/*logica de la barra de navegacion*/
document.getElementById('home').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('body-main').innerHTML = "<h5 class=card-title>Hola, Mi nombre es:</h5> <p class=card-text>Denise Caldwell</p>   <p class=card-text><small class=text-muted>Haga click sobre los iconos para mas información</small></p>"
}
document.getElementById('cumple').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('body-main').innerHTML = "<h5 class=card-title>El dia de mi cumpleaños es:</h5> <p class=card-text>19/09/1980</p>   <p class=card-text><small class=text-muted>Haga click sobre los iconos para mas información</small></p>"
}
document.getElementById('hobie').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('body-main').innerHTML = "<h5 class=card-title>Mi hobie favorito es:</h5> <p class=card-text>Tocal el piano, natación</p>   <p class=card-text><small class=text-muted>Haga click sobre los iconos para mas información</small></p>"
}
document.getElementById('mail').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('body-main').innerHTML = "<h5 class=card-title>Mi coorreo electronico es:</h5> <p class=card-text>denise@argentinaprograma.com</p>   <p class=card-text><small class=text-muted>Haga click sobre los iconos para mas información</small></p>"
}
document.getElementById('edu').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('body-main').innerHTML = "<h5 class=card-title>Mi carrera universitaria es:</h5> <p class=card-text>Ingenieria en computación</p>   <p class=card-text><small class=text-muted>Haga click sobre los iconos para mas información</small></p>"
}
document.getElementById('phone').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('body-main').innerHTML = "<h5 class=card-title>Mi numero telefonico es:</h5> <p class=card-text>(+54)-15-4474-1447</p>   <p class=card-text><small class=text-muted>Haga click sobre los iconos para mas información</small></p>"
}

      