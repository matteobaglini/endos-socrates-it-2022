# Endomorphisms (in Typescript) - SoCraTes IT 2022

Endomorphism is a term that derives from the Category Theory and basically translate into a function from one type to the same type:

```ts
const incr = (x: number): number => x + 1
```

More morphisms can be found here: https://github.com/hemanth/functional-programming-jargon/blob/master/readme.md#morphism

And here you can find more deeper (aka math) info on endomorphism: https://ncatlab.org/nlab/show/endomorphism

### Typescript implementation

The file `endo.ts` contains the endomorphism implementation in Typescript together with common construction and combination functions.

### Examples

The remaining files contain examples of use:

-   `index.ts`: very basic use just to sum numbers
-   `request.ts`: introduction to the idea of endos as data builder
-   `invoice.ts`: reach data builder demo
