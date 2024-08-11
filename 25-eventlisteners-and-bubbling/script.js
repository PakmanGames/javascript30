const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    // e.stopPropagation(); // stops the event from bubbling up
    console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true,
}));

button.addEventListener('click', () => {
    console.log('Clicked!');
}, {
    once: true,
});