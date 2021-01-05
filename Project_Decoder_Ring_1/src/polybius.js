const abc = {
    11: 'A',
    21: 'B',
    31: 'C',
    41: 'D',
    51: 'E',
    12: 'F',
    22: 'G',
    32: 'H',
    42: 'I',
    42: 'J',
    52: 'K',
    13: 'L',
    23: 'M',
    33: 'N',
    43: 'O',
    53: 'P',
    14: 'Q',
    24: 'R',
    34: 'S',
    44: 'T',
    54: 'U',
    15: 'V',
    25: 'W',
    35: 'X',
    45: 'Y',
    55: 'Z',
}
function polybius(input, encode = true) {
    if(!encode){
       return input.length % 2 == 0 ? true : false;
    }
    const str = input.toUpperCase();
    let result = '';
    for(let i = 0; i < str.length; i++){
        let letters = str[i];
        for(j in abc){
            const compLetters = abc[j];
            if(letters === compLetters){
                result += j
                continue
            }
        }
    }
    console.log(result)
    return result;
}

module.exports = polybius;
