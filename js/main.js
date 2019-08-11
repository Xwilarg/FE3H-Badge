class Character {
    constructor(name, houseName) {
        this.name = name;
        this.houseName = houseName;
    }
}

let allCharacters = new Map([
    ["Edelgard", new Character("Edelgard", "Black Eagles")],
    ["Hubert", new Character("Hubert", "Black Eagles")],
    ["Dorothea", new Character("Dorothea", "Black Eagles")],
    ["Ferdinand", new Character("Ferdinand", "Black Eagles")],
    ["Bernadetta", new Character("Bernadetta", "Black Eagles")],
    ["Caspar", new Character("Caspar", "Black Eagles")],
    ["Petra", new Character("Petra", "Black Eagles")],
    ["Linhardt", new Character("Linhardt", "Black Eagles")],
    ["Dimitri", new Character("Dimitri", "Blue Lions")],
    ["Dedue", new Character("Dedue", "Blue Lions")],
    ["Felix", new Character("Felix", "Blue Lions")],
    ["Mercedes", new Character("Mercedes", "Blue Lions")],
    ["Ashe", new Character("Ashe", "Blue Lions")],
    ["Annette", new Character("Annette", "Blue Lions")],
    ["Sylvain", new Character("Sylvain", "Blue Lions")],
    ["Ingrid", new Character("Ingrid", "Blue Lions")],
    ["Claude", new Character("Claude", "Golden Deer")],
    ["Hilda", new Character("Hilda", "Golden Deer")],
    ["Lorenz", new Character("Lorenz", "Golden Deer")],
    ["Raphael", new Character("Raphael", "Golden Deer")],
    ["Lysithea", new Character("Lysithea", "Golden Deer")],
    ["Ignatz", new Character("Ignatz", "Golden Deer")],
    ["Marianne", new Character("Marianne", "Golden Deer")],
    ["Leonie", new Character("Leonie", "Golden Deer")],
    ["Manuela", new Character("Manuela", "Others")],
    ["Hanneman", new Character("Hanneman", "Others")],
    ["Catherine", new Character("Catherine", "Others")],
    ["Alois", new Character("Alois", "Others")],
    ["Seteth", new Character("Seteth", "Others")],
    ["Flayn", new Character("Flayn", "Others")],
    ["Gilbert", new Character("Gilbert", "Others")],
    ["Shamir", new Character("Shamir", "Others")],
    ["Cyril", new Character("Cyril", "Others")],
    ["Rhea", new Character("Rhea", "Others")],
    ["Sothis", new Character("Sothis", "Others")]
])

function process() {
    let ctx = document.getElementById('canvas').getContext('2d');
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 1040, 650);
        let i = 0;
        allCharacters.forEach(function(e) {
            if (document.getElementById(e.name).checked) {
                loadImage(ctx, "img/" + e.name + ".png", (i % 8) * 130, Math.floor(i / 8) * 130);
                loadImage(ctx, "img/Mask.png", (i % 8) * 130, Math.floor(i / 8) * 130);
            } else {
                loadImage(ctx, "img/Empty.png", (i % 8) * 130, Math.floor(i / 8) * 130);
            }
            i++;
        });
    }
    img.src = "img/Map.png";
}

function loadImage(ctx, path, x, y) {
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, x, y);
    }
    img.src = path;
}