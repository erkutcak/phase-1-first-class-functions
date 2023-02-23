function receivesAFunction (a) {
    return a();
}

function returnsANamedFunction () {
    return function b () {}
}

function returnsAnAnonymousFunction () {
    return function () {}
}