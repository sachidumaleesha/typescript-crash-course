const user = {
    name: 'diwan',
    email: 'diwan@google.com',
    isActive: true
}

// worst thing in typescript
function createUser({name: string, isPaid: boolean}){
}

const userDetails = {name: 'diwan', isPaid: true, email: 'd@d.com'}

createUser(userDetails)

function createCourse():{name: string, price: number}{
    return {name:'next js', price: 499}
}


// Type Aliases

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUniqueUser(user: User){
    
}
 
createUniqueUser({name:'diwan', email:'d@google.com', isActive: true})


// Read Only

type UserDetails = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number //optional
}

const firstUser: UserDetails = {
    _id : '1234',
    name : 'diwan',
    email : 'diwan@gmail.com',
    isActive : true
}

// can't be done because it readonly property
// firstUser._id = '456'

// combination of types

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvvNumber: string
}

const dd : cardDetails = {
    cardnumber : '',
    cardDate : '',
    cvvNumber: ''
}

console.log(dd)

export{}