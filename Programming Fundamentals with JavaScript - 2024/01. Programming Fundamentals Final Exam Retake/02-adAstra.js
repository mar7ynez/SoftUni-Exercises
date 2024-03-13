function adAstra(data) {

    let infoAsText = data.shift();
    let pattern = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;

    let infoMatch;
    let totalCalories = 0;
    let foodInfo = { details: [] };

    while (infoMatch = pattern.exec(infoAsText)) {
        let itemName = infoMatch[2];
        let expDate = infoMatch[3];
        let calories = infoMatch[4];

        foodInfo.details.push({ itemName, expDate, calories });

        totalCalories += Number(calories);
    }
    console.log(`You have food to last you for: ${parseInt(totalCalories / 2000)} days!`);

    let keys = Object.keys(foodInfo.details)

    for (let key of keys) {
        console.log(`Item: ${foodInfo.details[key].itemName}, Best before: ${foodInfo.details[key].expDate}, Nutrition: ${foodInfo.details[key].calories}`);

    }
}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);