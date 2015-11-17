

function save(){
	localStorage.setItem("item", $("#input1").val());
	console.log($("#input1").val());
		
}

function deletes(){
	localStorage.removeItem("item");
}

function show(){

	$("#result").append("<h1>", localStorage.getItem("item") + "<h1>" );
}

function writeToScreen(message) { 
	 
	 
	$("#output").append("<h1>",message,"</h1>"); 
} 

var connection = new WebSocket('ws://echo.websocket.org/');

connection.onopen = function () {
  writeToScreen("Sending ping to:" + " //echo.websocket.org/");
  connection.send('Ping'); 

};
connection.onerror = function (error) {
  writeToScreen('WebSocket Error ' + error);
};


connection.onmessage = function (e) {
	writeToScreen("Sending...")
  	writeToScreen('Server responds: ' + e.data);
};



	

