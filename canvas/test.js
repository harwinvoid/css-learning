
function getSteps(str) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  var result = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        result.push(i);
      }
    }
  }
  if (result.length === 1) {
    result.unshift('0')
    result.push(str.length - 1);
  }
  if(str.length === 1) {
    return 1;
  }
  var max = 0;
  for (var k = 0; k < result.length - 1; k++) {
    if (result[k + 1] - result[k] > max) {
      max = result[k + 1] - result[k];
    }
  }
  return max;

}
function main() {
  var str = readline();
  print(getSteps(str));
}
main();