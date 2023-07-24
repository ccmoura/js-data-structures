class BinarySearchTree {
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
        if(!this._root.left && !this._root.right && this._root.value === value) {
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
            
            if(root === null) {
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
}
