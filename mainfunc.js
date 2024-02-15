
function gameStart(){ 
    hiddenAndViewById('startPart','displayPart');
    forDisplayLetterById('for_dis_letter');
    
    hiddenAndViewById('scorePart','displayPart');

    //score and life reset
    const scoreTextid = document.getElementById('scode_num');
    scoreTextid.innerText = 0;
    const setLife = document.getElementById('life_num');
    setLife.innerText = 4;

}

document.addEventListener('keyup',handleKeyboarKey);

