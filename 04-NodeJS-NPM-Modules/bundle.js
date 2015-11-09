(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Movie(){
	this.attributes= {};
	this.actors=[];
	this.observers=[];
}

Movie.prototype = {
	set: function(attr , value){
		this.attributes[attr] = value;
		return "The attribute " + attr + " has been changed to this value: " + value ;
	},
	get: function (attr){
		return this.attributes[attr];
	},
	publish: function(data) {
		var len= this.observers.length;
		for(var i=0; i<len; i++){
			this.observers[i].listen(data);
		}
	},

	
	suscribe: function(observer){
		this.observers.push(observer);
	},
	unsuscribe: function(observer){
		var len= this.observers.length;
		for( var i=0; i<len; i++){
			if( this.observers[i] === observer){
				this.observers.splice(i,1);
				return;
			}
		}
	},
	play: function(){
    	this.publish("Playing " + this.get("title"));
	},
	stop: function(){
    	this.publish("Stopping " + this.get("title"));
	},
	setActors: function (act){
		actors= act;
	},
	getActors: function () {
		return actors;
	}
};

module.exports= Movie;

},{}],2:[function(require,module,exports){
var movie= require("./movie.js");

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



},{"./movie.js":1}]},{},[2]);
