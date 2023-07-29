const Trie = require('./trie')

test('it should create a trie with 4 words', () => {
    const trie = new Trie()

    trie.insert('sam')
    trie.insert('bill')
    trie.insert('sarah')
    trie.insert('lucy')

    
    expect(trie.search('sam')).toBeTruthy()
    expect(trie.search('bill')).toBeTruthy()
    expect(trie.search('sarah')).toBeTruthy()
    expect(trie.search('lucy')).toBeTruthy()

    expect(trie.search('lucian')).toBeFalsy()
})

test('it should remove a word from trie successfully', () => {
    const trie = new Trie()

    trie.insert('sam')
    trie.insert('bill')
    trie.insert('sarah')
    trie.insert('lucy')

    trie.remove('sarah')
    trie.remove('lucy')

    
    expect(trie.search('sam')).toBeTruthy()
    expect(trie.search('bill')).toBeTruthy()

    expect(trie.search('lucy')).toBeFalsy()
    expect(trie.search('sarah')).toBeFalsy()
})

test('it should not remove when the word is not in the trie', () => {
    const trie = new Trie()

    trie.insert('lucy')

    trie.remove('lucian')
    
    expect(trie.search('lucy')).toBeTruthy()
})

test('it should keep the original trie when removing an empty word', () => {
    const trie = new Trie()

    trie.remove('')
    
    expect(Object.keys(trie.root.children)).toHaveLength(0)
    expect(trie.root.endOfWord).toBeFalsy()
})
