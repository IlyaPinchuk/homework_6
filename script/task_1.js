let userNum = +prompt('Введите число:');
let Pow = +prompt("Введите степень", 1);

function mathOperation (userNum , Pow){
    if ( !userNum || !Pow ){
        return "some error";
    }
    else{
    return  Math.pow(userNum , Pow);
    }

}
alert(mathOperation(userNum , Pow));