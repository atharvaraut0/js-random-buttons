console.log('hello'); 

// randomizer

const buttons = document.getElementsByClassName('clicker');
// console.log(buttons);  //CHECK


for(let i=0; i < buttons.length; i++) {
    let j = Math.round(Math.random(i)); // assign a random number between 0 and 1
    
    if(j%2 == 0) {
        buttons[i].style.backgroundColor = 'red';
    
    } else {
        buttons[i].style.backgroundColor = 'green';
    }
}