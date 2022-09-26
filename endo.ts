type Endo<T> = (n: T) => T

// Endo - common constructor functions
function constant(n: number): Endo<number> {
    return (x) => n
}

function id<T>(): Endo<T> {
    return (x) => x
}

// Endo - combination functions

// combine - if
function cond<A>(test: boolean, onThen: Endo<A>, onElse: Endo<A>): Endo<A> {
    return test ? onThen : onElse
}

// Semigroup
// combine - two
function combine<A>(first: Endo<A>, second: Endo<A>): Endo<A> {
    return (x) => second(first(x))
}

// Monoid
// combine - neutral
function empty<T>(): Endo<T> {
    return id<T>()
}

// combine - many
function pipe<T>(seed: T, ...endos: Endo<T>[]): T {
    return endos.reduce(combine, empty<T>())(seed)
}
