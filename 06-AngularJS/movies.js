function Movie(){
	this.attributes= {};
	this.actors=[];
	this.observers=[];
};

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

var movie1= new Movie();
var movie2= new Movie();
var movie3= new Movie();
movie1.set("title","Batman");
movie1.set("type", "action");
movie1.set("year", "1998");

movie2.set("title","Kill Bill");
movie2.set("type", "action");
movie2.set("year", "2005");

movie3.set("title","Scarface");
movie3.set("type", "action");
movie3.set("year", "1983");

var movies=[movie1,movie2,movie3];
