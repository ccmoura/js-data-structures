module.exports = class BinarySearchTree {
    constructor() {
        this._root = null
    }

    insert(value) {
        const insertNode = (node, newNode) => {
            if(newNode.value < node.value) {
                if(node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }

        const node = { left: null, right: null, value }
        if(this._root === null) {
            this._root = node
        } else {
            insertNode(this._root, node)
        }
    }

    remove(value) {
        if(!this._root?.left && !this._root?.right && this._root?.value === value) {
            const removed = this._root
            this._root = null
            return removed
        }

        const removeRecursively = (root, value) => {
            const findMin = (root) => {
                while (root.left !== null) {
                    root = root.left
                }
                return root
            }
            
            if(!root || root.value === null) {
                return null
            } else if (value < root.value) {
                root.left = removeRecursively(root.left, value)
            } else if (value > root.value) {
                root.right = removeRecursively(root.right, value)
            } else {
                if(!root.left && !root.right) {
                    return null
                } else if (!root.left) {
                    root = root.right
                    return root
                } else if (!root.right) {
                    root = root.left
                    return root
                } else {
                    const temp = findMin(root.right)
                    root.value = temp.value
                    root.right = removeRecursively(root.right, temp.value)
                    return root
                }
            }
            
            return root
        }

        return removeRecursively(this._root, value)
    }

    search(value) {
        if(!this._root) {
            return null
        }

        const searchRecursively = (root, value) => {
            if(value === root.value) {
                return root
            } else if (value < root.value) {
                if (!root.left) {
                    return null
                }

                return searchRecursively(root.left, value)
            } else {
                if (!root.right) {
                    return null
                }

                return searchRecursively(root.right, value)
            }
            
        }

        return searchRecursively(this._root, value)
    }

    preOrderTraversal() {
        if(!this._root) {
            return []
        }
        
        const traversal = []

        const preOrderTraversalHelper = (node) => {
            traversal.push(node.value)
            if(node.left) preOrderTraversalHelper(node.left)
            if(node.right) preOrderTraversalHelper(node.right)
            
        }

        preOrderTraversalHelper(this._root)

        return traversal
    }
}
