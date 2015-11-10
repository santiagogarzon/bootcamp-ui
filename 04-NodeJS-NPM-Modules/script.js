var movie= require("./movie.js");
var $ = require('jquery');

function Director (name){
	this.name= name;
	this.quotes=[];

}

Director.prototype.spoke= function(aux){
	return (this.name, "says:", this.quotes[aux] );
};

Director.prototype.set= function(attr , data){
	this[attr]=data;
};

Director.prototype.get= function(attr){
	return this[attr];
};


var movie1= new movie();
var movie2= new movie();
var movie3= new movie();
movie1.set("title","Batman");
movie1.set("type", "action");
movie1.set("year", "1998");

movie2.set("title","Kill Bill");
movie2.set("type", "action");
movie2.set("year", "2005");

movie3.set("title","Scarface");
movie3.set("type", "action");
movie3.set("year", "1983");

var dir1= new Director("Tim Burton");
var dir2= new Director("Quentin Taratino");
var dir3= new Director("Oliver Stones");

dir1.set("quotes", ["We all know interspecies romance is weird.","Movies are like an expensive form of therapy for me."]);
dir2.set("quotes", ["Violence is one of the most fun things to watch.","I steal from every movie ever made."]);
dir3.set("quotes", ["There's an electrical thing about movies.","When you look at a movie, you look at a director's thought process."]);


movie1.set("director", dir1);
movie2.set("director", dir2);
movie3.set("director", dir3);

var movies=[movie1, movie2, movie3];
var result;
 
 $(document).ready( function() {
 	for(i=0;movies.length>i;i++){
 		result= "<h3>" + movies[i].get("title") + "(" + movies[i].get("year") + ")<h3>";
 		result+= "<h4>" + movies[i].get("director").get("name") + " said:<h4>";
		result+= "<h5>&quot;" + movies[i].get("director").spoke(0) + "&quot;<h4>";
		result+= "<h5>&quot;" + movies[i].get("director").spoke(1) + "&quot;<h4> <p>";
		$(result).appendTo( $("section"));
 	}


 });


