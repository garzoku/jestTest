const sayHello = require('./index')

test("say hello", () => {
    expect(sayHello()).toEqual("Hello")
})