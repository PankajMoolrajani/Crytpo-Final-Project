<?php
	include 'connection.php';

	$username =  $_POST['username'];
	$num = rand(10000,99999);
	$token = $username."~".$num;


	$sql_select = "SELECT id, user, pass FROM users";
	$result_select = mysqli_query($conn, $sql_select);
	$row = mysqli_fetch_assoc($result_select);
	$pass = $row["pass"];
	$id_user = $row["id"];
	
	$str = $username.$token.$pass;
	$hash = hash("sha256", $str);
	echo $hash;
	/*
	$sql_insert = "INSERT INTO requests ("id_user, token, hash")
	VALUES (".$id_user.", ".$token.", ".$hash.")";
	$result_insert = mysqli_query($conn, $sql_insert);
	*/
	
?> 
