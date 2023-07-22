const insertionSort = require('./insertion')

test('it should sort an array of numbers using insertion sort', () => {
    const data = [5, 1, 23, 51, 214, 0, 2, 18]
    const clone = [...data]

    insertionSort(data)

    expect(data).toEqual([...data].sort((a, b) => a - b))
    expect(data).not.toEqual(clone)
})

test('it should return an empty array if no data is provided', () => {
    const result = insertionSort()

    expect(result).toHaveLength(0)
})