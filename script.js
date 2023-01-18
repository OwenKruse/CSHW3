const element = document.querySelector('.pop-out');

element.addEventListener('interactive_painting-frame', () => {
element.classList.add('pop-out');
console.log('interactive_painting-frame');
});
