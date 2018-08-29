var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

//function takes in parameter array for a, declares new global variable that is equal to paramter a, unshifts parameter b as first array element in new variable, returns new variable array
function addElementToBeginningOfArray(array,element) {
  newArray = [element,...array]
  return newArray
}
//function takes in paramater array for a, unshifts parameter b as first array element in paramter a, returns array a
function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array;
}
//function takes in parameter array for a, declares new global variable that is equal to paramter a, push parameter b as last array element in new variable, returns new variable array
function addElementToEndOfArray(array,element) {
  newArray = [...array,element]
  return newArray;
}
//function takes in paramater array for a, push parameter b as last array element in paramter a, returns array a
function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array;
}

//
function accessElementInArray(array,index) {
  return array[index];
}




//newArray = a;
 //   newArray.unshift(b)
  //  return newArray; var newArray = array;
 //newArray.unshift(element)