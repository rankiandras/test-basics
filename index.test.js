const search = require('./index')

const mockDb = ['catfish2', 'carp-fish2', 'grasscarp2', 'eel-fish2', 'crucian carp2', 'pike2', 'shark2', 'seabass2', 'barracuda2']


it('this is my first test', () => {
    expect('hello').toEqual('hello')
    search(mockDb, 'fish')
})

it('real search with empty result', () => {
    expect(search(mockDb, 'yyyy')).toEqual([])
})

it('real search with fish keyword, expected non empty array as result', () => {
    expect(search(mockDb, 'fish')).toEqual(['catfish2', 'carp-fish2', 'eel-fish2'])
})

it('real search with fish keyword, expected non empty array as result', () => {
    expect(search(mockDb, 'carp')).toEqual(['carp-fish2', 'grasscarp2', 'crucian carp2',])
})