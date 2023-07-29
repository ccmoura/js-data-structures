module.exports = class MaxHeap {
    nodes = []

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChildIndex(index) {
        return index * 2 + 1
    }

    rightChildIndex(index) {
        return index * 2 + 2
    }

    parent(index) {
        return this.nodes[this.parentIndex(index)]
    }

    leftChild(index) {
        return this.nodes[this.leftChildIndex(index)]
    }

    rightChild(index) {
        return this.nodes[this.rightChildIndex(index)]
    }

    size() {
        return this.nodes.length
    }

    swap(firstIndex, secondIndex) {
        const temp = this.nodes[firstIndex]
        this.nodes[firstIndex] = this.nodes[secondIndex]
        this.nodes[secondIndex] = temp
    }

    add(node) {
        this.nodes.push(node);
        this.heapifyUp();
    }

    poll() {
        if(this.size() === 0) {
            return null
        }

        const node = this.nodes[0]
        this.nodes[0] = this.nodes[this.size() - 1]
        this.nodes.pop()
        this.heapifyDown()

        return node
    }

    heapifyUp() {
        let index = this.size() - 1;
        
        while (this.parentIndex(index) >= 0 && this.parent(index) < this.nodes[index]) {
            this.swap(this.parentIndex(index), index)
            index = this.parentIndex(index)
        }
    }

    heapifyDown() {
        let index = 0
        while (this.leftChildIndex(index) < this.size()) {
            let largerChildIndex = this.leftChildIndex(index)

            if (this.rightChildIndex(index) < this.size() && this.rightChild(index) > this.leftChild(index)) {
                largerChildIndex = this.rightChildIndex(index)
            }

            if (this.nodes[index] > this.nodes[largerChildIndex]) {
                break
            } else {
                this.swap(index, largerChildIndex)
            }

            index = largerChildIndex
        }
    }
}
