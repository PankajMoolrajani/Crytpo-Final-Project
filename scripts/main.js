

function getNounce(){
var username = $("#username").val();

	$.ajax({
		url:"./php/naunce_gen.php",
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
