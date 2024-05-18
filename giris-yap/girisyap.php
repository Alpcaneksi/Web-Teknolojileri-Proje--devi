<?php
// Form verilerini işleyen kodu en üstte dahil edin veya doğrudan buraya yazın
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sabit kullanıcı adı ve şifre değerlerini belirleyin
    $dogrukullaniciadi = "b231210020@edu.tr";
    $dogrusifre = "kirmizikalem1";

    // Kullanıcı adı ve şifre alanlarını kontrol et
    $kullaniciadi = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_EMAIL);
    $sifre = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

    // Kullanıcı adı boş mu kontrol et
    if (empty($kullaniciadi)) {
        header("Location: girisyap.html?error=emptyusername"); // Kullanıcı adı boşsa login sayfasına geri yönlendir
        exit;
    }

    // Şifre boş mu kontrol et
    if (empty($sifre)) {
        header("Location: girisyap.html?error=emptypassword"); // Şifre boşsa login sayfasına geri yönlendir
        exit;
    }

    // Kullanıcı adı e-posta formatında mı kontrol et
    if (!filter_var($kullaniciadi, FILTER_VALIDATE_EMAIL)) {
        header("Location: girisyap.html?error=invalidemail"); // Kullanıcı adı e-posta formatında değilse login sayfasına geri yönlendir
        exit;
    }

    // Kullanıcı adı ve şifreyi sabit değerlerle karşılaştır
    if ($kullaniciadi === $dogrukullaniciadi && $sifre === $dogrusifre) {
        header("Location: girisbasarili.html"); // Giriş başarılı ise yönlendirilmek istenen sayfa
        exit;
    } else {
        header("Location: girisyap.html?error=invalidcredentials"); // Kullanıcı adı ve şifre eşleşmiyorsa login sayfasına geri yönlendir
        exit;
    }
} else {
    header("Location: girisyap.html"); // POST verisi yoksa login sayfasına geri yönlendir
    exit;
}
?>
