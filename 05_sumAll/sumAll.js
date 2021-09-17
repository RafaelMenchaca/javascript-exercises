// const sumAll = function(numInicial, numFinal) {
    
//     var suma = 0;

    
//     if ( (Number.isInteger(numInicial) && Number.isInteger(numFinal)) && (Math.sign(numInicial) == 1 && Math.sign(numFinal) == 1 ) &&  ( numInicial < numFinal) ) {
        
//         for(let i = numInicial; i <= numFinal; i++){
//             suma = suma + i;
//         }
//         return suma;
   
//     }  else if ( (Number.isInteger(numInicial) && Number.isInteger(numFinal))  &&  (Math.sign(numInicial) == 1 && Math.sign(numFinal) == 1 ) ){
//         for(let i = numInicial; i >= numFinal; i--){
//             suma = suma + i;
//         }
//         return suma;
//     } else {
//         return "ERROR";
//     }
// };

const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  };
// Do not edit below this line
module.exports = sumAll;
