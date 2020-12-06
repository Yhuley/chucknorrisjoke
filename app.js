document.getElementById('getJokes').addEventListener('click',getJokes)

function getJokes(event){
    const number = document.querySelector('input[type="number"]').value

    if (number > 0){
        const xhr = new XMLHttpRequest()

        xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

        xhr.onload = function(){
            if (this.status === 200){
                const response = JSON.parse(this.responseText)
                console.log(response)

                let output = ''

                if(response.type === 'success'){
                    response.value.forEach(function (joke) {
                        output +=`<li>${joke.joke}</li>`
                    })
                }else{
                    output += 'Something Went Wrong'
                }

                document.getElementById('jokes').innerHTML = output
            }
        }
        document.querySelector('input[type="number"]').value = ''

        xhr.send()
    }

    event.preventDefault()
}