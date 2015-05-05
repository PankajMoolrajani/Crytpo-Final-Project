
$(document).ready(function (){

	$("#loginButton").click(function(){
			var username = $("#username").val();
			$.ajax({
			url:"./php/naunce_gen.php",
			type:'post',
			data:{"username":username},
			success:function(data){
				alert(data);
			}
		});
	});

	$("#btn-show-files").click(function(){
		alert("show files");
		$.ajax({
			url:"./php/show_files.php",
			type:'post',
			//data:{"username":username},
			success:function(data){
				$("#div-show-files").html(data);
			}
		});
	});

	$("#submit-download-file").click(function(){
		$.ajax({
			url:"./php/download.php",
			type:'post',
			success:function(data){
				window.loc
				$("#div-show-files").html("File Downloaded & Decrypted Success");
				window.location.href = "http://crypto.com/Crytpo-Final-Project/php/download.php";
			}
		});
	});

});
