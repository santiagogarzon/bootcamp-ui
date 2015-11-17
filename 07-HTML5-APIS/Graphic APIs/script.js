var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
canvas.style.backgroundColor= '#'+Math.random().toString(16).substr(-6);


canvas.onmousemove = function(e) {
   var rect = this.getBoundingClientRect();
   var x = e.clientX -100;
   var y = e.clientY -100;

   ctx.beginPath();
   ctx.moveTo(x + Math.random() * 33 - 16, y + Math.random() * 33 - 16);
   ctx.lineTo(x + Math.random() * 33 - 16, y + Math.random() * 33 - 16);
   ctx.stroke();

}


var square = {
    'x': 300,
    'y': 60,
    'width': 30,
    'height': 30,
    'fill': '#000000'
};

var requestAnimationFrame =  
        window.requestAnimationFrame ||
        
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 60);
        };

var render = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(square.x, square.y, square.width, square.height);
    ctx.fillStyle = '#'+Math.random().toString(16).substr(-6);
    ctx.fill();

    requestAnimationFrame(render);
};

render();

var animate = function(prop, val, duration) {
  var start = new Date().getTime();
  var end = start + duration;
  var current = square[prop];
  var distance = val - current;

  var step = function() {
    var timestamp = new Date().getTime();
    var progress = Math.min((duration - (end - timestamp)) / duration, 1);

    square[prop] = current + (distance * progress);

    if (progress < 1) requestAnimationFrame(step);
    if(this.square.x==0){

    	this.square.x= 300;
    	this.square.y=120;
    	animate('x',0,2000);
    	animate('y',0,2000);
    }
  };

  return step();
};
animate('x',0,2000);
animate('y',0,1700);


