

//LINKS 
// Iterate over these links and display their text and also 
// attatch their matching href
const navLinks = [
    {text: 'Home', href: './index.html'},
    {text: 'Learn More', href: './more.html'}
]

const liEl = document.querySelector('li')
// console.dir(liEl)

for(let i = 0; i < navLinks.length; i++){
    const aEl = document.createElement('a')
    aEl.href = navLinks[i].href
    aEl.textContent = navLinks[i].text
    aEl.classList.add('nav-link')
    // aEl.style.display('flex')


    liEl.appendChild(aEl)
}
