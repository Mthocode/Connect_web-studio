<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>E-Mail</title>
        <link href="css/footer.css" rel="stylesheet" type="text/css">
        <style type="text/css">
            body
            {
                /*background-size: 100%;
                background-repeat: no-repeat;
                width: 100%;*/ 
                height: 100%;
                background-color: rgb(7, 71, 68);
            }
           footer
             {
               top: 90%;
               left: 0%;
               height: 16%;
               box-shadow : -1px -10px 10px rgb(10, 10, 10);
               bottom: 0%;
             }
            #responce
             {
                 position: absolute;
                 top: 15%;
                 left: 26%;
                 width: 50%;
                 height: 20%;
                 text-shadow: 1px 1px rgb(10, 10, 10);
/*                 background-color: black;*/
                 font-size: 32px;
                 color: white;
             }
             #continue
             {
                 position: absolute;
                 top: 55%;
                 left: 40%;
                 width: 20%;
                 height: 10%;
                 background-color: #21313f;
                 border: black solid thin;
                 border-radius: 10px;
                 color: white;
                 cursor: pointer;
             }
        </style>
    </head>
    <body>
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
        ?>
        <a href="index.html"><button id="continue">continue to home page</button></a>
        <footer>
            <div id="footerloga">
                <img src="res/Connrct web2.png">
            </div>
            <div id="footertag">
                connect web-studios 2024
            </div>
            <div id="social">
                fblogo
            </div>
        </footer>
    </body>

</html>