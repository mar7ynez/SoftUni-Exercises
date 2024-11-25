function foodForPets(input) {

    let daysCount = Number(input.shift());
    let amountFoodAvail = Number(input.shift());

    let dogEatedFood = 0;
    let catEatedFood = 0;
    let biscuits = 0;

    for (let i = 1; i <= daysCount; i++) {
        let curEatedFoodDog = Number(input.shift());
        let curEatedFoodCat = Number(input.shift());

        catEatedFood += curEatedFoodCat;
        dogEatedFood += curEatedFoodDog;

        if (i % 3 === 0) {
            biscuits += (curEatedFoodCat + curEatedFoodDog) * 0.10;

        }
    }
    let totalEatedFood = catEatedFood + dogEatedFood;
    let percentEatedFood = (totalEatedFood / amountFoodAvail) * 100;
    let dogEatedPercent = (dogEatedFood / totalEatedFood) * 100;
    let catEatedPercent = (catEatedFood / totalEatedFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${percentEatedFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatedPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatedPercent.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]);