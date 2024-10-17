
/* Nim Trainer by [Victoria]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false;
var count = 0;

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
    let again = false;
    trainer = confirm(" trainer mode?");
    playNim();
    if (again == true) main();
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
    let count = 0;
    if (count < 21) playNim();
    if (count > 20) alert ("you loose");
    else playNim();
    if (count > 20) alert ("you win!");
}
/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
    count = prompt (" input a number 1-3");
    if (count < 1 || count < 3) alert("your imput is not valid");
    else (count+=turn);
    alert("Count is now " + count);
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
        if (count==17) turn=3;
        else if ( count==18);
        turn=2;
        else if (count >18) turn=1;
        else if (trainer == true) turn=4-count%4
        (count+=turn);
        alert( "I counted " + turn + " count is now" + count);
        else {
            turn == Math.floor(Math.random()*3)+1;  
}
}