function bonusScoringSystem(data) {

    let numOfStudents = Number(data.shift());
    let numOfLectures = Number(data.shift());
    let bonus = Number(data.shift());

    let highestBonus = 0;
    let mostLectures = 0;

    for (let i = 0; i < numOfStudents; i++) {
        let curAttendances = Number(data[i])

        let bonusCalc = curAttendances / numOfLectures * (5 + bonus);

        if (bonusCalc > highestBonus) {
            highestBonus = bonusCalc;
            mostLectures = curAttendances;
        }
    }
    console.log(`Max Bonus: ${Math.round(highestBonus)}.`);
    console.log(`The student has attended ${mostLectures} lectures.`);
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);