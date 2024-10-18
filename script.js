
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
    trainer = confirm("trainer mode?");
    playNim();
    again = confirm("play again?");
    if (again == true) main();
}

/** 
 * playNim 

 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
count = 0;
   while (count < 21){
        userTurn();
        if (count > 20) alert ("you loose");
        else{
            cpuTurn();
            if (count > 20) alert ("you win!");
    
        }
    } 
}
/** 
* userTurn  
* User enters a turn. Validation against cheating handled by recursion.
* @param none 
* @return none
*/
function userTurn(){
   let turn = prompt ("Pick a number 1-3");
   turn=parseInt(turn);
   if (turn<1 || turn>3){
    alert("Your imput is invalid");
    userTurn();
   }
    else{
        count+= turn;
        alert("count is now " + count);
    }
}
/** 
* cpuTurn 
* Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
* @param none 
* @return none
*/
function cpuTurn(){
    turn = 0;
    if (count == 17) turn = 3;
    else if (count == 18) turn = 2;
    else if (count >18) turn = 2;
    else if (trainer == true) turn = 4- count% 4;
    else turn = Math.floor(Math.random()*3)+1;
    count+= turn;
alert(" I counted " + turn + ", count is now " + count + " .");
}