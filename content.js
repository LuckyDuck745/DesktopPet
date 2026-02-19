// 5. Interaction Logic (React to Clicks)
pet.addEventListener('mousedown', () => {
    // Change face when poked
    pet.innerHTML = ' ( >_<) '; 
    pet.style.color = '#ff5555'; // Turn red for a second
    
    // Reset back to normal after 1 second
    setTimeout(() => {
        pet.innerHTML = ' ( •_•) ';
        pet.style.color = 'white';
    }, 1000);
});

// 6. Make it Draggable (Bonus Logic)
pet.onmousedown = function(event) {
  // Prevent the pet from moving on its own while you hold it
  speed = 0;

  function moveAt(pageX, pageY) {
    posX = pageX - pet.offsetWidth / 2;
    posY = pageY - pet.offsetHeight / 2;
    pet.style.left = posX + 'px';
    pet.style.top = posY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  pet.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    pet.onmouseup = null;
    speed = 2; // Give it its movement back
    targetX = posX; // Reset its destination to where you dropped it
    targetY = posY;
  };
};

pet.ondragstart = function() {
  return false;
};
