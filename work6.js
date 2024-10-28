// завдання 1 (лінійний алгоритм)
const cities = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']
const needCity = String(prompt("Введи місто, яке ти шукаєш"))

let index1 = -1
for (let i = 0; i < cities.length; i++) {
    if (cities[i] === needCity) {
        index1 = i 
        break
    }
}

console.log("Лінійний пошук: " + index1 + " у масиві [" + cities + "]")

//завдання 2 (бінарний алгоритм)


const numbers = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]
const needNum = Number(prompt("Введи цифру, яка тобі потрібна"))

let startInd = 0
let endInd = numbers.length - 1
let index2 = -1

while (startInd <= endInd) {
    const center = Math.round((startInd + endInd) / 2)
    
    if (numbers[center] === needNum) {
        index2 = center
        break
    } else if (numbers[center] < needNum) {
        startInd = center + 1
    } else {
        endInd = center- 1
    }
}

console.log("Бінарний пошук: " + index2 + " у масиві [" + numbers + "]")