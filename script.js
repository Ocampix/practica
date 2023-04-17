const yesBtn = document.querySelector('#acepto');

yesBtn.addEventListener('click',function () {
    alert('Siempre supe que aceptarias');
});

const noBtn = document.querySelector('#no');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    no.style.setProperty('top',randomY+'%');
    no.style.setProperty('left',randomX+'%');
    no.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})