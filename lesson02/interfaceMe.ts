interface User{
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

interface User{
    githubToken: string
}

interface Admin extends User{
    role: 'admin' | 'ta' | 'learner'
}

const diwan: Admin = {
    dbId: 22,
    email: "h@h@gmail.com",
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "coupon99x", off: 10) => {
        return 10
    }
}

diwan.email = 'diwan@gmail.com'
// diwan.dbId = '44' It is readonly