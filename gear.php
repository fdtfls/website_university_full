<?php
$login = $_POST['login'] ?? '';
$pass  = $_POST['pass'] ?? '';
$ok    = false;
$error = '';

if ($_POST) {
    if (strlen($login) < 6) {
        $error = 'Логин должен быть не короче 6 символов!';
    } elseif (strlen($pass) < 6) {
        $error = 'Пароль должен быть не короче 6 символов!';
    }
    elseif ($login === 'fadutf_oels' && $pass === '123456789') {
        $ok = true;
    } else {
        $error = 'Неправильный логин или пароль!';
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Gear Cage</title>
    <style>
        body {background:#000;color:#fff;font-family:Arial;text-align:center;padding-top:100px;}
        input, button {padding:12px;font-size:16px;margin:8px;width:300px;border-radius:8px;}
        input {background:#222;border:none;color:#fff;}
        button {background:#333;color:#fff;border:none;cursor:pointer;}
        button:hover {background:#444;}
        .error {color:#ff5555;margin:20px;font-size:18px;}
    </style>
</head>
<body>

<?php if (!$ok): ?>
    <h2>Вход в Gear Cage</h2>

    <?php if ($error): ?>
        <div class="error"><?= $error ?></div>
    <?php endif; ?>

    <form method="post">
        <input type="text" name="login" placeholder="Логин (минимум 6 символов)" required><br>
        <input type="password" name="pass" placeholder="Пароль (минимум 6 символов)" required><br>
        <button type="submit">Войти</button>
    </form>

<?php else: ?>
    <h2>Привет, <?= htmlspecialchars($login) ?>!</h2>
    <p>Ты вошёл в секретный раздел</p>
    <hr>

    <br><br>
    <a href="" style="color:#888;">Выйти — просто обнови страницу (F5)</a>
<?php endif; ?>

</body>
</html>
