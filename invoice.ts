type Invoice = {
    number: string
    shippingAddress: string
    billingAddress: string
    details: { desc: string; amount: number }[]
    total: number
}

const emptyInvoice: Invoice = {
    number: "",
    shippingAddress: "",
    billingAddress: "",
    details: [],
    total: 0,
}

function produceInvoice(customerId: number, orderId: number): Invoice {
    return pipe(
        emptyInvoice,
        nextNumber(2022),
        addressInfo(customerId),
        detailsFor(orderId),
        computeTotal(),
    )
}

function nextNumber(year: number): Endo<Invoice> {
    // fetch next unique number
    const n = 42
    return (x) => ({ ...x, number: `${n}-${year}` })
}

function addressInfo(customerId: number): Endo<Invoice> {
    // fetch customer and preferences data
    const customer = {
        name: "John",
        shippingAddress: "anything",
        billingAddress: "different",
    }
    const preferences = { useSameAddressForBilling: true }

    return cond(
        preferences.useSameAddressForBilling,
        combineMany(
            billingAddress(customer.shippingAddress),
            shippingAddress(customer.shippingAddress),
        ),
        combineMany(
            billingAddress(customer.billingAddress),
            shippingAddress(customer.shippingAddress),
        ),
    )
}

function billingAddress(address: string): Endo<Invoice> {
    return (x) => ({ ...x, billingAddress: address })
}

function shippingAddress(address: string): Endo<Invoice> {
    return (x) => ({ ...x, shippingAddress: address })
}

function detailsFor(orderId: number): Endo<Invoice> {
    // fetch order and products data
    return (x) => ({
        ...x,
        details: [
            { desc: "post-it", amount: 10 },
            { desc: "markers", amount: 50 },
        ],
    })
}

function computeTotal(): Endo<Invoice> {
    return (x) => ({
        ...x,
        total: x.details.map((x) => x.amount).reduce((x, y) => x + y),
    })
}
