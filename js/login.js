var user = {
    Username : "",
    Password : ""
}

window.addEventListener('load', ()=>{
    const form = document.querySelector('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let myform = document.forms[0]
        user.Username = myform["username"].value
        user.Password = myform["password"].value
        let data = JSON.stringify(user)
        axios.post('http://localhost:8080/login', data)
            .then(function (response) {
                if (response.data == "Login") {
                    window.location.replace("/voyageonline/index2.html");
                }
                else {
                    alert("Wrong credentials")
                }
            })
            .catch(function (error) {
                console.log (error)
            });
    });
});
