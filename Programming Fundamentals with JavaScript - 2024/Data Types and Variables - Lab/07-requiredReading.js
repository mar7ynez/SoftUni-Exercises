function requiredReading(numPages, pagesOneHour, daysLeft) {

    let hoursADay = (numPages / pagesOneHour) / daysLeft;

    console.log(hoursADay);
}

requiredReading(212, 20, 2);