
var result1="", result2="";

$(document).ready( function() {
	

$.ajax({
          url: "https://api.spotify.com/v1/search",
          type: "get", 
          data:{q: "Rolling Stones", type: "Album"},
          success: function(response) {
                  var albums = response.albums;
                  
                  for(var i=0,len=albums.items.length;i<len;i++){
                      var album = response.albums.items[i];
                      result1= result1 + "<h5>" + album.name + "</h5>";

                      result2=  "<article> <h1>" + album.name + "</h1>" + "<img src=" + album.images[0].url +
                      "  height="+100+" width="+100+">"+
                       " <h4> " + album.type +
                       "</h4>" +" <a href=" + album.external_urls.spotify +" >"+
                        album.external_urls.spotify +" </a>"+ "</article>" ;

                     $(result2).appendTo( $("section"));

                  }
                  $(result1).appendTo( $("aside"));
                  
                  
          },
          error: function(xhr) {
            }
        });
         
    


	$("button").click(function(){
       $("section").empty();
       $("aside").empty();
       var artist=$("input").val() ;
       $.ajax({
          url: "https://api.spotify.com/v1/search",
          type: "get", 
          data:{q:  artist , type: "Album"},
          success: function(response) {
                  var albums = response.albums;
                  
                  for(var i=0,len=albums.items.length;i<len;i++){
                      var album = response.albums.items[i];
                      result1= result1 + "<h5>" + album.name + "</h5>";

                      result2=  "<article> <h1>" + album.name + "</h1>" + "<img src=" + album.images[0].url +
                      "  height="+100+" width="+100+">"+
                       " <h4> " + album.type +
                       "</h4>" +" <a href=" + album.external_urls.spotify +" >"+
                        album.external_urls.spotify +" </a>"+ "</article>" ;

                     $(result2).appendTo( $("section"));

                  }
                  $(result1).appendTo( $("aside"));
                  
                  
          },
          error: function(xhr) {
            }
        });

	});
});

