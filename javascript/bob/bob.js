//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
if(input.trim().length != 0){
  workingArray = input.split('');
  endMark = workingArray[input.length-1];
  switch (endMark){
    case '?':
      const questionExp1 = /[A-Z]/;
      const questionExp2 = /\W/;

      const questionResults = workingArray.filter((e,i) => {
      if(e.match(questionExp1) === null ){
        if(e.match(questionExp2) == null)
          return true;
        }
      });
      if(questionResults.length === 0){
        return 'Whoa, chill out!';
      }
      else
        return 'Sure.'
    break;
    case '.':
      return 'Whatever.';
    break;
    case '!':
      const exp1 = /[A-Z]/;
      const exp2 = /\W/;

      const results = workingArray.filter((e,i) => {
        if(e.match(exp1) === null ){
          if(e.match(exp2) == null)
            return true;
          }
      });
      if(results.join().match(/[A-Z]/i) === null){
        return 'Whoa, chill out!';
        }
      else
        return 'Whatever.'
    default:
    if(input.match(/[A-Z][a-z]/i) != null){
      if(input === input.toUpperCase()){
          return 'Whoa, chill out!'
        }
      }
        return 'Whatever.'
    break;
    }
  }
  else{
      return 'Fine. Be that way!';
  }

};

module.exports = Bob;
