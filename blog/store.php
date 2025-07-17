<?php
session_start();
include 'db.php';

$title = $_POST['title'];
$content = $_POST['content'];
$image = null;

if (!empty($_FILES['image']['name'])) {
  $image = time() . "_" . basename($_FILES["image"]["name"]);
  move_uploaded_file($_FILES["image"]["tmp_name"], "uploads/" . $image);
}

$stmt = $conn->prepare("INSERT INTO posts (title, content, image) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $title, $content, $image);
$stmt->execute();

header("Location: index.php");
?>
