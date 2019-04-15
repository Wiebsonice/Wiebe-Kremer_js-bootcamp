function isEven(a){
    if (a < 0) {
        //Math.abs makes negative numbers handle as regular numbers
        a = Math.abs(a);
    }
    if (a === 0) {
        return true;
    }
    if (a === 1) {
        return false;
    }
    else {
        a = a - 2;
        return isEven(a);
    }
}
console.log(isEven(50));
