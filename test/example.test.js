// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('testing user win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
        
    //Act 
    // Call the function you're testing and set the result to a const
    const win1 = didUserWin('rock', 'scissors');
    const win2 = didUserWin('scissors', 'paper');
    const win3 = didUserWin('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(win1, true);
    expect.equal(win2, true);
    expect.equal(win3, true);
});

test('testing user loss', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const loss1 = didUserWin('rock', 'paper');
    const loss2 = didUserWin('paper', 'scissors');
    const loss3 = didUserWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(loss1, true);
    expect.equal(loss2, true);
    expect.equal(loss3, true);
});

test('testing a draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const draw1 = didUserWin('rock', 'paper');
    const draw2 = didUserWin('paper', 'scissors');
    const draw3 = didUserWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(draw1, true);
    expect.equal(draw2, true);
    expect.equal(draw3, true);
});
