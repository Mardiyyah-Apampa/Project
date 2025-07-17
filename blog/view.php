<?php
session_start();
include 'db.php';

if (!isset($_GET['id'])) {
  echo "Post ID not specified.";
  exit();
}

$id = (int) $_GET['id'];
$post = $conn->query("SELECT * FROM posts WHERE id = $id")->fetch_assoc();

if (!$post) {
  echo "Post not found.";
  exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title><?= htmlspecialchars($post['title']) ?> | Pink Blog</title>
  <style>
    body {
      background: #fff0f5;
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
    }

    header {
      background: #ff69b4;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      max-width: 800px;
      margin: 30px auto;
      background: white;
      padding: 20px;
      border: 1px solid #ffc0cb;
      border-left: 8px solid #ff69b4;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(255, 192, 203, 0.2);
    }

    h2 {
      color: #d63384;
    }

    img {
      max-width: 100%;
      border-radius: 8px;
      margin: 10px 0;
    }

    .back-link {
      margin-top: 20px;
      display: block;
      color: #ff1493;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>

<header>
  <h1><?= htmlspecialchars($post['title']) ?></h1>
</header>

<div class="container">
  <?php if (!empty($post['image'])): ?>
    <img src="uploads/<?= $post['image'] ?>" alt="Post image">
  <?php endif; ?>

  <p><?= nl2br(htmlspecialchars($post['content'])) ?></p>
  <small>Posted on <?= $post['created_at'] ?></small><br>

  <a class="back-link" href="index.php">← Back to Home</a>
</div>

</body>
</html>
