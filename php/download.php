<?php
$fullPath = "./../uploads";
$file="git.token";
if (file_exists($fullPath)) {

    #echo $fullPath;

    // setting headers
    header('Content-Description: File Transfer');
    //header('Content-Type: '.$type);
    header('Content-Disposition: attachment; filename='.basename($file));
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    ob_clean();
    flush();
    readfile($file);
} else {
    die('File does not exist');
}
?>