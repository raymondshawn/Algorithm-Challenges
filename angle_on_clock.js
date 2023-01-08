/**
 * 
 * @param {number} hour 
 * @param {number} min 
 * @returns {number}
 */

function angle(hour,min){

    let distance=30;
    let hour_angle=hour*distance;
  
    let min_to_hour=(min*12)/60;
    let minute_angle=min_to_hour*distance;
    return hour_angle-minute_angle;

}

console.log(angle(8,24));