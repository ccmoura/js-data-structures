class BinarySearchTree {
    constructor() {
        this._root = null
        this.left = null;
        this.right = null;
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
}
