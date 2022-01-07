/*
Given an array arr, find element
pairs whose sum equal the second argument
arg and return the sum of their indices.

WIP
*/


function pairwise(arr, arg) {
    let item = 0;
    let proximo = 0;
    let soma = 0;
    let pairs = [];
    let sumIndexs = 0;
    let pair = []
    if(arr.length === 0){return 0}
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            item = arr[i]
            proximo = arr[j]
            soma = item + proximo
            if(soma === arg){
                pair = [item, proximo]
                if(pairs.includes(pair || pair.reverse())){continue}
                pairs.push(pair)
                }   
                
            }
                
        }
    
    pairs.forEach(item => {
        sumIndexs += arr.indexOf(item)
    })

    return pairs
}

console.log(pairwise([1, 3, 2, 4], 4)) 
//console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
//console.log(pairwise([7, 9, 11, 13, 15], 20));
 
 
 console.log(pairwise([7, 9, 11, 13, 15], 20))