var array = [5,2,4,6,1,3];
var j = 1;

for (; j <= array.length-1; j++) {
  var key = array[j];

  var i = j -1;

  while (i >= 0 && array[i] > key) {
    array[i+1] = array[i];
    i = i-1;
  }

  array[i+1] = key;


}

console.log(array);