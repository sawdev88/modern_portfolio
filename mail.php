<?php
  $name	= trim($_POST['name']);
  $to	= "seanwinesdev@gmail.com";
  $subject = "$name sent a message via your contact form";

  $message = "$name says hello!";

  $headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
	$headers .= "X-Priority: 1\r\n";
	$headers .= "X-MSMail-Priority: High\r\n\r\n";

  mail($to, $subject, $message, $headers);
 ?>

 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Sean Wines | Front-end Web Dev</title>
     <link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
     <link rel="stylesheet" href="css/main.css">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
     <script src="https://use.fontawesome.com/09efc92c6d.js"></script>
   </head>
   <body id="sent_mail">
     <div class="thanks_php">
       <h1>Thanks for saying Hi!</h1>
       <div class="send_home">
         <h2>Click to return home</h2>
         <a href="index.html"><img src="img/icon_home.png" alt="Home Icon" /></a>
       </div>
     </div>
   </body>
 </html>
