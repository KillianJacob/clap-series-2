<?php

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$method =  $_SERVER['REQUEST_METHOD'];

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if($method == "POST" && isset($_POST["email"])){

    $email = $_POST["email"];

    $result = array(
        'result' => 'succes'

    );

    sendmail($email);


    echo json_encode($result);


}


function sendmail($to){
   
    $mail = new PHPMailer(true);

    try {
        $mail->SMTPOptions = array(
            'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
            )
        );
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'mail.gmx.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'clap_serie@gmx.fr';                     // SMTP username
        $mail->Password   = $_ENV['EMAIL_PASSWORD'];
        $mail->CharSet = 'UTF-8';                          // SMTP password
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
        //Recipients
        $mail->setFrom('clap_serie@gmx.fr', 'Mailer');
        $mail->addAddress($to);     // Add a recipient
    
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Denis 😱';
        $mail->Body    = '<img src="https://cda2020.dlaoctet.net/denis.jpg" />';
    
        $mail->send();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }



}

?>