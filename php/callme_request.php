<?php
  $callme_phone = $_POST['callme_phone'];


  $email_subject = "Заявка перезвонить";
  $email_body = "Телефон: $callme_phone";

  $email_from = 'website@adrtraffic.ru';
  $headers = "From: $email_from \r\n";
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";

  $to = "info@adrtraffic.ru";

  mail($to,$email_subject,$email_body,$headers);
?>