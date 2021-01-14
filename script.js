const myImage = new Image();
myImage.src = 'C:\Users\taeji\Documents\GitHub\image-animation\witcher.jpg';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 706;

ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);