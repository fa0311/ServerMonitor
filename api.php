<?php
include "./assets/func/get.php";
include "./assets/func/api.php";
session_start();

$config = get_config();
if(!isset($_SESSION['token'])){
	http_response_code(403) ;
    die(); 
}
if($_SESSION['token'] < time() - $config["session"]["time"]){
	http_response_code(403);
    die(); 
}

$_SESSION['token'] = time();

$output = [];


$json = file_get_contents("php://input");
$query = json_decode($json, true)["query"];
if(in_array("free",$query)){
    $output["free"] = shell_exec_array("free"," ");
}
if(in_array("mpstat",$query)){
$mpstat = shell_exec_array("mpstat 1 1 -P ALL"," ");
$output["mpstat"] = array_slice($mpstat,0,ceil(count($mpstat) / 2) + 2);
}
if(in_array("lscpu",$query)){
    $output["lscpu"] = shell_exec_array("lscpu",":");
}
echo json_encode($output);