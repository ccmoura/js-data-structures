class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

module.exports = class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let current = this.root
        
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i)
            let trieNode = current.children[char]

            if(!trieNode) {
                trieNode = new TrieNode()
                current.children[char] = trieNode
            }
            current = trieNode
        }

        current.endOfWord = true
    }

    search(word) {
        let current = this.root

        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i)
            let trieNode = current.children[char]

            if(!trieNode) {
                return false
            }
            
            current = trieNode
        }

        return current.endOfWord
    }

    remove(word) {
        const removeRecursively = (current, word, index) => {
            if (index === word.length) {
                if (!current.endOfWord) {
                    return false
                }

                current.endOfWord = false

                return !Object.keys(current.children).length
           }

           const ch = word.charAt(index)
           const trieNode = current.children[ch]

           if(!trieNode) {
                return false
           }

           const shouldDeleteCurrentNode = removeRecursively(trieNode, word, index + 1)

           if(shouldDeleteCurrentNode) {
                delete current.children[ch]

                return !Object.keys(current.children).length
           }

           return false
        }

        removeRecursively(this.root, word, 0)
    }
}
