<?php
include "./assets/func/get.php";

session_start();
$_SESSION['token'] = time();

$config = get_config();
$header = get_asset("header","index.html");
$theme = get_theme($config["theme"]);
foreach($config["html"] as $search => $replace){
    $header = str_replace("[[".$search."]]",$replace,$header);
}


$jslist = theme_get_file_list($config["theme"],"js");
$js ='<script type="text/javascript" src="./assets/js/Chart.bundle.min.js"></script>';
$js .='<script type="text/javascript" src="./assets/js/main.js"></script>';
foreach($jslist as $file_path){
    $js .='<script type="text/javascript" src="'.$file_path.'"></script>';
}

$csslist = theme_get_file_list($config["theme"],"css");
$css = "";
foreach($csslist as $file_path){
    $css .= '<link rel="stylesheet" href="'.$file_path.'">';
}

$header = str_replace("[[body]]",$theme,$header);
$header = str_replace("[[js]]",$js,$header);
$header = str_replace("[[css]]",$css,$header);
echo $header;