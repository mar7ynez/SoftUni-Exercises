function smallestOfThreeNums(firstInt, secondInt, thirdInt) {

    let smallestOfFirstTwoInt = (firstInt, secondInt) => {return firstInt < secondInt ? firstInt : secondInt};
    
    let tempSmallest = smallestOfFirstTwoInt(firstInt, secondInt);
    let smallestNumber = tempSmallest < thirdInt ? tempSmallest : thirdInt;
    
    console.log(smallestNumber);
}
smallestOfThreeNums(2, 5, 3);