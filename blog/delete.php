<?php
session_start();
include 'db.php';

$id = $_GET['id'];
$post = $conn->query("SELECT * FROM posts WHERE id=$id")->fetch_assoc();

if (!empty($post['image']) && file_exists("uploads/" . $post['image'])) {
  unlink("uploads/" . $post['image']);
}

$conn->query("DELETE FROM posts WHERE id=$id");
header("Location: index.php");
?>
