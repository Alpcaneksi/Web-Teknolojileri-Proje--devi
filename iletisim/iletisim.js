new Vue({
    el: '#app',
    data: {
        name: '',
        surname:'',
        phone:'',
        email: '',
        message: '',
        successMessage: '',
        errorMessage: ''
    },
    methods: {
        submitForm() {
            // Formun sunucuya gönderilmesi işlemleri burada yapılır
            // Örnek olarak, basit bir mesaj gösteriyoruz
            this.successMessage = 'Form başarıyla gönderildi!';
            // Formu sıfırla
            this.resetForm();
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
});