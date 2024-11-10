// function avg(arr= [x, y, z, num4]){ 
//     for(let i=0; i<arr.length; i++){
//         average = num1+num2+num3+num4/arr.length
//     }
//     return average
// }

// console.log()
function avg(arr){
    arr = [1,2,3,4]
    let sum = 0;
    for (i=0; i<arr.length; i++){
        sum = sum + arr[i]/arr.length
    }
    // console.log(sum,"summmm")
return sum
}
console.log(avg())