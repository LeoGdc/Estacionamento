<?php

define('SRC', $_SERVER['DOCUMENT_ROOT'].'/leonardo/Estacionamento/');

function createJSON($arrayDados)
{
    if (!empty($arrayDados))
    {
        header('Content-Type: application/json');
        $dadosJSON = json_encode($arrayDados);

        return $dadosJSON;

    } else 
    {
        return false;
    }
}

?>