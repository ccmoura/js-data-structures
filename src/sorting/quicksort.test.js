const quicksort = require('./quicksort')

test('it should sort an array of numbers using quicksort', () => {
    const data = [5, 1, 23, 51, 214, 0, 2, 18]
    const clone = [...data]

    quicksort(data)

    expect(data).toEqual([...data].sort((a, b) => a - b))
    expect(data).not.toEqual(clone)
})

test('it should return an empty array when sorting empty array', () => {
    const data = []

    quicksort(data)

    expect(data).toHaveLength(0)
})

test('it should return an empty array if no data is provided', () => {
    const result = quicksort()

    expect(result).toHaveLength(0)
})