const insertionSort = (data) => {
    if(!Array.isArray(data)) {
        return []
    }

    let value, j;
    for (let i = 0; i < data.length; i++) {
        value = data[i]
        for (j = i - 1; j > -1 && data[j] > value; j--) {
            data[j + 1] = data[j]
        }
        data[j + 1] = value
    }

    return data
}

module.exports = insertionSort
