function getDecodeChar(encodeChar, shift) {
    let decodeIndex = (encodeChar - 97) - shift;
    if(decodeIndex < 0){
        decodeIndex += 26;
    }
    return decodeIndex;
}

function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25){
        return false;
    }
    let str = input.toLowerCase();
    let result = "";
    if(encode){
    for(let i = 0; i < str.length; i++){
        let char = str[i].charCodeAt();
        if(char >= 97 && char <= 122) {
            result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
        } else {
            result += str[i];
        }
    }
    return result;
} else {
    for(let i = 0; i < str.length; i++){
        let char = str[i].charCodeAt();
        if(char >= 97 && char <= 122) {
            result += String.fromCharCode((getDecodeChar(char, shift) % 26) + 97);
        } else {
            result += str[i];
        }
}
}
return result;
}



module.exports = caesar;
