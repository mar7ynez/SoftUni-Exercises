function carFactory(carObj) {

    let fulfilledOrder = { model: carObj.model };

    if (carObj.power <= 90) {
        fulfilledOrder.engine = { power: 90, volume: 1800 };

    } else if (carObj.power <= 120) {
        fulfilledOrder.engine = { power: 120, volume: 2400 };

    } else {
        fulfilledOrder.engine = { power: 200, volume: 3500 };

    }
    fulfilledOrder.carriage = { type: carObj.carriage, color: carObj.color };

    let wheelSize = carObj.wheelsize;
    if (carObj.wheelsize % 2 === 0) {
        wheelSize--;
        fulfilledOrder.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    } else {
        fulfilledOrder.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    }
    return fulfilledOrder;
}
carFactory({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
});