const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: string | number): string | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

// Same function as line number 12
function identityFour<T>(val: T): T{
    return val
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({brand: 'nike', type: 1})


// Dealing with generic arrays

function getSearchProducts<T>(products: T[]): T{
    // do some API calls
    return products[2]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some API Calls
    return products[4]
}

getSearchProducts([])

// 

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

//

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}