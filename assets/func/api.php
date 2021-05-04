<?php
function shell_exec_array($text,$separator,$mode){
    return  explode_array(shell_exec($text),$separator,$mode);
}

function explode_array($str,$separator,$mode = false){
    $array =  preg_split('/[\n\r\t]/',$str);
    $output = [];
    foreach($array as $value){
        $output_1 = [];
        foreach(explode($separator,$value) as $text){
            $text = preg_replace('/ /', '',$text);
            $text = preg_replace('/:/', '',$text);
            if($text !== ""){
                $output_1[] = $text;
            }
        }
        if($output_1 !== []){
            if($mode){
                $key = array_shift($output_1);
                $output[$key] = $output_1;
            }else{
                $output[] = $output_1;
            }
        }
    }
    return $output;
}