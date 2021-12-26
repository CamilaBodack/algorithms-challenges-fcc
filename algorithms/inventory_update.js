/*
From FCC:
Compare and update the inventory stored in a 2D array against a second 2D array of a
fresh delivery. Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2){

    let strArr1 = strArr2 = []
    
    if(arr1.length < 1){
        arr1 = arr2
        arr2 = []
    }
    
    for(let i = 0; i < arr1.length; i++){
        if(!strArr1.includes(arr1[i][1])){
            strArr1.push(arr1[i][1])
        }
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i][1] === arr2[j][1]){
                arr1[i][0] = arr1[i][0] + arr2[j][0]
            }
            if(!strArr2.includes(arr2[j][1])){
                strArr2.push(arr2[j][1])
            }
        }
            
    }
    
    strArr2.forEach(element2 => {
       if(!strArr1.includes(element2)){
        arr2.forEach(arr2item => {
            if(arr2item[1] === element2){
                arr1.push(arr2item)
            }
        })
       } 
    })
    
    let sortArr =  arr1.sort((a, b) => {
        return a[1].localeCompare(b[1])
    })
    
    return sortArr
    
    }
    
    
    console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))