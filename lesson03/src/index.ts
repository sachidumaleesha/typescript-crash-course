class User{
    email: string
    name: string
    city: string = ""
    private readonly jobrole: string = ""
    constructor(email: string, name: string){
        this.email = email
        this.name = name
    }
}

const user = new User('diwan@gmail.com', 'Diwan Sachidu')
user.city = 'colombo'

// another way
class User2{

    protected _courseCount: number
    readonly city: string = ''

    constructor(public email: string, public name: string){
        this.email = email
        this.name = name
        this._courseCount = 1
        this.city = "Jaipur"
    }

    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(){
        return `apple${this.email}`
    }

    get courseCount(){
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class subUser extends User2 {
    changeCourseCount(){
        this._courseCount = 4
    }
}
