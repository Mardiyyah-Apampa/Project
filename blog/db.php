<?php
$conn = new mysqli("localhost", "root", "Password2$", "blog");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
