//hidden and show function 
    function hiddenAndViewById(start,end){
        const hiddenSection = document.getElementById(start);
        hiddenSection.classList.add('hidden');
        const viewSection = document.getElementById(end);
        viewSection.classList.remove('hidden');
    }

//random letter && display function
function forDisplayLetterById(disElementId){
    const alphaString = 'abscefghijkmnopqrstuvwxyz/';
    const alphaArray = alphaString.split('');
    const randomNumber = Math.round(Math.random()*26);
    const alphabet = alphaArray[randomNumber];
//display
    const letterDisplay =document.getElementById(disElementId);
    letterDisplay.innerText = alphabet;

    const keyColor = document.getElementById(alphabet);
    keyColor.style.backgroundColor = 'orange';
}
//score & life and continue game & bg remove
function handleKeyboarKey(event){
    const preeKey = event.key;
    //console.log("press key",preeKey);

    const letterDisplay =document.getElementById('for_dis_letter');
    const currentShowLetter = letterDisplay.innerText;

    if(preeKey === 'Escape'){
        gameOver();
    }
    if( currentShowLetter === preeKey){

        const scoreTextElement = document.getElementById('scode_num');
        const scoreText = scoreTextElement.innerText ;
        const score = parseInt(scoreText);

        var presentScore = score + 1;
        scoreTextElement.innerText = presentScore ;
       
        forDisplayLetterById('for_dis_letter');

        const keyColor = document.getElementById(preeKey);
        keyColor.style.backgroundColor = null;

    }else{
        const lifeTextElement = document.getElementById('life_num');
        const lifeText = lifeTextElement.innerText;
        const lifeNumber = parseInt(lifeText);

        const presentLife = lifeNumber - 1 ;
        
        if(presentLife === 0){
            gameOver(); 
            
        }
        lifeTextElement.innerText = presentLife ;
    }
}

function gameOver(){
    hiddenAndViewById('displayPart','scorePart');
    const finalSocreElemet = document.getElementById('final_score');
    const getscoreElement = document.getElementById('scode_num');
    const getScore = getscoreElement.innerText;
    finalSocreElemet.innerText = getScore;

    //remove background current elemet
    const lastkeyElement = document.getElementById('for_dis_letter');
    const lastkeyLetter = lastkeyElement.innerText;

    const lastKeyboardElemnt = document.getElementById(lastkeyLetter);
    lastKeyboardElemnt.style.backgroundColor = null;

    

}


