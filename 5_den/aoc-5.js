const input = `            [C]         [N] [R]    
[J] [T]     [H]         [P] [L]    
[F] [S] [T] [B]         [M] [D]    
[C] [L] [J] [Z] [S]     [L] [B]    
[N] [Q] [G] [J] [J]     [F] [F] [R]
[D] [V] [B] [L] [B] [Q] [D] [M] [T]
[B] [Z] [Z] [T] [V] [S] [V] [S] [D]
[W] [P] [P] [D] [G] [P] [B] [P] [V]
 1   2   3   4   5   6   7   8   9 

move 4 from 9 to 6
move 7 from 2 to 5
move 3 from 5 to 2
move 2 from 2 to 1
move 2 from 8 to 4
move 1 from 6 to 9`;

const data = input.split("\n");
console.log(data[0])
//3 znaky dat + jedna mezera ,,, (delka / 3) = karel,,,, karel - 1 = mezery
let charArray = [];
let row = [];
let arrayLength = data[0].length;

for (let i = 1; i < arrayLength; i+=4) {
    row = [];
    for (let j = 0; j < 8; j++) {
        row.push(data[j][i])
    }
    charArray.push(row.reverse())
}
console.log(charArray)

let countOfItems;
let fromRow;
let destinationRow;

let map;

for (let i = 10; i < data.length; i++) {
    map = data[i].split(" ");
    console.log(map)
    countOfItems = Number(map[1]);
    fromRow = Number(map[3]);
    destinationRow = Number(map[5]);
    
    for (let j = 0; j < countOfItems; j++) {
        console.log("test" + charArray[fromRow].slice(0,-1))
    }
}
console.log("------" + data[10])