var inch = 156;
var feet = inch / 12;
console.log(feet);

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var senior = [144, 288];

var nanaFeet = inchToFeet(senior[0]);
console.log('nana ja chiase ', nanaFeet);
var naniFeet = inchToFeet(senior[1]);
console.log('nani ja chaise ', naniFeet);