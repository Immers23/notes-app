
function NoteController(){}

NoteController.prototype.insertion = function(text){
  var x = document.getElementById("app");
  x.innerHTML = text;
}


