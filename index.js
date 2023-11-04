const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', () => {
     let image = document.querySelectorAll('.image');
     document.querySelector('.slider').appendChild(image[0]);
})
btn2.addEventListener('click', () => {
     let image = document.querySelectorAll('.image');
     document.querySelector('.slider').prepend(image[image.length - 1]);
})