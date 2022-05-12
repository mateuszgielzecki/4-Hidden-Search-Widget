const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    console.log('ss');
    search.classList.toggle('active')
    input.focus();
})