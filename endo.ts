// FP Jargon
// https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md

// nLab - Math Wiki
// https://ncatlab.org/nlab/show/endomorphism

type Endo<T> = (n: T) => T

// Endo - constructor functions
function addOne(): Endo<number> {
    return (x) => x + 1
}

function adder(n: number): Endo<number> {
    return (x) => x + n
}

function constant(n: number): Endo<number> {
    return (x) => n
}

function id<T>(): Endo<T> {
    return (x) => x
}

// Endo - combination functions

// custom
function cond<A>(test: boolean, onThen: Endo<A>, onElse: Endo<A>): Endo<A> {
    return test ? onThen : onElse
}

// Semigroup
// binary associative function
function combine<A>(first: Endo<A>, second: Endo<A>): Endo<A> {
    return (x) => second(first(x))
}

// Monoid
// neutral element (Endo)
function empty<T>(): Endo<T> {
    return id<T>()
}

// Foldable
function combineMany<T>(...endos: Endo<T>[]): Endo<T> {
    return endos.reduce(combine, empty<T>())
}

function pipe<T>(init: T, ...endos: Endo<T>[]): T {
    return combineMany(...endos)(init)
}
