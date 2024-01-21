// no specific corder to pass
const user1: (string | number)[] = [1, "diwan"]
const user2: (string | number)[] = ["diwan", 1]

let rgb: [number, number, number] = [255, 255, 255]

type User =  [number, string]

let newUser: User = [1, 'Diwan']

newUser[1] = "Sachidu"
newUser.push('Maleesha')