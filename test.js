const flat = require('./index');

test('should flat a multidimentional array of numbers', () => {
    const result = flat([[1,2,[3]],4])
    expect(result).toEqual([1,2,3,4]);
});

test('should flat a multidimentional array of strings', () => {
    const result = flat([['a','b',['c']],'d'])
    expect(result).toEqual(['a','b','c','d']);
});

test('should flat a multidimentional array of objects', () => {
    const result = flat([[{ name: 'Jhon'},{ age: 20 },[{ city: 'New York '}]], { degree: false }]);
    expect(result).toEqual([{ name: 'Jhon'}, { age: 20 },{ city: 'New York '}, { degree: false }]);
});

test('should return array with the element passed if element passed is not an array', () => {
    const resultA = flat('Jhon');
    expect(resultA).toEqual(['Jhon']);

    const resultB = flat(1);
    expect(resultB).toEqual([1]);

    const resultC = flat({ role: 'Admin' });
    expect(resultC).toEqual([{ role: 'Admin' }]);
});