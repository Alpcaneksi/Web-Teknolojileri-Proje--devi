<?php
// Kullanıcı adı ve şifre alanlarını kontrol et
if(isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı boş mu kontrol et
    if(empty($username)) {
        header("Location: login.php"); // Kullanıcı adı boşsa login sayfasına geri yönlendir
        exit;
    }

    // Şifre boş mu kontrol et
    if(empty($password)) {
        header("Location: login.php"); // Şifre boşsa login sayfasına geri yönlendir
        exit;
    }

    // Kullanıcı adı e-posta formatında mı kontrol et
    if(!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        header("Location: login.php"); // Kullanıcı adı e-posta formatında değilse login sayfasına geri yönlendir
        exit;
    }

    // Kullanıcı adı ve şifreyi kontrol et
    // Burada gerçek bir veritabanı bağlantısı ve kontrolü yapılmalıdır
    // Örnek olarak burada sadece öğrenci numarası ve şifrenin aynı olup olmadığı kontrol ediliyor
    $studentNumber = substr($username, 0, -14); // Kullanıcı adından öğrenci numarasını çıkar
    if($studentNumber === $password) {
        echo "Hoşgeldiniz $studentNumber"; // Giriş başarılı mesajını göster
    } else {
        header("Location: login.php"); // Kullanıcı adı ve şifre eşleşmiyorsa login sayfasına geri yönlendir
        exit;
    }
} else {
    header("Location: login.php"); // Kullanıcı adı ve şifre post edilmediyse login sayfasına geri yönlendir
    exit;
}
?>