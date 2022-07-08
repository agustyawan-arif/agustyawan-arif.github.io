<?php
include 'koneksi.php';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
mysqli_query($koneksi, "insert into contact values('','$name','$email','$subject','$message')")
header("location:../index.html")
?>
