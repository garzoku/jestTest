const sum = require('./index')

test("adds 2 and 2", () => {
    const importedFunction = sum(2, 2)
    expect(importedFunction).toEqual(4)
})