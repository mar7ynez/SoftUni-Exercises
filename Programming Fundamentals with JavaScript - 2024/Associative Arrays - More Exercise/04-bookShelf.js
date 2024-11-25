function bookShelf(data) {

    let bookShelves = {};
    let shelfGenreAndId = {};

    for (let info of data) {
        if (info.includes('->')) {
            let [shelfId, shelfGenre] = info.split(' -> ');
            if (!Object.values(shelfGenreAndId).includes(shelfId)) {
                shelfGenreAndId[shelfGenre] = shelfId;
                bookShelves[shelfGenre] = [];
            }
        } else {
            let [bookTitle, bookData] = info.split(': ');
            let [bookAuthor, bookGenre] = bookData.split(', ');
            if (bookShelves.hasOwnProperty(bookGenre)) {
                bookShelves[bookGenre].push({
                    name: bookTitle,
                    author: bookAuthor,
                })
            }
        }
    }
    for (let [bookGenre, booksInShelf] of Object.entries(bookShelves).sort((a, b) => b[1].length - a[1].length)) {
        console.log(`${shelfGenreAndId[bookGenre]} ${bookGenre}: ${booksInShelf.length}`);
        booksInShelf.sort((a, b) => a.name.localeCompare(b.name)).forEach(shelf => console.log(`--> ${shelf.name}: ${shelf.author}`));

    }
}
bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);