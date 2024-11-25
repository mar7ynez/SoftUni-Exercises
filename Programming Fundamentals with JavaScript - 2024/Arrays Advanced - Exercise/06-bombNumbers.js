function bombNumbers(arrOfNums, arrOfBombs) {

    let impactNum = arrOfBombs[0];
    let bombRange = arrOfBombs[1];
    
    let sumAfterDetonation = 0;

    while (arrOfNums.includes(impactNum)) {
        let explodeNumIndex = arrOfNums.indexOf(impactNum);
        let startSliceIndex = explodeNumIndex - bombRange < 0 ? 0 : explodeNumIndex - bombRange;
        let endSliceIndex = explodeNumIndex + bombRange;

        let deleteCount = arrOfNums.slice(startSliceIndex, endSliceIndex + 1).length;
        arrOfNums.splice(startSliceIndex, deleteCount);
    }
    for (let int of arrOfNums) {
        sumAfterDetonation += int;

    }
    console.log(sumAfterDetonation);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);