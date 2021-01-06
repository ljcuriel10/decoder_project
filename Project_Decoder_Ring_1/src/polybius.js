const abc = {
    11: 'a',
    21: 'b',
    31: 'c',
    41: 'd',
    51: 'e',
    12: 'f',
    22: 'g',
    32: 'h',
    42: 'i',
    42: 'j',
    52: 'k',
    13: 'l',
    23: 'm',
    33: 'n',
    43: 'o',
    53: 'p',
    14: 'q',
    24: 'r',
    34: 's',
    44: 't',
    54: 'u',
    15: 'v',
    25: 'w',
    35: 'x',
    45: 'y',
    55: 'z',
}


function polybius(input, encode = true) {
    let str = input.toLowerCase();
    let result = '';
    if(encode){
        for(let i = 0; i < str.length; i++){
            let letters = str[i];
            if(letters === 'i'){
                result += "42";
            }else if(letters == ' '){
                result += letters;
                continue;
            }
            for(j in abc){
                const compLetters = abc[j];
                if(letters === compLetters){
                    result += j;
                } 
            }
        }
    } else {
        const newStr = input.split(' ').join('');
        if(newStr.length % 2 != 0){
            return false;
        }
        for(let i = 0; i < input.length; i+=2){
            str = `${input[i]}${input[i+1]}`
            if(str.includes(' ')){
                result += " ";
                i -= 1;
            } else if(str == "42"){
                result  += '(i/j)'
            }else {
                for(key in abc){
                    if(str === key){
                        result += abc[key]
                    }
                }
            }
        }
    }
    return result;
} 

module.exports = polybius;
