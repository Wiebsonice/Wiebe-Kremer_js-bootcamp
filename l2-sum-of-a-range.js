// De sum function
function sum(rangeList) {
    let count = 0;
    for (let a = 0; a < rangeList.length; a ++){
        count = count + rangeList[a];
    }
    return count;
}

// De ranges function
function ranges(start, end, steps = 1 ){
    let result = [];
    let index = 0;
    if (start <= end ) {
        for (let a = start; a <= end; a += steps){
            result [index] = a;
            index = index + 1;
        }
        return result;
    } else {
        for (let a = start; a >= end; a += steps){
            result [index] = a;
            index = index + 1;
        }
        return result;
    }
}


console.log(ranges(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(ranges(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(ranges(1, 10)));
// → 55
