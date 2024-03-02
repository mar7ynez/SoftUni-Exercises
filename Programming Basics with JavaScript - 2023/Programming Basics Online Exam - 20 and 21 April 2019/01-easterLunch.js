function easterLunch(input) {

    let easterCakes = Number(input[0]) * 3.20;
    let eggs = Number(input[1]) * 4.35;
    let cookies = Number(input[2]) * 5.40;
    let eggPaint = 12 * Number(input[1]) * 0.15;

    let totalCost = easterCakes + eggs + cookies + eggPaint;

    console.log(totalCost.toFixed(2));
}
easterLunch(["3",
    "2",
    "3"]);