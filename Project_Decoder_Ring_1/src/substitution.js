const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
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
    if(alphabet.length < 25 || alphabet.length > 26 || !isUnique(alphabet)){
        return false;
    }

    const str = input.toLowerCase();
    let result = '';
    if(encode){
        for (let i = 0; i < str.length; i++){
            const char = str[i]
            let abcIndex =  abc.indexOf(char);
            if(abcIndex === -1){
                result += char;
            }
            for(let j = 0; j < alphabet.length; j++){
                let alphabetIndex = alphabet.indexOf(alphabet[j]);
                if(abcIndex === alphabetIndex){
                    result += alphabet[j];
                } 
            }
        }
    }else {
        for (let i = 0; i < str.length; i++){
            const char = str[i]
            let abcIndex =  alphabet.indexOf(char);
            if(abcIndex === -1){
                result += char;
            }
            for(let j = 0; j < alphabet.length; j++){
                let alphabetIndex = abc.indexOf(alphabet[j]);
                if(abcIndex === alphabetIndex){
                    result += alphabet[j];
                } 
            }
        }
    }
    return result;
}

module.exports = substitution;
