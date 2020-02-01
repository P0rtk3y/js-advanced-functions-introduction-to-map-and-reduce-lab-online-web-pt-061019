// Your code here
function mapToNegativize(arr){
  return arr.map(el => el * -1);
} 

function mapToNoChange(arr){
  return arr;
}

function mapToDouble(arr){
  return arr.map(el => el * 2);
}

function mapToSquare(arr){
  return arr.map(el => el ** 2);
}

function reduceToTotal(arr, startingPoint = 0){
  let total = startingPoint;
  return arr.reduce(function(total, el){return total + el}, total)
}