function oldBooks(input) {

    let annysBook = input.shift();
    let command = input.shift();

    let counter = 0;
    let isFound = false; 

    while (command !== 'No More Books') {
        
        if (annysBook === command) {
            console.log(`You checked ${counter} books and found it.`);
            isFound = true;
            break;
            
        }
        
        counter++;
        command = input.shift();
    }
    
    if (!isFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);

    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
