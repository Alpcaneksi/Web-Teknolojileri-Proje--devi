$(document).ready(function(){
    // API endpoint URL'si
    var apiUrl = "apikey 1XBwEBSwzuvEXGroogzPvr:6cX8GHHEQMoLgpO1VuGYyr";

    // API anahtarı
    var apiKey = "apikey 1XBwEBSwzuvEXGroogzPvr:6cX8GHHEQMoLgpO1VuGYyr";

    // Takım verilerini almak için GET isteği yapma fonksiyonu
    function getTeamData() {
        $.ajax({
            url: apiUrl,
            headers: {
                "Authorization": "Apikey " + apiKey
            },
            method: "GET",
            success: function(response) {
                // API'den gelen verilere göre sayfayı güncelleme
                // Örnek olarak, burada gelen verileri işleyebilir ve sayfada gösterebilirsiniz.
                console.log(response);
            },
            error: function(xhr, status, error) {
                console.error("Hata: ", error);
            }
        });
    }

    // Sayfa yüklendiğinde takım verilerini al
    getTeamData();
});