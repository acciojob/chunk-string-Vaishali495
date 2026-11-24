function stringChop(str, size) {
  // your code here
	if (str == null || typeof sif (str == null || typeof str !== "string") {
    return [];
  }
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0) {
    return [];
  }
	if (str == null || typeof str !== "string") {
    return [];
  }
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0) {
    return [];
  }tr !== "string") {
    return [];
  }
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0) {
    return [];
  }
	  let res = [];
   for(let i=0; i<=str.length; i+=size){
     res.push(str.slice(i,i+size));
   }
  return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
