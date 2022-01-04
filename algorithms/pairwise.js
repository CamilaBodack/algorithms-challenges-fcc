/*
Given an array arr, find element
pairs whose sum equal the second argument
arg and return the sum of their indices.
*/

function pairwise(arr, arg) {
    let result = 0
    let item = 0
    let sub = 0
    for(let i = 0; i < arr.length; i++){
        item = arr[i]
        if(arr.length === 0){return 0}
        while(result !== arg){
            sub = arg - item
            result = sub + item
        }
     return arr.indexOf(sub) + arr.indexOf(item)
 
 
    }
 }
 
 
 console.log(pairwise([7, 9, 11, 13, 15], 20))