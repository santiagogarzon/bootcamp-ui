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
