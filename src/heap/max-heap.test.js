const MaxHeap = require('./max-heap')

test('it should create a heap and return all nodes in descending order', () => {
    const heap = new MaxHeap()

    heap.add(12)
    heap.add(345)
    heap.add(63)
    heap.add(12)
    heap.add(95)
    heap.add(1325)
    heap.add(352)

    const list = []

    while(heap.size()) {
        list.push(heap.poll())
    }

    expect(isDescending(list)).toBeTruthy()
})

test('it should return null when polling an empty heap', () => {
    const heap = new MaxHeap()

    const node = heap.poll()

    expect(node).toBeNull()
})

const isDescending = (list) => list.every((element, index) => index === 0 || element <= list[index - 1])