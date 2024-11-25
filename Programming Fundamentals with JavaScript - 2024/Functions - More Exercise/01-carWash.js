function carWash(arr) {

    let progressPercentage = cleanProgress(arr);
    
    console.log(`The car is ${progressPercentage.toFixed(2)}% clean.`);

    function cleanProgress(arr) {
        let progress = 10;

        for (let i = 1; i < arr.length; i++) {
            let command = arr[i];

            switch(command) {
                case 'soap': progress += 10; break;
                case 'water': progress *= 1.20; break;
                case 'vacuum cleaner': progress *= 1.25; break;
                case 'mud': progress *= 0.90; break;
            }
        }
        return progress;
    }
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);