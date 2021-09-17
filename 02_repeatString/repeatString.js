const repeatString = function(nombre, num) {
    
    switch(Math.sign(num)) {
        case -1:
            return "ERROR";
            break;
        
        default:
            return nombre.repeat(num);
            break;
    }
    
     
};

// Do not edit below this line
module.exports = repeatString;
