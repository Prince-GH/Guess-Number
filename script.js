let min = 1,max=100;
let guess = Math.floor(Math.random()*(max-min+1))+min;

//,Take all the event from the HTML
const form = document.querySelector('form');
const submit = document.querySelector('#submit');
const  numberGuess = document.querySelector('#numberGuess');
const note = document.querySelector('.note');
const preGuess = document.querySelector('#preGuess');
const remGuess = document.querySelector('#remGuess');
const cpreGuess = document.querySelector('.preGuess');
const cremGuess = document.querySelector('.remGuess');
const result = document.querySelector('.result');

let remGUESS=8;
let playGame = true;
const reStart = document.createElement('i');

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        let GUESS = parseInt(numberGuess.value);
        ValidateGuess(GUESS);
    })
}

function ValidateGuess (GUESS){
    if(isNaN(GUESS) || GUESS=='' || GUESS>=101 || GUESS<=0){
      note.innerHTML='INVALID';
      numberGuess.value='';
    } else{
        checkRemchance(remGUESS,GUESS);
    }
}

function checkRemchance(remGUESS,GUESS){
    if(remGUESS===0){
        numberGuess.value='';
        form.style.display='none';
        cpreGuess.style.display='none';
        cremGuess.style.display='none';
        let text =`You lose the game!! 😕 NUMBER WAS ${guess}`;
        note.innerHTML=text;
        endGame();
    }else{
        numberGuess.value='';
        note.innerHTML='';
        CheckGuess(GUESS);
        updateRemGuess();
    }
}

function CheckGuess (GUESS){
    if(GUESS===guess){
        form.style.display='none';
        let text =`You win the game!! 🏆 NUMBER WAS ${guess}`;
        note.innerHTML=text;
        endGame();
        newGame();
    }else{
        if(GUESS>guess){
            let text = `Your GUESS 🛫 is too BIG!! 🐤`;
            note.innerHTML=text;
        }else if(GUESS<guess){
            let text = `Your GUESS 🛬 is too SMALL 🐣`;
            note.innerHTML=text;
        }
        updatePreGuess(GUESS);
    }
}

function updatePreGuess (GUESS){
    preGuess.innerHTML +=`${GUESS} `;
}

function updateRemGuess (){
    remGUESS--;
    remGuess.innerHTML=remGUESS;
}

function endGame(){
    playGame=false;
    reStart.classList.add('reStart');
    reStart.innerHTML=`TRY AGAIN`;
    result.appendChild(reStart);
    newGame();
}

function newGame(){
    reStart.addEventListener('click',function (e){
    guess = Math.floor(Math.random()*(max-min+1))+min;
    remGUESS=8;
    playGame=true;
    reStart.remove();
    form.style.display='flex';
    preGuess.innerHTML='';
    remGuess.innerHTML=remGUESS;
    cpreGuess.style.display='flex';
    cremGuess.style.display='block';
    note.innerHTML='';
    })
}
