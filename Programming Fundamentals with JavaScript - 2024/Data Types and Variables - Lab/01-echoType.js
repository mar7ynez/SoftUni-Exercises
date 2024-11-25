function echoType(parameter) {

    let parameterType = typeof(parameter);

    console.log(parameterType);
    
    if (typeof(parameter) === 'string' || typeof(parameter) === 'number') {
        console.log(parameter);

    } else {
        console.log('Parameter is not suitable for printing');

    }
}

echoType(null);