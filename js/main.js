class Character {
    constructor(houseName) {
        this.houseName = houseName;
    }
}

let allCharacters = new Map([
    ["Edelgard", new Character("Black Eagles")],
    ["Hubert", new Character("Black Eagles")],
    ["Dorothea", new Character("Black Eagles")],
    ["Ferdinand", new Character("Black Eagles")],
    ["Bernadetta", new Character("Black Eagles")],
    ["Caspar", new Character("Black Eagles")],
    ["Petra", new Character("Black Eagles")],
    ["Linhardt", new Character("Black Eagles")],
    ["Dimitri", new Character("Blue Lions")],
    ["Dedue", new Character("Blue Lions")],
    ["Felix", new Character("Blue Lions")],
    ["Mercedes", new Character("Blue Lions")],
    ["Ashe", new Character("Blue Lions")],
    ["Annette", new Character("Blue Lions")],
    ["Sylvain", new Character("Blue Lions")],
    ["Ingrid", new Character("Blue Lions")],
    ["Claude", new Character("Golden Deer")],
    ["Hilda", new Character("Golden Deer")],
    ["Lorenz", new Character("Golden Deer")],
    ["Raphael", new Character("Golden Deer")],
    ["Lysethia", new Character("Golden Deer")],
    ["Ignatz", new Character("Golden Deer")],
    ["Marianne", new Character("Golden Deer")],
    ["Leonie", new Character("Golden Deer")],
    ["Manuela", new Character("Others")],
    ["Hanneman", new Character("Others")],
    ["Catherine", new Character("Others")],
    ["Alois", new Character("Others")],
    ["Seteth", new Character("Others")],
    ["Flayn", new Character("Others")],
    ["Gilbert", new Character("Others")],
    ["Shamir", new Character("Others")],
    ["Cyril", new Character("Others")],
    ["Rhea", new Character("Others")],
    ["Sothis", new Character("Others")]
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