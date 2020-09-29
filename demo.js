const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = ['https://komvux.helsingborg.se/wp-content/uploads/sites/130/2017/05/slider-komvux-helsingborg-3-1800x350.jpg','https://komvux.helsingborg.se/wp-content/uploads/sites/130/2017/05/slider-komvux-helsingborg-2-1800x350.jpg','https://komvux.helsingborg.se/wp-content/uploads/sites/130/2017/05/slider-komvux-helsingborg-1-1800x350.jpg' ];

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);