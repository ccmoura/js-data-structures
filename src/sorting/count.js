const countSort = (data) => {
    if(!Array.isArray(data)) {
        return []
    }

    const hash = {}
    data.forEach(item => {
        hash[item] = hash[item] ? hash[item] + 1 : 1
    })

    const result = []
    for (const key in hash) {
        for (let i = 0; i < hash[key]; i++) {
            result.push(parseInt(key))
        }
    }

    return result
}

module.exports = countSort
