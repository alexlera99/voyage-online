window.addEventListener('load', ()=> {
    let element = document.getElementById("name-profile")
    axios.get('http://localhost:8080/lastuser')
        .then(function (response) {
            console.log(response.data)
            element.append(response.data)
        })
        .catch(function (error) {
            console.log (error)
        });
})
