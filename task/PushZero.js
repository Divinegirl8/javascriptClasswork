let ZeroFunction = (values) => {
    let newArray = [];
    values.forEach((value) => {
        if (value === 0) {
            newArray.push(value);
        }
    });
    return newArray;
}

let NonZeroFunction = (values) => {
    let newArray = [];
    values.forEach((value) => {
        if (value !== 0) {
            newArray.push(value);
        }
    });
    return newArray;
}

let combineResults = (values) => {
    let nonZeroResult = NonZeroFunction(values);
    let zeroResult = ZeroFunction(values);

    zeroResult.forEach((value) => {
        nonZeroResult.push(value);
    });

    return nonZeroResult;
};


module.exports = {combineResults};


