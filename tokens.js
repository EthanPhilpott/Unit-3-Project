// Deals With Slider

imageValues = {
    1 : "coin.png",
    5 : "coins.png",
    25 : "get-money.png",
    125 : "piggy-bank.png",
    625 : "rich.png",
    3125 : "credit-card.png",
}

slider = document.getElementById("tokenAmt");
visual = document.getElementById("visual");
input = document.getElementById("tokenAmtText")

slider.oninput = function() {
    document.querySelectorAll('.visualImg').forEach(e => e.remove());
    input.value = this.value;

    value = this.value;

    keysList = Object.keys(imageValues).reverse();

    for (let i = 0; i < keysList.length; i++) {
        while (value - keysList[i] >= 0) {
            img = document.createElement("img");
            img.src = 'images/' + imageValues[keysList[i]];
            img.className = 'visualImg';
            visual.appendChild(img);
            value -= keysList[i];
        }
    }
}

// Deals with Input

input.oninput = function() {
    if (this.value > 3126) {
        slider.value = 3126;
        this.value = 3126;
    } else {
        slider.value = this.value;
    }
    
    
    document.querySelectorAll('.visualImg').forEach(e => e.remove());
    input.value = this.value;

    value = this.value;

    keysList = Object.keys(imageValues).reverse();

    for (let i = 0; i < keysList.length; i++) {
        while (value - keysList[i] >= 0) {
            img = document.createElement("img");
            img.src = 'images/' + imageValues[keysList[i]];
            img.className = 'visualImg';
            visual.appendChild(img);
            value -= keysList[i];
        }
    }
}