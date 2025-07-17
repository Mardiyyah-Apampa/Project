<?php
session_start();
include 'db.php';

$posts = $conn->query("SELECT * FROM posts ORDER BY created_at DESC");
?>

<!DOCTYPE html>
<html>
<head>
  <title>Pink Blog</title>
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

    header h1 {
      margin: 0;
      font-size: 2em;
    }

    .top-links {
      text-align: center;
      margin-top: 10px;
    }

    .top-links a {
      margin: 0 10px;
      text-decoration: none;
      color: #fff;
      background-color: #ff1493;
      padding: 8px 14px;
      border-radius: 8px;
      font-weight: bold;
      display: inline-block;
    }

    .top-links a:hover {
      background-color: #e01382;
    }

    .container {
      max-width: 1100px;
      margin: 30px auto;
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .post {
      background: white;
      border: 1px solid #ffc0cb;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(255, 182, 193, 0.4);
      transition: transform 0.2s;
    }

    .post:hover {
      transform: scale(1.02);
    }

    .post h2 {
      margin-top: 0;
      color: #d63384;
    }

    .post img {
      max-width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      margin: 10px 0;
    }

    .post p {
      color: #555;
    }

    .post small {
      display: block;
      margin-top: 10px;
      color: #999;
    }

    .actions {
      margin-top: 10px;
    }

    .actions a {
      margin-right: 10px;
      color: #d63384;
      text-decoration: none;
      font-weight: bold;
    }

    .actions a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <header>
    <h1>Welcome to Clarke itt 🌸</h1>
    <div class="top-links">
      <a href="<?= isset($_SESSION['user_id']) ? 'create.php' : 'login.php' ?>">+ New Post</a>
      <?php if (isset($_SESSION['user_id'])): ?>
        <a href="logout.php">Logout</a>
      <?php else: ?>
        <a href="login.php">Admin Login</a>
      <?php endif; ?>
    </div>
  </header>

  <div class="container">
    <?php while ($row = $posts->fetch_assoc()): ?>
      <div class="post">
        <h2><?= htmlspecialchars($row['title']) ?></h2>

        <?php if (!empty($row['image'])): ?>
          <img src="uploads/<?= htmlspecialchars($row['image']) ?>" alt="Blog image">
        <?php endif; ?>

        <p><?= nl2br(htmlspecialchars(substr($row['content'], 0, 100))) ?>...</p>
        <a href="view.php?id=<?= $row['id'] ?>" style="color:#ff1493; font-weight:bold;">Read More</a>

        <small>Posted on <?= htmlspecialchars($row['created_at']) ?></small>

        <?php if (isset($_SESSION['user_id'])): ?>
          <div class="actions">
            <a href="edit.php?id=<?= $row['id'] ?>">Edit</a>
            <a href="delete.php?id=<?= $row['id'] ?>" onclick="return confirm('Are you sure you want to delete this post?')">Delete</a>
          </div>
        <?php endif; ?>
      </div>
    <?php endwhile; ?>
  </div>

</body>
</html>
