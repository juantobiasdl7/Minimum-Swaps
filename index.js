let arr1 = [1,3,5,2,4,6,7];
let arr2 = [7,1,3,2,4,5,6];
let arr3 = [4,3,1,2];
let arr4 = [1,2,3,4,5,6,8,7];

function minimumSwaps(arr) {

  let max = Math.max(...arr);
  let currentMax = 0;
  let currentArr = [];
  let maxIndex = 0;
  let count = 0;

  
  for (let i = arr.length-1; i >= 1; i--) {

    if ( arr[i] != max) {
      currentArr = arr.slice(0, i+1);
      currentMax = Math.max(...currentArr);
      maxIndex = currentArr.indexOf(currentMax);
      arr[maxIndex] = arr[i];
      arr[i] = currentMax;
      count += 1;
      //i += 1;
      console.log(i);
    }

  max--;
    
  //console.log(arr);
  //console.log(count);
  }

  return count;
}

//console.log(minimumSwaps(arr4));
//console.log(minimumSwaps(arr2));
console.log(minimumSwaps(arr3));

