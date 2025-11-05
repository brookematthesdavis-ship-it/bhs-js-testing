/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 
python -m http.server

*/

function sleep_in(weekday,vacation){
    return (!weekday || vacation);
    }
    
function monkey_trouble(a_smile, b_smile){
    return (a_smile && b_smile) || (!a_smile && !b_smile);
    }

function string_times(str,num){
    var answer = "";
    for(let i = 0; i < num; i++){
        answer = answer + str;
        }
    return answer;
    }

function front_times(str,n){
    var answer = "";
    let sub = str.substring(0,3);
    for(let i = 0; i < n; i++){
    answer = answer + sub;
    }
    return answer;
}

function string_bits(str){
let answer = "";
for (let i = 0; i < str.length; i = i+2){
    answer = answer + str.substring(i, i+1);
    }
return answer;
}

function caughtSpeeding(int,birthday){

    if (birthday){
        int = int - 5;
    }

    if (int <= 60){
        return 0;
        }
    else if (int >= 81){
        return 2;
    }
    else {
        return 1;
    }
}

function fizz_buzz(num){
let divisibleBy3 = (num % 3 == 0);
let divisibleBy5 = (num % 5 == 0);
   if (divisibleBy3 && divisibleBy5){
    return "FizzBuzz";
   }
    if (divisibleBy3){
        return "Fizz";
    }
    if (divisibleBy5){
        return "Buzz";
    }
return num + "!";
}

function specialEleven(num){
if (num % 11 == 0 || num % 11 == 1){
    return true;
}else{
    return false;
}
}

function withoutDoubles(roll1, roll2, noDoubles){

    if (roll1 == 6 && roll2 == 6 && noDoubles){
        return roll1 + 1;
    }
    if (roll1 == roll2 && noDoubles){
        return roll1 + roll2 + 1;
}
if (roll1 == roll2 && !noDoubles){
    return roll1 + roll2;
}else{
    return roll1 + roll2;
}
}

function left2(str){
ans = "";
let sub = str.substring(0,2);
let sub2 = str.substring(2);
ans = sub2 + sub;
return ans;
}
