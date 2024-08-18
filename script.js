let score = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    lose : 0,
    tie :0,
   
}

updateScore();


function playerMove(move){
    let result = '';
    chooseRandomMove();


    if(move === 'Rock'){
        chooseRandomMove();

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
        chooseRandomMove();

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
        chooseRandomMove();

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

}

document.querySelector('.close svg').addEventListener('click', function() {
    document.querySelector('.page').style.display = 'none';
});
function updateScore(){

    document.querySelector('.js-score').innerHTML = `&nbsp;  Wins: ${score.win} &nbsp;        losses: ${score.lose}  &nbsp;         tie: ${score.tie}`;


    }



let computerMove = '';

function chooseRandomMove(){

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
    
}