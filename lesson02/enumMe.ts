const enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

// by default it start from the 0 and increment by 1
// If we want we can initialize value by our own
// we can initialize number | string both at one

// enum SeatChoice{
//     AISLE = 10,
//     MIDDLE, by default 11
//     WINDOW, by default 12
//     FOURTH, by default 13
// }

// enum SeatChoice{
//     AISLE = 'aisle',
//     MIDDLE = 10,
//     WINDOW, by default 11
//     FOURTH, by default 12
// }

// This is wrong ⬇️
// enum SeatChoice{
//     AISLE = 10,
//     MIDDLE = 'middle',
//     WINDOW,
//     FOURTH
// }

const hcSeat = SeatChoice.AISLE