<?php
// Sabit kullanıcı adı ve şifre değerlerini belirleyin
$dogrukullaniciadi = "b231210020@edu.tr";
$dogrusifre = "kırmızıkalem1";

// Kullanıcı adı ve şifre alanlarını kontrol et
if (isset($_POST['kullaniciadi']) && isset($_POST['sifre'])) {
    $kullaniciadi = trim($_POST['kullaniciadi']); // 'kullaniciadı' değil 'kullaniciadi' olmalı
    $sifre = trim($_POST['sifre']);

    // Kullanıcı adı boş mu kontrol et
    if (empty($kullaniciadi)) {
        header("Location: girisyap.html"); // Kullanıcı adı boşsa login sayfasına geri yönlendir
        exit;
    }

    // Şifre boş mu kontrol et
    if (empty($sifre)) {
        header("Location: girisyap.html"); // Şifre boşsa login sayfasına geri yönlendir
        exit;
    }

    // Kullanıcı adı e-posta formatında mı kontrol et
    if (!filter_var($kullaniciadi, FILTER_VALIDATE_EMAIL)) {
        header("Location: girisyap.html"); // Kullanıcı adı e-posta formatında değilse login sayfasına geri yönlendir
        exit;
    }

    // Kullanıcı adı ve şifreyi sabit değerlerle karşılaştır
    if ($kullaniciadi === $dogrukullaniciadi && $sifre === $dogrusifre) {
        header("Location: girisbasarili.html"); // Giriş başarılı ise yönlendirilmek istenen sayfa
        exit;
    } else {
        header("Location: girisyap.html"); // Kullanıcı adı ve şifre eşleşmiyorsa login sayfasına geri yönlendir
        exit;
    }
} else {
    header("Location: girisyap.html"); // Kullanıcı adı ve şifre post edilmediyse login sayfasına geri yönlendir
    exit;
}
?>