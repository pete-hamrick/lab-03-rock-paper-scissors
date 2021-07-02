// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('testing a draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const draw1 = didUserWin('rock', 'rock');
    const draw2 = didUserWin('paper', 'paper');
    const draw3 = didUserWin('scissors', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(draw1, expected);
    expect.equal(draw2, expected);
    expect.equal(draw3, expected);
});

test('testing user loss', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    //Act 
    // Call the function you're testing and set the result to a const
    const loss1 = didUserWin('rock', 'paper');
    const loss2 = didUserWin('paper', 'scissors');
    const loss3 = didUserWin('scissors', 'rock');
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(loss1, expected);
    expect.equal(loss2, expected);
    expect.equal(loss3, expected);
});

test('testing user win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';   
    //Act 
    // Call the function you're testing and set the result to a const
    const win1 = didUserWin('rock', 'scissors');
    const win2 = didUserWin('scissors', 'paper');
    const win3 = didUserWin('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(win1, expected);
    expect.equal(win2, expected);
    expect.equal(win3, expected);
});
