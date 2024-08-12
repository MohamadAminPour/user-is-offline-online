let box = document.querySelector('.box')
let iconWifi = document.querySelector('#iconWifi')
let title = document.querySelector('.title')
let subTitle = document.querySelector('.subTitle')
let CloseBtn = document.querySelector('.bx-x')

window.addEventListener('load', () => {

    async function ajaxRequest() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log('Response : ', res.status);

                if (res.status < 300 || res.status === 200) {
                    box.classList.add('show')
                    iconWifi.setAttribute('class', 'bx bx-wifi')
                    iconWifi.style.backgroundColor = '#16c364'

                    title.innerHTML = 'You are online now !'
                    subTitle.innerHTML = 'your connection is secured .'

                    setTimeout(() => {
                        box.classList.remove('show')
                        box.classList.add('hide')
                    }, 5000);

                    CloseBtn.addEventListener('click', () => {
                        box.classList.remove('show')
                        box.classList.add('hide')
                    })
                }
                else {
                    offline()
                }

            })
            .catch(err => {
                console.log('Error , connection is off');
                offline()
            })
    }


    function offline() {
        box.classList.add('show')

        iconWifi.setAttribute('class', 'bx bx-wifi-off')
        iconWifi.style.backgroundColor = 'gray'
        title.innerHTML = 'You are offline !'
        subTitle.innerHTML = 'you not connected to internet .'

        CloseBtn.addEventListener('click', () => {
            box.classList.remove('show')
            box.classList.add('hide')
        })
    }

    setInterval(() => {
        ajaxRequest()
    }, 100);
})