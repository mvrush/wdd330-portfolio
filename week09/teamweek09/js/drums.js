function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops if unprogramed key is pressed
    audio.currentTime = 0; //stops current audio track when new button is pressed.
    audio.play();
    key.classList.add('playing'); //adds playing class to elements for css
  
    
  }
  
  //trying to get keys to move each time key pressed
  /*function moveItem(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let location = key.getBoundingClientRect();
    console.log(location);
    let newY = 10;
    console.log(newY);
  
    key.style.transform = `translateY(${newY}px)`;
  }*/
  
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  window.addEventListener('keydown', playSound);
  let amount = 10;
  let initial = 0;
  let count = 0;
  window.addEventListener('keyup', (e) => {
    let geez = '';
    if(count == 0) {
      const loc = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      let data = loc.getBoundingClientRect();
      console.log(data)
      geez = data.y;
  
    }
    count++;
    initial += amount;
    if(count < 10) {
      const test = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      test.style.transform = `translateY(${initial}px)`;
    }else {
      const test = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      test.style.transform = `translateY(0px)`;
      count = 0;
    }
  });