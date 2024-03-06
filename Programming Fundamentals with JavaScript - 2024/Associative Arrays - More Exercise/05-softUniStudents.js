function softUniStudents(data) {

    let softUniRegister = {};
    let courseNameAndCapacity = {};

    for (let info of data) {
        if (info.includes(':')) {
            let [courseName, courseCapacity] = info.split(': ');

            if (!courseNameAndCapacity.hasOwnProperty(courseName)) {
                courseNameAndCapacity[courseName] = 0;
                softUniRegister[courseName] = [];

            }
            courseNameAndCapacity[courseName] += Number(courseCapacity);

        } else if (info.includes('with email')) {
            let [userData, courseData] = info.split(' with email ');
            let [username, coursePoints] = userData.replace(']', '').split('[');
            let [userMail, courseName] = courseData.split(' joins ');

            if (courseNameAndCapacity.hasOwnProperty(courseName)) {
                if (courseNameAndCapacity[courseName] > 0) {
                    courseNameAndCapacity[courseName]--;

                    softUniRegister[courseName].push({
                        user: username,
                        credits: coursePoints,
                        email: userMail,
                    });
                }
            }
        }
    }
    for (let [courseName, studentData] of Object.entries(softUniRegister).sort((a, b) => b[1].length - a[1].length)) {
        console.log(`${courseName}: ${courseNameAndCapacity[courseName]} places left`);

        studentData.sort((a, b) => b.credits - a.credits).forEach(course => {
            console.log(`--- ${course.credits}: ${course.user}, ${course.email}`);

        });
    }
}
softUniStudents(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']);