document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: '#app',
        data: {
            name: '',
            surname: '',
            phone: '',
            email: '',
            message: '',
           
        },
        methods: {
            submitForm() {
                // Form verilerini işleyin veya bir API'ye gönderin
                if (this.name && this.surname && this.phone && this.email && this.message) {
                    alert("Form başarıyla dolduruldu! (Vue.js)")
                   
                    this.resetForm();
                } else {
                     alert('Lütfen tüm alanları doldurun! (Vue.js)') ;
                   
                }
            },
            resetForm() {
                this.name = '';
                this.surname = '';
                this.phone = '';
                this.email = '';
                this.message = '';
                
            }
        }
    });
});