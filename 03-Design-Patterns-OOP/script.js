
 //------ MOVIE CLASS
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

//--------MOVIE MODULE

/*function Movie() {
	var attributes={};
	var actors=[];
	var observers=[];

	function uploadMovie (attr, value) {
		attributes[attr] = value;
	}
	function publish(data) {
		var len= observers.length;
		for(var i=0; i<len; i++){
			observers[i].listen(data);
		}
	}
	function suscribe(observer){
		observers.push(observer);

	}
	function unsuscribe(observer){
		var len= observers.length;
		for( var i=0; i<len; i++){
			if( observers[i] === observer){
				observers.splice(i,1);
				return;
			}
		}
	}
	function play(aux){
    	publish("Playing " + attributes.title);
	}
	function stop(aux){
    	publish("Stopping " + attributes.title);

	}

	return {
		playP: play,
		stopP: stop,
		unsuscribeP: unsuscribe,
		suscribeP: suscribe,
		publishP: publish,
		update: uploadMovie,

		get : function(attr){
			return attributes[attr];
		},
		setActors: function (act){
			actors= act;
		},
		getActors: function () {
			return actors;
		}
	}
};
*/
//create downloadbleMovie
function DownloadableMovie(){
	this.__proto__=new Movie();
	this.download = function download() {
		this.publish("Downloading " + this.get("title"));
	}
};
//create movieObserver
var movieObserver = {
	listen: function(data){
		console.log(data);
	}
};

//create Social
var social= {
	share: function(friendName){
		this.publish("Sharing "+ this.get("title") + " with " + friendName);
	},
	like: function(){
		console.log("liking");
	}
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

extend(Movie.prototype, social);

//creating actor
function Actor(name, years, sex){
	this.fullName= name;
	this.yearsOld= years;
	this.gender= sex;
}


//creating var

var movie1=new Movie();

var dlMovie1= new DownloadableMovie();

var actor1= new Actor("Arnold", "68", "masculine");
var actor2= new Actor("Edward Furlong", "38", "masculine");
var actor3= new Actor("Linda Hamilton", "59", "Femenine");

//making Array of actors
var arrayActors= [actor1,actor2,actor3];

//suscribing observers
movie1.suscribe(movieObserver);
dlMovie1.suscribe(movieObserver);

//making some movies
movie1.set("title","terminator");
movie1.set("type", "action");
movie1.set("year", "1991");

dlMovie1.set("title","Robocop");
dlMovie1.set("type", "action");
dlMovie1.set("year", "2009");

//adding array of actors
movie1.setActors(arrayActors);


