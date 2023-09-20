function receivesAFunction(callback) {
    (callback());
    return "receives a function and calls it"
};

function returnsANamedFunction() {
    return function divide (num1, num2) {
        num1 / num2};
    };

function returnsAnAnonymousFunction () {
    return function () {
        return "returns an anonymous function"
    }}