var a = [2, 10, 16, 25, 38, 47, 60];
var b = [62, 54, 36, 24, 15, 9, 1];
var c = [3, 13, 60, 15, 20, 10];
var d = [1, 2, 3, 4, 3, 5];

//Take one array at a time as innput and tell me which order are the elements in the array
//asc, dec or not in order
//duplicated elements exists what if

function arrayOrder(arr) {
  let asce = true;
  let desc = true;
  let dupl = false;
  let i = 0;
  while ((asce || desc) && i < arr.length) {
    if (arr[i] < arr[i + 1]) {
      desc = false;
    } else if (arr[i] > arr[i + 1]) {
      asce = false;
    }
    i++;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        dupl = true;
        break;
      }
    }
  }

  if (asce === true) {
    console.log('Ascending Order');
  } else if (desc === true) {
    console.log('Descending Order');
  } else if (dupl === true) {
    console.log('Contains Duplicate Elements');
  } else {
    console.log('Not in Order');
  }
}

arrayOrder(c);
