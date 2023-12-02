function bubbleSort(array) {
  // Only change code below this line
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - i; j++){
      if(array[j] > array[j+1]){
        let aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
      }
    }
  }
  return array;
  // Only change code above this line
}
