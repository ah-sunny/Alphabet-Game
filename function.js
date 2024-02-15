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

