function foreignLanguages(country) {

    let theLanguage = '';

    switch (country) {
        case 'England':
        case 'USA':
            theLanguage = 'English';
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            theLanguage = 'Spanish';
            break;
        default:
            theLanguage = 'unknown';
            break;
    }
    console.log(theLanguage);
}

foreignLanguages('Germany');