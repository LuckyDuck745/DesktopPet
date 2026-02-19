// 1. Create the Pet Element
const pet = document.createElement('div');
pet.id = 'Dale';
pet.innerHTML = ' ( •_•) '; // You can replace this with an <img> tag later
document.body.appendChild(pet);

// 2. Initial Variables
let posX = window.innerWidth / 2;
let posY = window.innerHeight - 100;
let targetX = posX;
let targetY = posY;
let speed = 2;

// 3. The "Brain" (Decides what to do every 3 seconds)
setInterval(() => {
    const chance = Math.random();
    
    if (chance > 0.5) {
        // Pick a random spot on the screen to walk to
        targetX = Math.random() * (window.innerWidth - 50);
        targetY = Math.random() * (window.innerHeight - 50);
        pet.innerHTML = ' ( ﾟДﾟ) '; // "Walking" face
    } else {
        pet.innerHTML = ' ( -_-)zZ '; // "Sleeping" face
    }
}, 3000);

// 4. The "Movement" (Runs 60 times per second for smooth sliding)
function update() {
    // Move X
    if (Math.abs(posX - targetX) > speed) {
        posX += posX < targetX ? speed : -speed;
    }
    // Move Y
    if (Math.abs(posY - targetY) > speed) {
        posY += posY < targetY ? speed : -speed;
    }

    pet.style.left = posX + 'px';
    pet.style.top = posY + 'px';
    
    requestAnimationFrame(update);
}

update(); // Start the loop
