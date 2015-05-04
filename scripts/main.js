$(document).ready(function (){
	alert("login button");
	$("#loginButton").click(function(){
		alert("login button");	


function getNounce(){
var username = $("#username").val();

	$.ajax({
		url:"./php/verification.php",
		type:'post',
		data:{"username":username},
		success:function(data){
			alert(data);
		}

	});
}

$(document).ready(function (){
	$("#loginButton").click(function(){
			getNounce();
	});
});
