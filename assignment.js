
              /*  ----------         kilometerToMeter     ----------  */

function kilometerToMeter (kilometer) {
    var meter = kilometer / 1000;
    return meter;
}             
var countMeter = kilometerToMeter(3300);
console.log(countMeter);





                 /* -----------      HOTEL COST      ------------     */
function hotelCost(rent) {
    var hotelRent = 0;
    if (rent <= 10) {
    hotelRent = rent * 100;
    }
    else if (rent <= 20) {
       var firstPart = 10 * 100;
       var remaining = rent - 10;
       var secondPart = remaining * 80;
       hotelRent = firstPart + secondPart;
    } 
    else {
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = rent - 20;
    var thirdPart = remaining * 50;
    hotelRent = firstPart + secondPart + thirdPart;
    }
    return hotelRent; 
}
var count = hotelCost(25);
console.log(count);

