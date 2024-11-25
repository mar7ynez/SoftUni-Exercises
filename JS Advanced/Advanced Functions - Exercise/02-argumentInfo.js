function argumentInfo(...args) {
    let argReg = {};

    for (let arg of args) {
        console.log(`${typeof arg}: ${arg}`);

        if (!argReg.hasOwnProperty(typeof arg)) {
            argReg[typeof arg] = 0;
        }
        argReg[typeof arg]++;
    }

    Object.entries(argReg)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => console.log(`${key} = ${value}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });