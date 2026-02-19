// 1. Setup the Duck
const pet = document.createElement('img');
pet.id = 'my-pet';

// Link your specific files
const idleGif = chrome.runtime.getURL("kaczuha1.gif");
const walkPng = chrome.runtime.getURL("kaczuha 2 1.png");

pet.src = idleGif;
document.body.appendChild(pet);

// 2. Position Variables
let posX = Math.random() * (window.innerWidth - 100);
let posY = Math.random() * (window.innerHeight - 100);
let targetX = posX;
let targetY = posY;
let isMoving = false;
let speed = 1.5;

// 3. Movement Logic
function update() {
    const distX = targetX - posX;
    const distY = targetY - posY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance > 5) {
        isMoving = true;
        posX += (distX / distance) * speed;
        posY += (distY / distance) * speed;
        
        // Swap to the walking image
        if (pet.src !== walkPng) pet.src = walkPng;
        
        // Flip duck to face the direction it's walking
        pet.style.transform = distX > 0 ? 'scaleX(1)' : 'scaleX(-1)';
    } else {
        isMoving = false;
        // Swap back to the animated idle GIF
        if (pet.src !== idleGif) pet.src = idleGif;
    }

    pet.style.left = posX + 'px';
    pet.style.top = posY + 'px';
    
    requestAnimationFrame(update);
}

// 4. Decision Maker (Changes target every 3-5 seconds)
setInterval(() => {
    if (Math.random() > 0.3) {
        targetX = Math.random() * (window.innerWidth - 100);
        targetY = Math.random() * (window.innerHeight - 100);
    }
}, 4000);

// 5. Interaction (React to Click)
pet.addEventListener('mousedown', () => {
    pet.style.filter = 'brightness(1.5)';
    setTimeout(() => pet.style.filter = 'none', 200);
});

update();
