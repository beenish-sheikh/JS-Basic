// how to convert string to number
let a = "23";

let b = parseInt(a);

let a1 = "20.5";

let b1 = parseFloat(a1);

let c = b1.toString();

function check() {
    const costOfApple = parseFloat(document.querySelector("input").value);
    alert(costOfApple);
    console.log(typeof costOfApple);
}

let coins = 0;

function addCoins() {
    // coins = coins + 1;
    // coins += 1;
    // coins++;
    // document.querySelector("p").innerHTML = coins++;
    document.querySelector("#p1").innerHTML = ++coins;
}
let score = 0;

function addScore() {
    // score = score + 4;
    // score += 4;
    document.querySelector("#p2").innerHTML = score;
}
const passingMarks = 50;

function checkResult() {
    //get maths marks
    //get english marks
    //kya math marks 50 k brabr hen ya ziada hen to pass werna fail
    //kya math marks 50 k brabr hen ya ziada hen to pass werna fail

    let mathMarks = parseInt(document.querySelector("#math").value);
    let engMarks = parseInt(document.querySelector("#english").value);

    let isMathPass = mathMarks >= passingMarks;
    let isEngPass = engMarks >= passingMarks;

    let isExamPass = isMathPass && isEngPass;
    alert(isExamPass);
}
let isRaining = false;
let isSnowing = false;
let isWeather = 15;

let isRocketLaunch = (isRaining === false) && (isSnowing === false) && (isWeather < 20);

function rocketLaunch() {

    alert(isRocketLaunch);
}

// fruit chat
/*
is apple or range available
is apple r banana available
is orange or banana available

*/
let isApple = true;
let isOrange = true;
let isBanana = false;


let isFruitChatReady = (isApple === true) && (isOrange === true) && (isBanana === false);

function fruitChat() {
    alert(isFruitChatReady);
}