document.getElementById('ocean').addEventListener('click', go)

function go() {
    fetch('https://quiet-peak-67801.herokuapp.com/demo2')
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