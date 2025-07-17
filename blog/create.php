<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>


<!DOCTYPE html>
<html>
<head>
  <title>Create Post</title>
  <style>
    body {
      background: #ffe4ec;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form-box {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(255, 192, 203, 0.4);
      width: 100%;
      max-width: 500px;
    }

    h2 {
      text-align: center;
      color: #d63384;
      margin-bottom: 20px;
    }

    input[type="text"],
    textarea,
    input[type="file"] {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 14px;
    }

    button {
      width: 100%;
      padding: 12px;
      background: #d63384;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background: #c2185b;
    }
  </style>
</head>
<body>
  <div class="form-box">
    <h2>New Blog Post</h2>
    <form action="store.php" method="POST" enctype="multipart/form-data">
      <input type="text" name="title" placeholder="Post Title" required>
      <textarea name="content" rows="6" placeholder="Write your content here..." required></textarea>
      <input type="file" name="image">
      <button type="submit">Publish Post</button>
    </form>
  </div>
</body>
</html>
