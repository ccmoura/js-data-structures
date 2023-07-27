const BinarySearchTree = require('./binary-search-tree')

test('it should create a binary search tree with five nodes', () => {
    const binarySearchTree = new BinarySearchTree()

    binarySearchTree.insert(20)
    binarySearchTree.insert(10)
    binarySearchTree.insert(30)
    binarySearchTree.insert(50)
    binarySearchTree.insert(0)

    
    expect(binarySearchTree._root.value).toBe(20)
    expect(binarySearchTree.search(10).value).toBe(10)
    expect(binarySearchTree.preOrderTraversal()).toHaveLength(5)
})

test('it should remove all nodes from binary search tree', () => {
    const binarySearchTree = new BinarySearchTree()

    binarySearchTree.insert(20)
    binarySearchTree.insert(10)
    binarySearchTree.insert(30)
    binarySearchTree.insert(100)
    binarySearchTree.insert(90)
    binarySearchTree.insert(50)
    binarySearchTree.insert(0)

    binarySearchTree.remove(10)
    binarySearchTree.remove(0)
    binarySearchTree.remove(50)
    binarySearchTree.remove(30)
    binarySearchTree.remove(100)
    binarySearchTree.remove(90)
    binarySearchTree.remove(20)

    expect(binarySearchTree.preOrderTraversal()).toHaveLength(0)
})

test('it should remove root from binary search tree', () => {
    const binarySearchTree = new BinarySearchTree()

    binarySearchTree.insert(20)
    binarySearchTree.insert(10)
    binarySearchTree.insert(30)
    binarySearchTree.insert(25)

    binarySearchTree.remove(20)

    expect(binarySearchTree.search(20)).toBeNull()
    expect(binarySearchTree.preOrderTraversal()).toHaveLength(3)
})

test('it should return null while removing in an empty tree', () => {
    const binarySearchTree = new BinarySearchTree()

    const result = binarySearchTree.remove(20)

    expect(result).toBeNull()
})

test('it should return null while searching in an empty tree', () => {
    const binarySearchTree = new BinarySearchTree()

    const result = binarySearchTree.search(20)

    expect(result).toBeNull()
})

test('it should return null if value not exists on tree', () => {
    const binarySearchTree = new BinarySearchTree()

    binarySearchTree.insert(10)
    const result = binarySearchTree.search(1)

    expect(result).toBeNull()
})

test('it should find value 10 in the second level of the tree', () => {
    const binarySearchTree = new BinarySearchTree()

    binarySearchTree.insert(1)
    binarySearchTree.insert(2)
    binarySearchTree.insert(10)


    const result = binarySearchTree.search(10)

    expect(result.value).toBe(10)
})
