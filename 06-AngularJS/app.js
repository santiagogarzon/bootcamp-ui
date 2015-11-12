var app= angular.module('angulapp', []);

app.controller('moviesCtrl', function($scope, movieService) {
	$scope.movies= movies;
	$scope.selected= $scope.movies[0];
	$scope.hide= false;
	$scope.hide2= true;
	$scope.hide3= true;
	
	$scope.clicked= function(id){
		$scope.selected= $scope.movies[id];
		$scope.hide=true;
		$scope.hide2=false;
	};
	$scope.back= function(){
		$scope.hide= false;
		$scope.hide2= true;
		$scope.hide3= true;
	};
	$scope.edit= function(id){
		$scope.hide3= false;
		$scope.newmovie = angular.copy(movieService.get(id));
	};
	$scope.save = function(){
		movieService.save($scope.newmovie);
		$scope.newmovie={};
		$scope.back();

	};
	$scope.new= function() {
		$scope.hide= true;
		$scope.hide2= true;
		$scope.hide3= false;
	}

	
});

app.service("movieService", function(){
	var uid=5;
	
	this.save= function (movie) {
		if(movie.id==null){
			movie.id=uid++;
			movies.push(movie);
		} else {
			for(i in movies) {
				if(movies[i].id==movie.id){
					movies[i]= movie;
				}
			}
		}
	}

	this.get = function(id) {
		for(i in movies){
			if(movies[i].id==id){
				return movies[i];
			}
		}
	}

	this.delete= function(id) {
		for(i in movies){
			if(movies[i].id=id){
				movies.splice(i, 1);
			}
		}
	}
});

