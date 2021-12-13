/* 
Bubble sort 
*/


let array = [10, 44, 88, 13]

function bubbleSort(array) {
  let ordered = false;
  while(ordered === false){
    ordered = true;
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        ordered = false;
      }
    }
  }
  return array
}
bubbleSort(array)