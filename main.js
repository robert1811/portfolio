const pfp = document.getElementById('pfp')

fetch('https://api.github.com/users/robert1811')
    .then(res => res.json())
    .then(data => {
        const image = data['avatar_url']
        pfp.innerHTML = `
        <img id="avatar" src="${image}">
        `
    })
    .catch(err => {
        console.error(err)
        pfp.innerHTML = `<h2>An error has occurred</h2>`
    })

const menu = document.getElementById('mobile-menu')

const closeMenu = () => {
    menu.style.left = `-250px`
}

const showMenu = () => {
    menu.style.left = '0'
}