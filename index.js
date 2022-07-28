const texthide = document.getElementById('photos');
const textshow = document.getElementById('img-heading');

texthide.addEventListener('click', () =>{
    textshow.classList.toggle('show');
})