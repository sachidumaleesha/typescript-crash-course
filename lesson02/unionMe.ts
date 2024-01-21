let score: number | string = 44

score = 4
score = 'google'

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let diwan: User | Admin = {name: "diwan", id: 1}

diwan = {username: "diwansachidu", id: 2}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }

getDbId(2)
getDbId("2")

function getDbId(id: number | string){
    if(typeof id === 'string'){
        id.toUpperCase()
    }
}

const data1: number[] = [1, 2, 3, 4, 5]
const data2: string[] = ['1', '2', '3', '4', '5']
const data3: (number | string | boolean)[] = [1 , 2, '3', '4', true]
const data4: number[] | string[] | boolean[] = [1 , 2,]
// This above line (line 37) accept only one of this type

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = 'aisle'
// seatAllotment = 'gg' this can't be done

export{}