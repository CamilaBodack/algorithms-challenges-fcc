/*
From FCC:
The mathematical term symmetric difference (△ or ⊕) of two sets 
is the set of elements which are in either of the two sets but not in both.
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
Symmetric difference is a binary operation, which means it operates on only two elements.
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

*/

function sym(args) {
    let arrays = Array.from(arguments);
    let unique = [];
        for(let i = 0; i < arrays.length -1; i++){
            if(i === 0){
                unique = diffArr(arrays[i], arrays[i+1])
            }
            else{unique = diffArr(unique, arrays[i+1])}
        }
        return Array.from(new Set(unique))
    }
      
function diffArr(arrayOne, arrayTwo){
    let diffItems = []
    arrayOne.forEach((item) => {
    if(arrayTwo.indexOf(item) === -1){
        diffItems.push(item)
        }
    })
    arrayTwo.forEach((item) => {
    if(arrayOne.indexOf(item) === -1){
        diffItems.push(item)
        }
    })
    return diffItems
}
      

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
