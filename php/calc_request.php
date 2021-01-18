<?php
  $calc_load = $_POST['calc_load'];
  $calc_from = $_POST['calc_from'];
  $calc_to = $_POST['calc_to'];
  $calc_name = $_POST['calc_name'];
  $calc_phone = $_POST['calc_phone'];
  $calc_email = $_POST['calc_email'];
  $calc_mass = $_POST['calc_mass'];
  $load_type = $_POST['load_type'];
  $class_type = $_POST['class_type'];
  $mass_type = $_POST['mass_type'];


  $email_subject = "Заявка калькулятор";
  $email_body = "Имя: $calc_name\nТелефон: $calc_phone\nE-mail: $calc_email\nГруз: $calc_load\nМасса: $calc_mass $mass_type\nОткуда: $calc_from\nКуда: $calc_to\nКласс опасности: $class_type\nТип транспорта: $load_type";

  $email_from = 'website@adrtraffic.ru';
  $headers = "From: $email_from \r\n";
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";

  $to = "info@adrtraffic.ru";

  mail($to,$email_subject,$email_body,$headers);
?>