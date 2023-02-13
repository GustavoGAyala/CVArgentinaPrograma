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
  document.getElementById('demo').innerHTML = "Adios muchachines"
}