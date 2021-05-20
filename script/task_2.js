

function padString (str, num , simb , right = true  ){
    if (typeof str !== 'string'){return "Должна быть строка"}

    if (typeof num !== 'number'){return "Введите число"}

    if (str.length === num){return str}

    if (str.length > num) { return  str.substr( 0, num)}

    if (simb.length > 1) {return 'только один символ!'}

    let widthSimb = num - str.length;

    let simbols = '';

    for (let i = 0 ; i < widthSimb; i++){
        simbols += simb;
    }

    let result = null;

    if(right) {result =  str + simbols}

    else { result = simbols + str }

    return  result;

}
console.log(padString( 'hello' , 2 ))