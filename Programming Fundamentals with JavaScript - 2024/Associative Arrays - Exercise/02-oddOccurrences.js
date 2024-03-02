function oddOccurrences(data) {

    let occurrenceRegister = new Map();

    let words = data.toLowerCase().split(' ');

    words.forEach(w => {
        if (!occurrenceRegister.has(w)) {
            occurrenceRegister.set(w, 0);

        }
        occurrenceRegister.set(w, occurrenceRegister.get(w) + 1);
    });
    let oddOccur = [];

    for (let [word, value] of occurrenceRegister.entries()) {
        if (Number(value) % 2 !== 0) {
            oddOccur.push(word);

        }
    }
    console.log(oddOccur.join(' '));
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');