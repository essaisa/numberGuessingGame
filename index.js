const minNum = 1;
const maxNum = 100;
// random =  number between 0,1 so * range (add + 1 so it include maxNum) add + minNum outside of bracket if minNum is not 1
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
// keep this empty as it will be a window prompt
let guess;
let running = true;

while(running){


    guess = window.prompt(`Guess number between ${minNum} and ${maxNum}.`);
    // guess = string, typecast -> number 
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a number, ${guess} is not a number.`)
    }

    else if(guess > maxNum || guess < minNum){
        window.alert(`Please enter a number in range, ${guess} is outside of range.`);
    }

    else{
        attempts++;
        if (guess < answer){
            window.alert("TOO LOW! TRY AGAIN")
        }

        else if (guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }

        else{
            window.alert(`CORRECT! ${answer}! Took you ${attempts} attempts.`);
            running = false;

            

        }
    }
}