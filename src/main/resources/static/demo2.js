document.getElementById('ocean').addEventListener('click', go)

/*function go() {
    fetch('http://localhost:8088/demo2')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}*/

function go() {
    fetch('http://localhost:8088/demo2')
        .then(function (response) {
            console.log(response)
            if (response.ok) {
                response.text().then((messages) => {
                    document.getElementById('demon').innerText = messages
                    console.log(messages)
                })
            } else {
                console.log('Загрузка обращений не удалась')
            }
        })
}