var movie= require("./movie.js");

function Director (name){
	this.name= name;
	this.quotes=[];

}

Director.prototype.spoke= function(aux){
	console.log(this.name, "says:", this.quotes[aux] );
};

Director.prototype.set= function(attr , data){
	this[attr]=data;
};

Director.prototype.get= function(attr){
	return this[attr];
};


var movie1= new movie();
movie1.director={};

var dir1= new Director("Tim Burton");
var dir2= new Director("Quentin Taratino");
var dir3= new Director("Oliver Stones");

dir1.set("quotes", ["holaaaaa","chauuu"]);

movie1.set("director", dir1);

