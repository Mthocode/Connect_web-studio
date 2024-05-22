<?php

if(isset($_GET["Name"]))
{
    $name = $_GET["Name"];
    echo $name."</br>";
}
else
{
    echo "your Name is not set"."</br>";
}
if(isset($_GET["Sername"]))
{
    
    $sername = $_GET["Sername"];
    echo $sername."</br>";
}
else
{
    echo "your Sername is not set"."</br>";
}
if(isset($_GET["Ocupation"]))
{
    
    $ocupation = $_GET["Ocupation"];
    echo $ocupation."</br>";
}
else
{
    echo "your Ocupation is not set"."</br>";
}