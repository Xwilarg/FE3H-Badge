class Character {
    constructor(image, houseName) {
        this.image = image;
        this.houseName = houseName;
    }
}

let allCharacters = new Map([
    ["Bernadetta", new Character("img/Bernadetta.png", "Blue Lions")]
])

function process() {
    let ctx = document.getElementById('canvas').getContext('2d');
    loadImage(ctx, "img/Bernadetta.png", 0, 0);
    loadImage(ctx, "img/Mask.png", 0, 0);
}

function loadImage(ctx, path, x, y) {
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, x, y);
    }
    img.src = path;
}