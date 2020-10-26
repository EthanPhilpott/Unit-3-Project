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
money = document.getElementById("money")
tokens = document.getElementById("checkout-tokens")

slider.oninput = function() {
    document.querySelectorAll('.visualImg').forEach(e => e.remove());
    input.value = this.value;
    tokens.innerHTML = this.value
    money.innerHTML = this.value * .25 + '$'; 

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

// Deals with Input for the Slider

input.oninput = function() {
    if (this.value > 15624) {
        slider.value = 15624;
        this.value = 15624;
        tokens.innerHTML = 15624
        money.innerHTML = 15624 * .25 + '$'; 
    } else {
        slider.value = this.value;
        tokens.innerHTML = this.value
        money.innerHTML = this.value * .25 + '$'; 
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

// switches the slides in the slideshow form

const form = document.getElementsByClassName("buy-form")[0];
const navButtons = document.getElementsByName("page-id")
const nextButtons = document.getElementsByClassName("next")
let checkPrev = [true, false, false, false, false]
let slidei = 0;

slides = [
    document.getElementsByClassName("user-info")[0],
    document.getElementsByClassName("pay-info")[0],
    document.getElementsByClassName("legal")[0],
    document.getElementsByClassName("checkout")[0],
    document.getElementsByClassName("comments")[0]
]

function Next () {
    let list = [];
    let checked = [];

    for (let i = 0; i < navButtons.length; i++) {
        list.push(navButtons[i].value);
        checked.push(navButtons[i].checked);
    }

    if (checkPrev.indexOf(true) == checked.indexOf(true)) {
        checked = checked.concat(checked.splice(0, 4));
        for (let j = 0; j < checked.length; j++) {
            navButtons[j].checked = checked[j]
        }
    }

    slidei = list.indexOf('on');

    navButtons[slidei].value = 'off'
    
    let slide = slides[slidei];
    
    opacity = 100
    let id = setInterval(function () {
        if (opacity == 0) {
            clearInterval(id);
        } else {
            opacity--;
            
            slide.style.opacity = opacity + '%';
        }
    }, 2.5);
    

    setTimeout(function () {
        height = 27.5;
        let id = setInterval(function () {
            if (height == 0) {
                clearInterval(id);
            } else {
                height -= .5;
                
                form.style.height = height + 'vw'
            }
        }, 6);
    }, 500)

    setTimeout(function () {
        slide.style.visibility = 'hidden'
        
        slidei = checked.indexOf(true);
        slide = slides[slidei];
        navButtons[slidei].value = 'on'
        checkPrev = checked
        
        slide.style.visibility = 'visible'
        slide.style.opacity = 0;
        

        setTimeout (function () {
            height = 0;
            
            let id = setInterval(function () {
            if (height == 27.5) {
                clearInterval(id);
            } else {
                height += .5;
                
                form.style.height = height + 'vw'
            }
        }, 6)
        }, 750);

        setTimeout (function () {
            opacity = 0
            let id = setInterval(function () {
                if (opacity == 100) {
                    clearInterval(id);
                } else {
                    opacity++;
                    
                    slide.style.opacity = opacity + '%';
                }
            }, 2.5)
        }, 750+500)
    }, 750)

    checkPrev = checked
}