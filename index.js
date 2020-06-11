/*console.log('Hello word'.toUpperCase());*/
// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...

console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
String.prototype.firstUpperCase = function(){
  let arr = this.split(' ');
  let uppserCase = ([first,...rest]) => first.toUpperCase() + rest.join('');
  let result = '';
  arr.forEach((val) => {
    result += uppserCase(val) + ' ';
  })
  return result;
}
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1,2));