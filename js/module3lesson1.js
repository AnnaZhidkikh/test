/**
 * Example 1 - Основы обьектов
 * Напиши скрипт, который, для объекта user, последовательно:
 * добавляет поле mood со значением 'happy'
 * заменяет значение hobby на 'skydiving'
 * заменяет значение premium на false
 * выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */

//const key = prompt('Please type a object key')

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//     'Denis Mescheryakov': 'Hello'
// };
// user.mood = 'happy';
// user['hobby'] = 'skydiving'
// user.premium = false;
// //console.log(user)
// //console.log(user[key]);
// // const keys = Object.keys(user)
// // console.log(keys)

// // for (let key of keys) {
// //     console.log(user[key])
// // }
// for (let key in user)
// console.log(user[key])

/**
 * Example 2 - метод Object.values()
 * У нас есть объект, в котором хранятся зарплаты нашей команды. 
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
 * Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
 */

//  const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// const values = Object.values(salaries)
// let sum = 0
// for (let val of values) {
//     sum += val
// }
// console.log(sum)

/**
 * Example 3 - Массив объектов
 * Напишите ф-цию calcTotalPrice(stones, stoneName), 
 * которая принимает массив обьектов и строку с названием камня. 
 * Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
 */
//  const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Бриллиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];
// function calcTotalPrice(stones, stoneName = '') {
//     //проверяем stone массив или нет
//     if (Array.isArray(stones) === false) return 'Error'
//     if (stoneName.length === 0) return 'Error' //ничего не было передано
//     //тоже самое что if (!stoneName) return 'Error' //ничего не было передано
    
// let total = 0
// for (let stone of stones) {
//     console.log(stone)
//     if (stone.name === stoneName) {
//         total = stone.price * stone.quantity
//         break
//         //return total
//     }
// }
// console.log(total)
// return total
// }

// const stoneTotalPrice = calcTotalPrice(stones, 'Щебень')
// console.log(stoneTotalPrice)

/**
 * Example 4
 * Реализуйте функцию `compare(firstNumber, secondNumber, operation, result)`, которая
 * - производит операцию `operation` над числами `firstNumber` и `secondNumber`
 * полученное число сравнивает с переменной `result`
 * возвращает результат этого сравнения.
 * 
 * compare("1", "2", "+", "3"); // true
 * 
 * Ограничения на входные данные
 * `firstNumber`, `secondNumber`, `result` - могут быть как типа Number так и String. 
 * Переменные типа String при преобразовании к числовому формату всегда будут валидным числом.
 * `operation` - строка c одной из 4 математических операций: +,-,*,/
 */

// const STATUSES = {
//     1: 'Success',
//     0: 'Error'
// }

function compare(firstNumber = 0, secondNumber = 0, operation = '+', result = 0) {
    const num1 = Number(firstNumber)
    const num2 = Number(secondNumber)
    const res = Number(result)
//вводим словарь
    const operationsDic = {
        '+': function(a, b) { return a + b }, //console.log('function +')
        '-': function(a, b) { return a - b },
        '*': function(a, b) { return a * b },
        '/': function(a, b) { return a / b }
    }
    //console.log(operationsDic['+'])
//console.log(operationsDic[operation](num1, num2))
    if ((operation in operationsDic) === false) return 'Error' //проверяем есть ли операция в словаре операций
    if (isNaN(num1) || isNaN(num2) || isNaN(res)) return 'Error'

    const operationResult = operationsDic[operation](num1, num2) //operationsDic - назва обьекту, [operation]-ключ, ()-вызов функции которая есть внутри, num1 и num2 - аргументы, которые будут переданы в эту функцию
    //console.log('operationResult', operationResult)
    //operationsDic[operation]
    //operationsDic['*']
    //operationsDic['+']
    return operationResult === res
    // if (operation === '+') {
    //     return num1 + num2 === res
    // }
    // switch(operation) {
    //     case'+':
    //         return num1 + num2 === res
    // }
}

const res = compare("1", "2", "+", "3")
console.log(res)