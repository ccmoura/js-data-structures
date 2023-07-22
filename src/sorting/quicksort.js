const partition = (data, left, right) => {
    let pivot = data[Math.floor((right + left) / 2)]

    while (left <= right) {
        while (pivot > data[left]) {
            left++
        }

        while (pivot < data[right]) {
            right--
        }

        if(left <= right) {
            let temp = data[left]
            data[left] = data[right]
            data[right] = temp
            left++
            right--
        }
    }

    return left
}

const quicksortHelper = (data, left, right) => {
    let index
    
    if(data.length) {
        index = partition(data, left, right)

        if(left < index - 1) {
            quicksortHelper(data, left, index - 1)
        }

        if(index < right) {
            quicksortHelper(data, index, right)
        }
    }

    return data
}

const quicksort = (data) => {
    if(!Array.isArray(data)) {
        return []
    }

    return quicksortHelper(data, 0, data.length - 1)
}

module.exports = quicksort
