const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function totalBatteries(batteryBatches){
//     let result = 0;
    
//     return batteryBatches.reduce(total, currentValue => {
//         result = total + currentValue

//         return result;
//     },0);
    
    
// }
// totalBatteries(batteryBatches);



let totalBatteries = batteryBatches.reduce( (total, currentValue) => {
    let result = 0;
    result = total + currentValue
    return result;
},0);
    
    
    


