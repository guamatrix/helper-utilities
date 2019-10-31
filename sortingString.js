function sortString(value) {
    if (!value || typeof value !== 'string') {
        return 'Invalid input';
    }
    valueFormated = value.toLowerCase()
    const valToSort = value.split('').slice(1);
    let valSorted = [value[0]];
    valToSort.forEach(val => {
        const positionToInsert = valSorted.findIndex(vSorted => vSorted.localeCompare(val) === 1);
        if (positionToInsert === -1) {
            valSorted.push(val);
        } else {
            if (positionToInsert === 0) {
                valSorted = [val, ...valSorted]
            } else {
                valSorted =  [...valSorted.slice(0, positionToInsert), val, ...valSorted.slice(positionToInsert)];
            }
        }
    })
    return valSorted.join();
}
