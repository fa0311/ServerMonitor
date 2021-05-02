<?php
function shell_exec_array($text,$separator){
    return  explode_array(shell_exec($text),$separator);
}

function explode_array($str,$separator){
    $array =  preg_split('/[\n\r\t]/',$str);
    $output = [];
    foreach($array as $value){
        $output_1 = [];
        foreach(explode($separator,$value) as $text){
            $text = preg_replace('/ /', '',$text);
            if($text !== ""){
                $output_1[] = $text;
            }
        }
        if($output_1 !== []){
        $output[] = $output_1;
        }
    }
    return $output;
}