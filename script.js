console.log('hello'); 

// randomizer

const buttons = document.getElementsByClassName('clicker'); //Getting the buttons as an array
// console.log(buttons);  //CHECK

//run iterations for the amount of elements in out buttons array
for(let i=0; i < buttons.length; i++) {
    let j = Math.round(Math.random(i)); // assign either 0 or 1 based on the array index
    
    //Check weather number is "even" or "odd"
    if(j%2 == 0) { 
        buttons[i].style.backgroundColor = 'red';
        buttons[i].innerHTML = 'OO';
    
    } else {
        buttons[i].style.backgroundColor = 'green';
    }
}

//Second set of buttons
const otherButtons = document.getElementsByClassName('other-click-me');

for(let i=0; i < otherButtons.length; i++) {
    if(i%2 === 0) {
        otherButtons[i].style.backgroundColor = 'aquamarine';
        otherButtons[i].innerHTML = 'OOOO';
    } else {
        otherButtons[i].style.backgroundColor = 'teal';
    }
}

//Timed buttons

const timedButtons = document.getElementsByClassName('time-click');
let incr = 0;
let userValue = document.getElementById('userValue');

//Setting speed
function speed() {
    inputOfUser = true;
    let userSpeed = userValue.value;
    console.log(userSpeed);
    setInterval(setTime, userSpeed)
    
}


//Animation
function setTime() {
    incr = ((incr + 1) % 4);
    console.log(incr);

    for(i=0; i < timedButtons.length; i++) {
        let j = Math.abs((i%4) - incr);
    
        if(j == 0) {
            timedButtons[i].style.backgroundColor = 'cyan';
            timedButtons[i].style.color = 'black';
            timedButtons[i].innerHTML = 'O';
        } else if(j == 1) {
            timedButtons[i].style.backgroundColor = 'magenta';
            timedButtons[i].style.color = 'black';
            timedButtons[i].innerHTML = 'OO';
        } else if( j == 2) {
            timedButtons[i].style.backgroundColor = 'yellow';
            timedButtons[i].style.color = 'black';
            timedButtons[i].innerHTML = 'OOO';
        } 
        else {
            timedButtons[i].style.backgroundColor = 'black';
            timedButtons[i].style.color = 'white';
            timedButtons[i].innerHTML = 'OOOO';
        }
    }
   
}

