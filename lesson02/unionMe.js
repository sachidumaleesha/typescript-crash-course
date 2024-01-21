var score = 44;
score = 4;
score = 'google';
var diwan = { name: "diwan", id: 1 };
diwan = { username: "diwansachidu", id: 2 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }
getDbId(2);
getDbId("2");
function getDbId(id) {
    if (typeof id === 'string') {
        id.toUpperCase();
    }
}
var data1 = [1, 2, 3, 4, 5];
var data2 = ['1', '2', '3', '4', '5'];
var data3 = [1, 2, '3', '4', true];
var data4 = [1, 2,];
// This above line (line 37) accept only one of this type
var seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = 'gg' this can't be done
