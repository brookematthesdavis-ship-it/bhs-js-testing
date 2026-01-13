/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 
python -m http.server

*/

function sleep_in(weekday, vacation) {
    return (!weekday || vacation);
}

function monkey_trouble(a_smile, b_smile) {
    return (a_smile && b_smile) || (!a_smile && !b_smile);
}

function string_times(str, num) {
    var answer = "";
    for (let i = 0; i < num; i++) {
        answer = answer + str;
    }
    return answer;
}

function front_times(str, n) {
    var answer = "";
    let sub = str.substring(0, 3);
    for (let i = 0; i < n; i++) {
        answer = answer + sub;
    }
    return answer;
}

function string_bits(str) {
    let answer = "";
    for (let i = 0; i < str.length; i = i + 2) {
        answer = answer + str.substring(i, i + 1);
    }
    return answer;
}

function caughtSpeeding(int, birthday) {

    if (birthday) {
        int = int - 5;
    }

    if (int <= 60) {
        return 0;
    }
    else if (int >= 81) {
        return 2;
    }
    else {
        return 1;
    }
}

function fizz_buzz(num) {
    let divisibleBy3 = (num % 3 == 0);
    let divisibleBy5 = (num % 5 == 0);
    if (divisibleBy3 && divisibleBy5) {
        return "FizzBuzz";
    }
    if (divisibleBy3) {
        return "Fizz";
    }
    if (divisibleBy5) {
        return "Buzz";
    }
    return num + "!";
}

function specialEleven(num) {
    if (num % 11 == 0 || num % 11 == 1) {
        return true;
    } else {
        return false;
    }
}

function withoutDoubles(roll1, roll2, noDoubles) {

    if (roll1 == 6 && roll2 == 6 && noDoubles) {
        return roll1 + 1;
    }
    if (roll1 == roll2 && noDoubles) {
        return roll1 + roll2 + 1;
    }
    if (roll1 == roll2 && !noDoubles) {
        return roll1 + roll2;
    } else {
        return roll1 + roll2;
    }
}

function left2(str) {
    ans = "";
    let sub = str.substring(0, 2);
    let sub2 = str.substring(2);
    ans = sub2 + sub;
    return ans;
}

function firstLast6(arr) {
    if (arr[0] == 6 || arr[arr.length - 1] == 6) {
        return true;
    } else {
        return false;
    }
}

function has23(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 2 || arr[i] == 3) {
            return true;
        }
    }
    return false;
}

function fix23(arr) {
    if (arr[0] == 2 && arr[1] == 3) {
        arr[1] = 0;
    }
    if (arr[1] == 2 && arr[2] == 3) {
        arr[2] = 0;
    }
    return arr;
}

function countYZ(str) {
    str = str.toUpperCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === 'Y' || str[i] === 'Z') && (i === str.length - 1 || str[i + 1] === " ")) {
            count = count + 1;
        }
    }
    return count;
}

function endOther(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length > str2.length) {
        return str1.substring(str1.length - str2.length) == str2;
    } else if (str1.length < str2.length) {
        return str2.substring(str2.length - str1.length) == str1
    } else {
        return str1 == str2;
    }
}

function starOut(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "*" && str[i - 1] != "*" && str[i + 1] != "*") {
            answer = answer + str[i];
        }
    }
    return answer;
}

function getSandwich(str) {
    let x = str.indexOf("bread");
    let y = str.lastIndexOf("bread");
    if (x == y) {
        return answer = "";
    } else {
        var answer = str.substring(x + 5, y);
    }
    return answer;
}

function canBalance(arr) {
    var sum1 = 0;
    var sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum2 += arr[j];
        }
        if (sum1 == sum2) {
            return true;
        } else {
            sum2 = 0;
        }
    }
    return false;
}

function countClumps(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] && arr[i] !== arr[i - 1]) {
            count++;
        }
    }
    return count;
}

function sameEnds(str) {
    let w = Math.floor(str.length / 2);

    for (let i = w; i > 0; i--) {
        let sub = str.substring(0, i);
        let sub2 = str.substring(str.length - i);
        if (sub == sub2) {
            return sub;
        }
    }
    return "";                                  

}

