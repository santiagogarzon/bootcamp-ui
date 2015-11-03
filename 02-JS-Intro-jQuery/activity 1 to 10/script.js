

var ip , flag= false;
/*$.getJSON("http://jsonip.com?callback=?", function (data) {
   ip = data.ip
});*/
function getIP(json) {
    ip =  json.ip;
  }
 

$(document).ready( function() {
	$("#seccion").css({ 'visibility': ' visible'});
	$('textarea').focus();




	

	$("button").click(function(){
        
         $.ajax({

          url: 'http://bootcamp.aws.af.cm/welcome/yourname',
          type: 'GET',
          dataType:"json",
          success: function(data) {
          	var cadena= JSON.parse( JSON.stringify(data, null, 2) );
          	cadena.response= cadena.response.replace("yourname", ip);
          	if(flag==false){
          		flag=true;
          		$('<p>'+ cadena.response +'</p>').appendTo('#seccion');}
            
          },
	});
    });

	$( document ).ajaxError(function() {
	 	 $( "#seccion" ).css({ 'text': ' red'});
	});

});
   


