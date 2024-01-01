function diffNumbers() {
  // 첫 번째 수를 입력받는다.
  var firstNumber = prompt("첫 번째 수를 입력하세요: ");

  // 두 번째 수를 입력받는다.
  var secondNumber = prompt("두 번째 수를 입력하세요: ");

  // 두 수를 더한다.
  var sum = parseInt(firstNumber) - parseInt(secondNumber);

  // 경고창을 표시한다.
  alert("두 수의 차는 " + sum + "입니다.");
}
