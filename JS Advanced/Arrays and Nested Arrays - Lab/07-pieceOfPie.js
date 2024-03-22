function pieceOfPie(arrOfStr, startOfSection, endOfSection) {

    let startIdx = arrOfStr.indexOf(startOfSection);
    let endIdx = arrOfStr.indexOf(endOfSection) + 1;
    let result = arrOfStr.slice(startIdx, endIdx);
    
    return result;
}
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');