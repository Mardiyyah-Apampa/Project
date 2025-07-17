<?php
session_start();
include 'db.php';

$id = $_POST['id'];
$title = $_POST['title'];
$content = $_POST['content'];

if (!empty($_FILES['image']['name'])) {
  $image = time() . "_" . basename($_FILES["image"]["name"]);
  move_uploaded_file($_FILES["image"]["tmp_name"], "uploads/" . $image);
  $conn->query("UPDATE posts SET title='$title', content='$content', image='$image' WHERE id=$id");
} else {
  $conn->query("UPDATE posts SET title='$title', content='$content' WHERE id=$id");
}

header("Location: index.php");
?>
