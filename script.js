const btn = document.getElementById('like-btn')
const btnPath = btn.childNodes[1]
let liked = false

btn.addEventListener('click', () => {
    if (!liked) {
        btnPath.setAttribute('stroke', "#ffffff")
        btnPath.setAttribute('fill', "#ffffff")
        liked = true
    } else {
        btnPath.setAttribute('stroke', "#33363F")
        btnPath.setAttribute('fill', 'none')
        liked = false
    }
})