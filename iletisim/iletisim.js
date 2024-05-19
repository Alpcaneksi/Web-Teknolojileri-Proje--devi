function submitWithJS() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var genderValue = gender ? gender.value : null;

    if (name && surname && phone && email && message && genderValue) {
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);
        localStorage.setItem('gender', genderValue);
        alert("Form gönderimi JS ile yapılmıştır.");

        window.location.href = 'iletisimbasarili.html';
    } else {
        alert("Lütfen tüm alanları doldurun!");
    }
}
