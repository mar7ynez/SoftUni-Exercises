function destinationMapper(randomString) {

    let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;

    let destinationMap = [];
    let travelPoints = 0;

    let validDestinations;
    while (validDestinations = pattern.exec(randomString)) {
        destinationMap.push(validDestinations[2]);
        travelPoints += validDestinations[2].length;

    }
    console.log(`Destinations: ${destinationMap.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");