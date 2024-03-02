function tennisEquipment(input) {

    let priceOneRacket = Number(input[0]);
    let numberOfRackets = Number(input[1]);
    let shoesPairs = Number(input[2]);

    let equipmentCost = (numberOfRackets * priceOneRacket) + (shoesPairs * (priceOneRacket / 1 / 6));
    let otherEquipment = equipmentCost * 0.20;
    let totalPrice = equipmentCost + otherEquipment;

    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 1 / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice * 7 / 8)}`);
}
tennisEquipment(['850',
    '4',
    '2'])