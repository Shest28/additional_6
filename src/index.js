module.exports = function zeros(expression) {
  var Re = /(\d+)(!+)/ig;
  var parsingArray = [];
  var calcResult = '1';
  var countZeros = 0;

  while(parsingArray = Re.exec(expression)) {
    calcResult = (parsingArray[2] == '!') ?
      multiply(calcResult, factorial(parsingArray[1]))
      : multiply(calcResult, factorialTwice(parsingArray[1]));
  }
  calcResult = calcResult.split("");
  while(calcResult.pop() == '0') {
    countZeros++;
  }
  return countZeros;
}

function multiply(first, second) {
  var firstArray = first.split("").reverse();
  var secondArray = second.split("").reverse();
  var result = [];

  for (var i = 0; i < firstArray.length; i++) {
      for (var j = 0; j <secondArray.length; j++) {
          var index = i + j;
          if (index >= result.length) result[index] = firstArray[i] * secondArray[j]
            else result[index] = firstArray[i] * secondArray[j] + result[index];
          if (result[index] > 9) {
            if ((index + 1) >= result.length) result[index + 1] = Math.floor(result[index] / 10)
              else result[index + 1] = Math.floor(result[index] / 10) + result[index + 1];
            result[index] -= Math.floor(result[index] / 10) * 10;
          }
      }
  }
  return result.reverse().join("");
}

function factorial(number) {
  var result = '1';
    for(i = 1; i <= +number; i++) {
      result = multiply(result, i+'');
    }
  return result;
}

function factorialTwice(number) {
  var result = '1';
  for(i = +number; i >= 1; i -= 2) {
    result = multiply(result, i+'');
  }
return result;
}
