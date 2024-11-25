function extractEmails(text) {

    let pattern = /(?<=\s)[A-Za-z0-9]+[\.\-\_]?[A-Za-z0-9]*@[A-Za-z\-]+[\-]?[A-Z-a-z]*[\.]?[A-Za-z]*\.[A-Za-z]+\b/mg;
    let validEmails = text.match(pattern);

    console.log(validEmails.join('\n'));
}
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-qual --123@gmail.com ity training @ home or @ class. –- steve.parker@softuni.de.');