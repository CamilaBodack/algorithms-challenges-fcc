/*
Selection Sort Algorithm
*/

let list = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

for(let i = 0; i < list.length; i++){
    let sliced = list.slice(i,)
    let min = Math.min(...sliced)
    let min_index = list.lastIndexOf(min)
    let aux = list[i]
    list[i] = min
    list[min_index] = aux
}
return list