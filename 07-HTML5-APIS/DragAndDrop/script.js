var holder = document.getElementById('holder');
var result= document.getElementById('result');

holder.ondragover = function () {  return false; };
holder.ondragend = function () {  return false; };
holder.ondrop = function (e) {
 
  e.preventDefault();

  var file = e.dataTransfer.files[0],
      reader = new FileReader();
  reader.onload = function (event) {
    var tx="<h2> The content of the file " + file.name + " is: </h2>"
    $("#result").append( tx + "<h4>" + event.target.result + "<h4>");
    };
  console.log(file);
  reader.readAsText(file);

  return false;
};