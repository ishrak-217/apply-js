function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else {
        if (year % 4 == 0 && year % 100 != 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

let checkYear = isLeapYear(1700);
console.log(checkYear);

checkYear = isLeapYear(2000);
console.log(checkYear);

checkYear = isLeapYear(2012);
console.log(checkYear);