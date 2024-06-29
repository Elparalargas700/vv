let header = document.getElementById('Header');

window.addEventListener('scroll', ()=> {

let scroll = window.screenY

if (scroll>10) {
    header.style.backgroundColor = '#121212'
}

else {
    header.style.backgroundColor = 'trasparent'
}

})