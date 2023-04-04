let input = '';
let result = '';

function setInput(val) {
  input += val;
  document.getElementById('result').value = input;
}

function clearResult() {
  input = '';
  result = '';
  document.getElementById('result').value = '';
}

function getResult() {
  result = eval(input);
  document.getElementById('result').value = result;
}
