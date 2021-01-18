<?php
  $callback_name = $_POST['callback_name'];
  $callback_phone = $_POST['callback_phone'];
  $callback_load = $_POST['callback_load'];


  $email_subject = "Заявка на перевозку";
  $email_body = "Имя: $callback_name\nТелефон: $callback_phone\nИнформация о грузе: $callback_load";

  $email_from = 'website@adrtraffic.ru';
  $headers = "From: $email_from \r\n";
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";

  $to = "info@adrtraffic.ru";

  mail($to,$email_subject,$email_body,$headers);
?>