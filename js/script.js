//Genero il display con i 5 numeri
const gridNum = document.getElementsByTagName("section")[0];
const ans = fiveNum ();
const numsBox = [];
ans.forEach(num => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `<span>${num}</span>`
    gridNum.append(box);
    numsBox.push(box);
    
    
});
// Aspetto 30k milli secondi 
setTimeout( () => 
{
    toggle();
    setTimeout (play, 100);



}, 30000); // 30k di ms => 3s 

function play () {
    // contatore risposte giuste
    let counter = 0;
    // risposte del giocatore 
    const playerArr = [];
    while(playerArr.length < 5) {
        const input = prompt ("Mi dia un numero da 0 a 99 non ripetuto");
        const num = parseInt(input);
        if (!isNaN(num) && num >= 0 && num <=99 && !playerArr.includes(num)) {
            playerArr.push(num);
        }
        else {
            alert ("Un NUMERO da 0 a 99 non è difficile");
        }
    }

    for(let i=0 ; i < numsBox.length ; i++) {
        if (playerArr.includes(ans[i])) {
            numsBox[i].classList.add("correct");
            counter ++;
        }
        else {
            numsBox[i].classList.add("missed");
        }
    }
    toggle();
    //Scrivo la risposta nel dom
    document.querySelector("main>div").innerHTML = `<span>Ti sei ricordato di ${counter} numeri</span> ${counter === 5 ? "<h2>Bravo li hai ricordati tutti! <h2>" : ""}`;


    
    
}





// genero l'array di 5 nuimeri diversi 
function fiveNum() {
    const arr = [];

    while(arr.length < 5) {
        
        const num = getRndInteger(0, 99);
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    return arr;
}
// get Random Integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Toggle del display numerico
function toggle() {
    gridNum.classList.toggle("none");
}
