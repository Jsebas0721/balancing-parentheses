function balancingParentheses(string) {
  // type your code here
  let countOpen = 0;
  let countClosed = 0;

  let neededP = 0;

  Array.from(string).forEach((char) => char === '(' ? countOpen += 1 : countClosed +=1)

  if (countOpen > countClosed){
    neededP = countOpen - countClosed;
  }else if(string.charAt(0) == ")" && string.charAt(string.length-1) == "("){
    neededP = 2;
  }else{
    neededP = countClosed - countOpen;
  }

  return neededP;
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2")
  console.log(balancingParentheses(')('));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
