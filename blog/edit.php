<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id'])) {
  header("Location: login.php");
  exit;
}

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

// Fetch the post
$stmt = $conn->prepare("SELECT * FROM posts WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$post = $result->fetch_assoc();

if (!$post) {
  echo "<h2 style='text-align:center;color:#d63384;'>Post not found.</h2>";
  exit;
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Edit Post</title>
  <style>
    body {
      background: #fff0f5;
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
    }

    input[type="text"],
    textarea,
    input[type="file"] {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    img {
      max-width: 100%;
      margin-top: 10px;
      border-radius: 8px;
    }

    button {
      width: 100%;
      padding: 12px;
      background: #d63384;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
    }

    button:hover {
      background: #c2185b;
    }
  </style>
</head>
<body>
  <div class="form-box">
    <h2>Edit Post</h2>
    <form action="update.php" method="POST" enctype="multipart/form-data">
      <input type="hidden" name="id" value="<?= htmlspecialchars($post['id']) ?>">
      <input type="text" name="title" value="<?= htmlspecialchars($post['title']) ?>" required>
      <textarea name="content" rows="6" required><?= htmlspecialchars($post['content']) ?></textarea>

      <?php if (!empty($post['image'])): ?>
        <p>Current Image:</p>
        <img src="uploads/<?= htmlspecialchars($post['image']) ?>" alt="Post image"><br>
      <?php endif; ?>

      <input type="file" name="image">
      <button type="submit">Update Post</button>
    </form>
  </div>
</body>
</html>
