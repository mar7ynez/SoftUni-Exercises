function matchFullName(names) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validatedNames = names.match(pattern)

    console.log(validatedNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");