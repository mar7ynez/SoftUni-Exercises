function highJump(input) {

    let jumpTarget = Number(input.shift());

    let startPoint = jumpTarget - 30;
    let jumpCounter = 0;
    let jumpFail = 0;

    while (jumpTarget >= startPoint) {
        let currentJump = Number(input.shift());
        jumpCounter++;

        if (currentJump > startPoint) {
            jumpFail = 0;
            startPoint += 5;

        } else {
            jumpFail++;

        }
        if (jumpFail === 3) {
            console.log(`Tihomir failed at ${startPoint}cm after ${jumpCounter} jumps.`);
            break;

        }
    }
    
    if (jumpTarget < startPoint) {
        console.log(`Tihomir succeeded, he jumped over ${startPoint - 5}cm after ${jumpCounter} jumps.`);

    }
}
highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);