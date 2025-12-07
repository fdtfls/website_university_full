<?php
session_start();

$users = [
    'admin' => 'fuji2025',
    'guest' => 'sunset'
];

$error = '';
if ($_POST) {
    $login = $_POST['login'] ?? '';
    $pass = $_POST['pass'] ?? '';
    
    if (isset($users[$login]) && $users[$login] === $pass) {
        $_SESSION['access'] = true;
        $_SESSION['user'] = $login;
    } else {
        $error = 'Неправильно!';
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вход</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body { background: #000; color: #fff; font-family: 'Poppins', sans-serif; padding: 50px; }
        .form { max-width: 400px; margin: 0 auto; background: #111; padding: 40px; border-radius: 15px; }
        input { width: 100%; padding: 15px; margin: 10px 0; border-radius: 10px; border: none; background: #222; color: #fff; }
        .btn { background: #333; color: #fff; padding: 15px; border: none; border-radius: 10px; cursor: pointer; width: 100%; }
        .error { color: #ff4444; text-align: center; margin: 10px 0; }
        .success { text-align: center; line-height: 2; }
        .back { text-align: center; margin-top: 30px; }
        .back a { color: #888; text-decoration: none; }
    </style>
</head>
<body>

<div class="form">
    <?php if (!isset($_SESSION['access']) || $_SESSION['access'] !== true): ?>
        
        <h2>Вход в Gear Cage</h2>
        <?php if ($error): ?><div class="error"><?= $error ?></div><?php endif; ?>
        
        <form method="POST">
            <input type="text" name="login" placeholder="Логин" required>
            <input type="password" name="pass" placeholder="Пароль" required>
            <button type="submit" class="btn">Войти</button>
        </form>
        
        <p style="text-align:center; color:#666; font-size:12px; margin-top:20px;">
            admin / fuji2025
        </p>
        
    <?php else: ?>
        
        <h2>Привет, <?= $_SESSION['user'] ?>!</h2>
        <div class="success">
            <p>Sony A1</p>
            <p>Sony 24-70mm f/2.8</p>
            <p>Sony 85mm f/1.4</p>
            <p>DJI Mavic 3</p>
            <p>Peak Design Tripod</p>
        </div>
        
        <div class="back">
            <a href="index.html">← Назад</a>
        </div>
        
    <?php endif; ?>
</div>

</body>
</html>