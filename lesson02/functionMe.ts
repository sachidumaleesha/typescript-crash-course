function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string): string{
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean){
    return true
}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {
}

const sayHello = (s: string): string => {
    return ""
}

addTwo(2)
getUpper('diwan')
signUpUser('diwan', 'diwan@google.com', '1234', true)
loginUser('admin', 'admin@gmail.com')

const heros = ['thor', "spiderman", 'batman', 'superman']
const data = [1, "2", true]

heros.map(hero => {
    return `Hero is ${hero}`
})

// only accept string value and only return string value
heros.map((hero: string): string => {
    return `Hero is ${hero}`
})


export{}