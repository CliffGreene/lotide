const eqArrays = function(array1, array2) {
 
  if (array1.length === array2.length) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }

    }
    return true;
  } else {
    return false;
  }
};
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));