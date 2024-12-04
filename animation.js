document.getElementById('start-animation').addEventListener('click', () => {
    const box = document.getElementById('animated-box');
    let position = 0;
    const interval = setInterval(() => {
        if (position >= 300) {
            clearInterval(interval); 
        } else {
            position += 5;
            box.style.left = position + 'px';
        }
    }, 20);
});