
function gameStart(){ 
    hiddenAndViewById('startPart','displayPart');
    forDisplayLetterById('for_dis_letter');
    
}

document.addEventListener('keyup',handleKeyboarKey);

function handleKeyboarKey(event){
    const preeKey = event.key;
    //console.log("press key",preeKey);

    const letterDisplay =document.getElementById('for_dis_letter');
    const currentShowLetter = letterDisplay.innerText;
    //console.log(currentShowLetter);

    if( currentShowLetter === preeKey){
        console.log('good job')

        const scoreTextElement = document.getElementById('scode_num');
        const scoreText = scoreTextElement.innerText ;
        const score = parseInt(scoreText);

        const presentScore = score + 1;
        scoreTextElement.innerText = presentScore ;
       
        forDisplayLetterById('for_dis_letter');

        const keyColor = document.getElementById(preeKey);
        keyColor.style.backgroundColor = null;

    }else{
        console.log('bad job')
        const lifeTextElement = document.getElementById('life_num');
        const lifeText = lifeTextElement.innerText;
        const lifeNumber = parseInt(lifeText);

        const presentLife = lifeNumber - 1 ;
        lifeTextElement.innerText = presentLife ;
    }
}
