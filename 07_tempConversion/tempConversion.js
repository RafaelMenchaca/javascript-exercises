// const ftoc = function(gradosFar) {

//   var gradosCent = ( (gradosFar -32) / 1.8);

//   if( Number.isInteger(gradosCent)){
//     return gradosCent;
//   } else{
//     var string = gradosCent.toFixed(1);
//      return  Number.parseFloat(string);
//   }
// };

// // ºC = (ºF -32) / 1,8


// const ctof = function(gradosCent) {

//   var gradosFar = ( (gradosCent * 1.8) + 32);

//   if( Number.isInteger(gradosFar)){
//     return gradosFar;
//   } else{
//     var string = gradosFar.toFixed(1);
//     return  Number.parseFloat(string);
//   }
// };

// ºF = (ºC · 1,8) + 32


const ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10
 };
 
 const ctof = function(c) {
   return Math.round(((c * 9/5) + 32) * 10) / 10
 };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
