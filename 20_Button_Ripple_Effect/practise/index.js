const button = document.querySelector('.btn');

button.addEventListener('click', (e)=>{
    const x = e.pageX;
    const y = e.pageY;

    const buttonTop = y - e.target.offsetTop;
    const buttonLeft = x - e.target.offsetLeft;

    const span = document.createElement('span');
    span.classList.add('circle');
    span.style.top = buttonTop + 'px';
    span.style.left = buttonLeft + 'px';
    button.appendChild(span);
})