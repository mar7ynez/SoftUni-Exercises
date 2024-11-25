function cars(data) {
    let carReg = {};

    for (let curData of data) {
        if (curData.includes('inherit')) {
            let [, name, , parentObj] = curData.split(' ');
            carReg[name] = Object.create(carReg[parentObj]);

        } else if (curData.includes('create')) {
            let [, name] = curData.split(' ');
            carReg[name] = {};

        } else if (curData.includes('set')) {
            let [, name, key, value] = curData.split(' ');
            carReg[name][key] = value;

        } else {
            let [, name] = curData.split(' ');
            let props = [];

            for (let key in carReg[name]) {
                let prop = `${key}:${carReg[name][key]}`;
                props.push(prop);
            }
            console.log(props.join(','));
        }
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
