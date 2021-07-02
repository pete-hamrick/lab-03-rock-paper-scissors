export function didUserWin(userChoice, computerChoice) {
    
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'loss';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'loss';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'loss';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'win';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';
    }
    // player
    // rock, paper, scissors
    // 
    // computer 
    // rock paper scissors
    // 
    // if the userThrow is the same as the computerThrow
    //   returnows rock
    //    if computerThrow is scissors return 'win'
    // if the user throws paper
    //    if computerThrow is rock return 'win'
    // if the user throw scissors
    //    if computerThrow is paper return 'win'
    // return 'lose'    
    
}