function getCurrentCity() {
    const cidadeElement = document.querySelector('.cidade')
    if (cidadeElement) {
        const cidade = localStorage.getItem('cidade')
        if (cidade)
            cidadeElement.textContent = cidade
        else {
            fetch('https://ipapi.co/json')
            .then(response => response.json())
            .then(data => {
                const city = data.city || 'Paris'
                cidadeElement.textContent = city
                localStorage.setItem('cidade', city)
            }).catch(error => {
                cidadeElement.textContent = 'Paris'
                localStorage.setItem('cidade', 'Paris')
            })
        }
    }
}

getCurrentCity()