let score = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    lose : 0,
    tie :0,
   
}

updateScore();

let isAutoPlaying = false;
let intervalId;

function auto(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
        
            const move = chooseRandomMove();
        
            playerMove(move);
        },500);
        document.querySelector('.autoplay').innerHTML= 'Stop Autoplay';
        isAutoPlaying = true;
    
    }
    else{
        clearInterval(intervalId);
        document.querySelector('.autoplay').innerHTML= 'Autoplay';
        isAutoPlaying = false;

    }
} 

// function stopautoplay(){
//     document.querySelector('.autoplay').innerHTML= 'Autoplay';


// }
//     if(isAutoPlaying){
//         autoplay();
//     }
//     else{
//         stopautoplay();
//     }


// function startAutoPlay() {
//     autoPlayInterval = setInterval(() => {
//         const moves = ['Rock', 'Paper', 'Scissor'];
//         const randomMove = chooseRandomMove();
//         playerMove(randomMove);
//     }, 1000); 
//     document.querySelector('.autoplay').innerHTML= 'Stop';
// }

// function startAutoPlay() {
//     clearInterval(autoPlayInterval);

// }

function playerMove(move){
    let result = '';
    const computerMove = chooseRandomMove();


    if(move === 'Rock'){
        // chooseRandomMove();

        if(computerMove === 'Rock'){
            result = "Tie";
        }
        else if(computerMove === 'Paper'){
            result = "Lose";
        }
        else if(computerMove === 'Scissor'){
            result = "Win";
        }
    }
    else if(move === 'Paper'){
        // chooseRandomMove();

        if(computerMove === 'Rock'){
            result = "Win";
        }
        else if(computerMove === 'Paper'){
            result = "Tie";
        }
        else if(computerMove === 'Scissor'){
            result = "Lose";
        }
        
    }
    else if(move === 'Scissor'){
        // chooseRandomMove();

        if(computerMove === 'Rock'){
            result = 'Lose';
        }
        else if(computerMove === 'Paper'){
            result = 'Win';
        }
        else if(computerMove === 'Scissor'){
            result = 'Tie';
        }
    }

    if(result === 'Win'){
        score.win += 1;
        document.querySelector('.result-display').style.backgroundColor = 'green';

    }
    else if(result === 'Lose'){
        score.lose += 1;
        document.querySelector('.result-display').style.backgroundColor = 'red';
    }
    else if(result === 'Tie'){
        score.tie += 1;
        document.querySelector('.result-display').style.backgroundColor = 'orange';
        
    }

    localStorage.setItem('score',JSON.stringify(score));

    // document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves1').innerHTML = `  <div class="you">You </div>

            <div class="images-box">
                <img src="images/${move}.png" alt="${move}" class="move-icon">
            </div>
     
    `;
    document.querySelector('.js-moves2').innerHTML = ` <div class="you">Computer</div>
    
            <div class="images-box">
                <img src="images/${computerMove}.png" alt="${computerMove}" class="move-icon">
            </div>
     `;
    

     document.querySelector('.page').style.display = 'block';
     
    //  document.getElementById('check').checked = true;
    document.querySelector('.result-display').innerHTML = `${result}`;

    

    // document.querySelector('.js-result').innerHTML = `${result}`;
    // document.querySelector('.js-moves').innerHTML = `you ${move}. computer ${computerMove}.`;
    updateScore();

    // document.querySelector('.js-result').innerHTML = `Wins: ${score.win}. Losses: ${score.lose}. Tie: ${score.tie}`;
//     alert(`your move ${move}.computer move ${computerMove}. ${result}
// Wins: ${score.win}. Losses: ${score.lose}. Tie: ${score.tie}`);
    // const resetBtn = document.querySelector('.reset-btn');
    
}

    document.querySelector('.close svg').addEventListener('click', function() {
    document.querySelector('.page').style.display = 'none';
});
document.querySelector('.reset-btn ').addEventListener('click', function() {
//     document.querySelector('.reset-btn').style.backgroundColor = 'darkred';
//     document.querySelector('.reset-btn').style.color = 'white';
//     document.querySelector('.reset-btn').style.backgroundColor = 'white';
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.style.backgroundColor = 'red';
    resetBtn.style.color = 'white';

    setTimeout(() => {
        resetBtn.style.backgroundColor = 'white'; // Reset to the original background color
        resetBtn.style.color = 'darkblue'; // Reset to the original text color
    },200);
});
function updateScore(){

    document.querySelector('.js-score').innerHTML = `&nbsp;  Wins: ${score.win} &nbsp;        losses: ${score.lose}  &nbsp;         tie: ${score.tie}`;


    }





// let computerMove = '';

function chooseRandomMove(){
    let computerMove ='';
    let  randomNumber = Math.random();
    if(randomNumber >=0 && randomNumber <1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >=1/3 && randomNumber <2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >=2/3 && randomNumber <1){
        computerMove = 'Scissor';
    }
    return computerMove;
}