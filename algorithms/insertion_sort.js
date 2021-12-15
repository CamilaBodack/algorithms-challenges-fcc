/*
Insertion Sort Algorithm
*/

let array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

function insertionSort(array) {
    let correct_order = false
        while(correct_order === false){
        correct_order = true
            for(let i = 0; i < array.length; i++){
                let before = array[i-1]
                let element = array[i]
                let after = array[i+1]
                if(element > before && element > after){
                    array[i] = after
                    array[i+1] = element
                    correct_order = false
                }
                if(element < before){
                    array[i-1] = element
                    array[i] = before
                    correct_order = false
                }
        }
    }
    return array;
}

insertionSort(array)