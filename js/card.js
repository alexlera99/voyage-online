$(window).on('load', () => {
    axios.get('http://localhost:4443/images')
        .then(function (response) {
            var i, j, k
            for (i = 0; i < response.data.length; i += 2){
                $('#containeraux').append(
                    `<div id="row${i}" class="row"></div>`
                )
                for (j = 0, k = i; j < 2 && k < response.data.length; j++, k++) {
                    $("#row" + `${i}`).append(
                        `<div id="col${k}" class="col-md-6 col-xs-11">
                            <div class="card" style="width: auto;">
                                <img class="card-img-top" src=${response.data[k].Image} alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${response.data[k].Title}</h5>
                                    <p class="card-text">${response.data[k].Text}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${response.data[k].Price}</li>
                                </ul>
                            </div>
                        </div>`
                    )
                }
            }
            if ( response.data.length % 2 != 0){
                $("#row" + `${i-2}`).append(
                    `<div id="col${k}" class="col">
                            <div class="card" style="width: auto;">
                                <img class="card-img-top" src="https://images2.bovpg.net/wsdv/media/1/1/5/7/2/157261.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">TENERIFE / COSTA ADEJE</h5>
                                    <p class="card-text">Escápate a Costa Adeje, un lugar idílico en la costa sur de Tenerife donde el descanso y la diversión están asegurados</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Desde 122€ / pers</li>
                                </ul>
                            </div>
                        </div>`
                )
            }
        })
        .catch(function (error) {
            console.log (error)
        });
});