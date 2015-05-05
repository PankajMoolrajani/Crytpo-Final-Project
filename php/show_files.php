<?php
	echo "list of files";
	$arr_files = scandir("./../uploads");
	echo "<select>";
	
	foreach ($arr_files as $filename){
		echo "<option>".$filename."</option>";
	}
	echo "</select>";
?>