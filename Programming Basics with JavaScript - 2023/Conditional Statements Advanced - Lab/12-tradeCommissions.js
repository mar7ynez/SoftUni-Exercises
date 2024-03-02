function tradeComissions(input) {

    let town = input[0];
    let numberOfSells = Number(input[1]);

    let comission = 0;
    let isNotError = true;

    if (town === 'Sofia') {
        if (numberOfSells >= 0 && numberOfSells <= 500) {
            comission = numberOfSells *= 0.05;

        } else if (numberOfSells >= 500 && numberOfSells <= 1000) {
            comission = numberOfSells *= 0.07;

        } else if (numberOfSells >= 1000 && numberOfSells <= 10000) {
            comission = numberOfSells *= 0.08;
            
        } else if (numberOfSells > 10000) {
            comission = numberOfSells *= 0.12;

        } else {
            isNotError = false
            console.log('error');

        }

    } else if (town === 'Varna') {
        if (numberOfSells >= 0 && numberOfSells <= 500) {
            comission = numberOfSells *= 0.045;

        } else if (numberOfSells >= 500 && numberOfSells <= 1000) {
            comission = numberOfSells *= 0.075;

        } else if (numberOfSells >= 1000 && numberOfSells <= 10000) {
            comission = numberOfSells *= 0.10;
            
        } else if (numberOfSells > 10000) {
            comission = numberOfSells *= 0.13;

        }

    } else if (town === 'Plovdiv') {
        if (numberOfSells >= 0 && numberOfSells <= 500) {
            comission = numberOfSells *= 0.055;

        } else if (numberOfSells >= 500 && numberOfSells <= 1000) {
            comission = numberOfSells *= 0.080;

        } else if (numberOfSells >= 1000 && numberOfSells <= 10000) {
            comission = numberOfSells *= 0.12;
            
        } else if (numberOfSells > 10000) {
            comission = numberOfSells *= 0.145;

        } else {
            isNotError = false
            console.log('error');
            
        }

    } else {
        isNotError = false
        console.log('error');

    }

    if (isNotError) {
        console.log(comission.toFixed(2));

    }
}

tradeComissions(["Varna",
"3874.50"])