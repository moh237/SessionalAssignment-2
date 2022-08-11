// API call
const xhr = new XMLHttpRequest()


let url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

xhr.open('GET', url)

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)

        let output = ''
        for (let i = 0; i < response.length; i++) {
            output += `
                <div style="width: 22%; margin: 0.5em;border:2px solid gray;text-align:center;">

                    <h5>${response[i].title}</h5>
                    <div class="fakeimg" style="height:100px; background-color: #aaa;width: 100%;padding: 40px;">Image</div>
                    <p style="color: gray;">${response[i].body}</p>
                </div>
            `
        }

        document.querySelector('#show').innerHTML = output
    }
}

xhr.send()