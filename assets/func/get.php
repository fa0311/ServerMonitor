<?php
function get_config($file = "config/config.json"){
    $config_file = file_get_contents($file);
    if($config_file === false){
        trigger_error("config_read_error", E_USER_ERROR);
    }
    $config = json_decode($config_file, true);
    if($config === null){
        trigger_error("config_read_error", E_USER_ERROR);
    }
    return $config;
}

function get_theme($name = "normal"){
    if(strpos($name,'/') !== false){
        trigger_error("theme_read_error", E_USER_ERROR);
    }
    $theme = file_get_contents("./theme/".$name."/index.html");
    if($theme === null){
        trigger_error("theme_read_error", E_USER_ERROR);
    }
    return $theme;
}
function get_asset($file = "header",$name = "normal"){
    if(strpos($file,'/') !== false){
        trigger_error("asset_read_error", E_USER_ERROR);
    }
    if(strpos($name,'/') !== false){
        trigger_error("asset_read_error", E_USER_ERROR);
    }
    $theme = file_get_contents("./assets/".$file."/".$name);
    if($theme === null){
        trigger_error("asset_read_error", E_USER_ERROR);
    }
    return $theme;
}
function theme_get_file_list($name = "normal",$file = "css"){
    if(strpos($name,'/') !== false){
        trigger_error("theme_read_error", E_USER_ERROR);
    }
    return glob('./theme/'.$name.'/assets/'.$file.'/*');
}