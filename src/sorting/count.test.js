const countSort = require('./count')

test('it should sort an array of numbers using count sort', () => {
    const data = [2, 2, 2, 4, 1, 2, 6, 8, 7, 2, 22, 112, 112, 76, 112, 9, 0, 0, 1, 3, 1, 2]
    const clone = [...data]

    const result = countSort(data)

    expect(result).toEqual([...data].sort((a, b) => a - b))
    expect(result).not.toEqual(clone)
})


test('it should return an empty array if no data is provided', () => {
    const result = countSort()

    expect(result).toHaveLength(0)
})