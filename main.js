$(document).ready(function(){
    datafn = ajax
    $("#generador").click(function(){
        alert(datafn)
    })    
})

document.getElementById('home').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('main').innerHTML = "Nombre:  Cosme Fulanguito, Algo mas para escribir por las moscas que quiera ver como es que se ve el texto cuando la oracion es mas larga de lo que imagino entrara en un explorador con un monitor extra pequeño para poder ver como ose organiza la pagina cuando tengo un texto grante"
}

var app = {}
var miCallBack = function(datos){
  console.log(datos);
}
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  app=data;
  miCallBack(app);
  }
});
      