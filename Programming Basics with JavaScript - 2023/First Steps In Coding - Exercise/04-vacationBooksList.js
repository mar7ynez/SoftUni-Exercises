function vacationBookList(input) {

    let curBookPages = Number(input[0]);
    let pagesRedOneH = Number(input[1]);
    let daysLeft = Number(input[2]);

    let timeToReadTheBook = curBookPages / pagesRedOneH;
    let neededTimeToRead = timeToReadTheBook / daysLeft;

    console.log(neededTimeToRead);
    
}

vacationBookList(["212 ","20","2"]);