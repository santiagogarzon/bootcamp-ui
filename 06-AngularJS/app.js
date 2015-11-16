var app= angular.module('angulapp', []);


//app.value("movies" , );

app.controller('moviesCtrl',["$scope" ,"model", function($scope,  model) {
	$scope.movies= model.getAll();
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
		$scope.newmovie = angular.copy(model.get(id));
	};
	$scope.save = function(){
		model.save($scope.newmovie);
		$scope.newmovie={};
		$scope.back();

	};
	$scope.new= function() {
		$scope.newmovie={};
		$scope.hide= true;
		$scope.hide2= true;
		$scope.hide3= false;
	};
	$scope.delete = function(id){
		$scope.newmovie={};
		$scope.back();
		return (model.delete(id));
	};

	
}]);

app.factory("model", function() {
	var uid=5;
	var movies= [ {
		title: "Terminator",
		type: "Action",
		year: "2002",
		source: "netflix",
		score: 8,
		url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ",
		id: 0
		},
	{
		title: "Matrix",
		type: "Action",
		year: "2005",
		source: "netflix",
		score: 7,
		url: "http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle",
		id: 1
	},
	{
		title: "Iron Man",
		type: "Action",
		year: "2009",
		source: "Direct Tv",
		score: 6,
		url: "http://t2.gstatic.com/images?q=tbn:ANd9GcQD3vPP1cn4hWapVXW7y8DE5oDs3IRKizlga-5FaE9vMqTnSSzgG70roQ",
		id: 2
	},
	{
		title: "Whiplash",
		type: "Drama",
		year: "2014",
		source: "PayPerView",
		score: 9,
		url: "http://t3.gstatic.com/images?q=tbn:ANd9GcS_IwW5-_mWA1PXiPG4qEhLC6Q3vntQd7Bzgs_YE7HHFifItn2T",
		id: 3
	},
	{
		title: "Robocop",
		type: "action",
		year: "1987",
		source: "netflix",
		score: 8,
		url: "http://www.gstatic.com/tv/thumb/movieposters/10144/p10144_p_v7_ab.jpg",
		id: 4
	}


	];

	return {
		save: function(movie) {
			if(movie.id==null){
				movie.id=uid++;
				movies.push(movie);
			} else {
				for(i in movies) {
					if(movies[i].id==movie.id){
						movies[i]= movie;
						return true;
					}
				}
			}
		},

		get:  function(id) {
				for(i in movies){
					if(movies[i].id==id){
						return movies[i];
					}
				}
		},

		delete: function(id) {
				for(i in movies){
					if(movies[i].id==id){
						return (movies.splice(i, 1));

					}
				}
		},

		getAll: function() {
			return movies;
		}

	};


});

/*app.service("movieService",[ "movies", function(movies){
	var uid=5;
	
	function save(movie) {
		if(movie.id==null){
			movie.id=uid++;
			movies.push(movie);
		} else {
			for(i in movies) {
				if(movies[i].id==movie.id){
					movies[i]= movie;
					return true;
				}
			}
		}
	}

	function get(id) {
		for(i in movies){
			if(movies[i].id==id){
				return movies[i];
			}
		}
	}

	function supr(id) {
		for(i in movies){
			if(movies[i].id==id){
				return (movies.splice(i, 1));

			}
		}
	}
}]);*/

