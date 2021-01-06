const abc = 'abcdefghijklmnopqrstuvwxyz';
// function that checks that a string is unique
function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 1 + i; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }

function substitution(input, alphabet, encode = true) {
    // Check if the parameters are missing 
    // Check if alphabet parameter is a string of exactly 26 characters
    // Check if Characters in the alphabet are all unique
    if(!input || !alphabet || alphabet.length !== 26 || !isUnique(alphabet)){
        return false;
    }
    // Make sure capital letters get ignored
    const str = input.toLowerCase();

    let result = '';
    // check if needed to encode or decode
    if(encode){
        // loop through input
        for (let i = 0; i < str.length; i++){
            const char = str[i]
            let abcIndex =  abc.indexOf(char);
            if(abcIndex <= -1){
                result += char;
            }else {
            for(let j = 0; j < alphabet.length; j++){
                let alphabetIndex = alphabet.indexOf(alphabet[j]);
                if(abcIndex === alphabetIndex){
                    result += alphabet[j];
                } 
            }
        }
        }
        // decode message
    }else {
        for (let i = 0; i < str.length; i++){
            const char = str[i]
            let abcIndex =  alphabet.indexOf(char);
            if(abcIndex <= -1){
                result += char;
            } else {
            for(let j = 0; j < alphabet.length; j++){
                let alphabetIndex = abc.indexOf(alphabet[j]);
                if(abcIndex === alphabetIndex){
                    result += alphabet[j];
                } 
            }
        }
        }
    }
    return result;
} 

module.exports = substitution;
