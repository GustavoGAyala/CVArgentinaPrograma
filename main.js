$(document).ready(function(){
    datafn = ajax
    $("#generador").click(function(){
        alert(datafn)
    })



    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          self.datafn = data;
        }
      });
           
    
})
document.getElementById('datos').onclick = function (){
  console.log("Capturamos el evento click");
  document.getElementById('demo').innerHTML = "Nombre:  Cosme Fulanguito, Algo mas para escribir por las moscas que quiera ver como es que se ve el texto cuando la oracion es mas larga de lo que imagino entrara en un explorador con un monitor extra pequeño para poder ver como ose organiza la pagina cuando tengo un texto grante"
}