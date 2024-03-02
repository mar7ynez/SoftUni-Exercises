function searchForANumber(firstArr, secondArr) {

    let manipulationArray = firstArr.slice(0, secondArr[0]);
    manipulationArray.splice(0, secondArr[1]);

    let counter = 0;

    for (let i in manipulationArray) {

        if (manipulationArray[i] === secondArr[2]) {
            counter++;

        }
    }
    console.log(`Number ${secondArr[2]} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);