<?php
session_start();
session_destroy();
?>

<!DOCTYPE html>
<html>
<head>
  <title>Logged Out</title>
  <style>
    body {
      background: #ffe4ec;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .logout-box {
      background: white;
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 0 20px rgba(255, 192, 203, 0.5);
    }

    h2 {
      color: #d63384;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: #d63384;
      color: white;
      text-decoration: none;
      border-radius: 8px;
    }

    a:hover {
      background: #c2185b;
    }
  </style>
</head>
<body>
  <div class="logout-box">
    <h2>You have been logged out.</h2>
    <a href="index.php">Back to Main Page</a>
  </div>
</body>
</html>
