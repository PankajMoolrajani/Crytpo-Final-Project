$(document).ready(function (){
	$("#loginButton").click(function(){
		alert("login button");
		username = $("#email").val();
		getNonce(username);
		
		});
	});
});

function getNonce(username){
	$.ajax({
		type: "POST",
		url: "../php/verification.php"
		data: {"username": username},
		dataType: "json",
		success: function(responseText){
			alert(responseText);
		}
}
