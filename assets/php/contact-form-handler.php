<?php
  $vName = $_POST['name'];
  $vEmail = $_POST['email'];
  $vMessage = $_POST['message'];

  $email_from = 'ssward1@gtcc.edu';
  $email_subject = "New Form Submission";
  $email_body = "User Name: $vName.\n".
                "User Email: $vEmail.\n".
                "User Message: $vMessage.\n";
  $to = "Sheila.Stanaland@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $vEmail \r\n";
  mail($to,$email_subject,$email_body,$headers);

  header("Location: contact.html");

?>
                