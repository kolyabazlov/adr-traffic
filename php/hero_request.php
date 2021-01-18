<?php
  $hero_name = $_POST['hero_name'];
  $hero_phone = $_POST['hero_phone'];


  $email_subject = "Заявка со скидкой";
  $email_body = "Имя: $hero_name\nТелефон: $hero_phone";

  $email_from = 'website@adrtraffic.ru';
  $headers = "From: $email_from \r\n";
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";

  $to = "info@adrtraffic.ru";

  mail($to,$email_subject,$email_body,$headers);
?>