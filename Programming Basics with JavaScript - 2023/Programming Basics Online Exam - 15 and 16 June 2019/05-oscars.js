function oscars(input) {

    let actorName = input.shift();
    let actorStartPts = Number(input.shift());
    let judgesCount = Number(input.shift());

    for (let i = 1; i <= judgesCount; i++) {
        let currJudge = input.shift();
        let currJudgePts = Number(input.shift());

        actorStartPts += (currJudge.length * currJudgePts) / 2;

        if (actorStartPts > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorStartPts.toFixed(1)}!`);
            break;

        }
    }
    if (actorStartPts < 1250.5) {
        let needMore = 1250.5 - actorStartPts;
        console.log(`Sorry, ${actorName} you need ${needMore.toFixed(1)} more!`);

    }
}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);