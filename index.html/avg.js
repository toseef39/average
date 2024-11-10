
function avg(arr){
    arr = [1,2,3,4]
    let sum = 0;
    for (i=0; i<arr.length; i++){
        sum = sum + arr[i]/arr.length
    }
return sum
}
console.log(avg())