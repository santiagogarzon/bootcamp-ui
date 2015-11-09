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


},{"./movie.js":1}]},{},[2]);
