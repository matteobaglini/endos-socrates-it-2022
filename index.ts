// Endo constructor - no parameters
function addOne(): Endo<number> {
    return (x) => x + 1
}

// Endo constructor - with parameters
function adder(n: number): Endo<number> {
    return (x) => x + n
}

const value = pipe(100, adder(1), adder(2), adder(3))

console.log(value)
