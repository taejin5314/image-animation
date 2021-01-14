const myImage = new Image();
myImage.src = 'witcher.jpg';


myImage.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 700;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
}, false)