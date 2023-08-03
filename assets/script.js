function sumOfThreeDice() {
    rolls = [0, 0, 0, 0,].map((x) => Math.ceil(Math.random() * 6));
    rolls.sort();
    sum = rolls[1] + rolls[2] + rolls[3];
    return sum;
}

// const numbers = [sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice()]
//console.log(numbers);

function printNumber0(number) {
    var placeholder = document.getElementById('placeholder0');
    placeholder.innerHTML = number;
  }
  function printNumber1(number) {
    var placeholder = document.getElementById('placeholder1');
    placeholder.innerHTML = number;
  }
  function printNumber2(number) {
    var placeholder = document.getElementById('placeholder2');
    placeholder.innerHTML = number;
  }
  function printNumber3(number) {
    var placeholder = document.getElementById('placeholder3');
    placeholder.innerHTML = number;
  }
  function printNumber4(number) {
    var placeholder = document.getElementById('placeholder4');
    placeholder.innerHTML = number;
  }
  function printNumber5(number) {
    var placeholder = document.getElementById('placeholder5');
    placeholder.innerHTML = number;
  }
var button = document.getElementById('button');

button.onclick = function() {
    let numbers = [sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice(), sumOfThreeDice()]
  var result0 = numbers[0]
  var result1 = numbers[1]
    var result2 = numbers[2]
    var result3 = numbers[3]
    var result4 = numbers[4]
    var result5 = numbers[5]
    printNumber0(result0);
    printNumber1(result1);
    printNumber2(result2);
    printNumber3(result3);
    printNumber4(result4);
    printNumber5(result5);
};