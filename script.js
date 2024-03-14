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
    
    } else {
        buttons[i].style.backgroundColor = 'green';
    }
}