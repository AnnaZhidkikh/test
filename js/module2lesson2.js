/**
 * TODO Example 7 - Сортировка массива с циклом
 * Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.
*/

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const ua = ['б', 'а', 'е', 'ж', 'в', 'д'];
// const numbers = [2, 1, 5, 7, 3, 9];

// // #1 [2, 1, 5, 7, 3, 9]
// // #2 [1, 2, 5, 3, 7, *9]
// // #3 [1, 2, 3, 5, *7, *9]
// // #3 [1, 2, 3, *5, *7, *9]

// // endI - граница основного цикла, это всегда длина массива - 1
// // endJ - граница вложенного массива минус текущая итерация основного цикла

// for (let i = 0, endI = numbers.length - 1; i < endI; i += 1) {
//    // console.log(i);
//    // #1 ======
//    // i === 0
//    // endI === 5
//    // 2# =====
//    // i === 1
//    // endI === 5
//    // 3# =====
//    // i === 2
//    // endI === 5
//    console.log('===================')
//    console.log('i', i, 'endI', endI)
//    console.log('-------------------')
//    let wasSwap = false;
//    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
//     console.log('j', j, 'endJ', endJ)
//     if (numbers[j] > numbers[j + 1]) {
//         [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
//         wasSwap = true;
//     // #1 ======
//     // j === 0
//     // endJ === 5
//     // #2 ======
//     // j === 1
//     // endJ === 4
//     // #3 ======
//     // j === 2
//     // endJ === 3
//     //console.log(j);
//  }
// }
// if (wasSwap === false) break;
//     console.log('===================')
// }

// console.log(numbers)

 /**
 * Example 2 - Меньшее из чисел
 * Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
 */
// function min(a, b) {
//    const num1 = Number(a)
//    const num2 = Number(b)

//    if (isNaN(num1) || isNaN(num2)) return "Має бути число"
//    return Math.min(num1, num2)
// }
// const res1 = min(1, 3)
// const res2 = min('3', -1)
// console.log(res1)
// console.log(res2)

/**
 * Example 3 - Логирование элементов
 * Напиши функцию logItems(items), которая получает массив и использует цикл for, 
 * который для каждого элемента массива будет выводить в консоль сообщение 
 * в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
 * 
 * Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] 
 * с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
 */

// function logItems(arr) {
//     if (Array.isArray(arr) === false) return 'Має бути масив'
//     if (arr.length === 0) return

//     for (let i = 0; i < arr.length; i += 1) {
//     console.log(i + 1, arr[i])
//     }
// }
// const items = ['Mango', 'Poly', 'Ajax']

// logItems(items)

/**
 * Example 4 - Среднее значение
 * Напишите функцию calAverage() которая принимает произвольное кол-во аргументов
 * и возвращает их среднее значение. 
 * Все аругменты будут только числами.
 */

//  function calAverage() {
//      if (arguments.length === 0) return

//      let sum = 0

//     //  for (let i = 0; i < arguments.length; i +=1) {
//     //      sum +=arguments[i]
//     //  }
//     for (let num of arguments) {
//     sum += num
//  }
//      return sum / arguments.length
// можно было написать const avg = sum arguments.length ; return avg;
//  }
// console.log(calAverage(1, 2, 44, 5, 6))

/**
 * Example 5 - Коллекция курсов (includes, indexOf, push и т. д.)
 * Напишите функции для работы с коллекцией обучающих курсов courses:
 * addCourse(name) - добавляет курс в конец коллекции
 * removeCourse(name) - удаляет курс из коллекции
 * updateCourse(oldName, newName) - изменяет имя на новое
 */

 const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

 function addCourse(name) {
     if (name.length === 0) return 'Має бути рядок'
     if (courses.includes(name)) return 'Вже є в колекціЇ'

     courses.push(name)
     console.log(courses)
     return courses;
 }

//  addCourse('VUE')
//  console.log(addCourse('HTML'))

 function removeCourse(name) {
     if (name.length === 0) return 'Має бути рядок'
     if (courses.includes(name) === false) return 'Такого курсу немає в колекції'

     const index = courses.indexOf(name)
     courses.splice(index, 1)
     console.log(courses)
     return courses
 }
// removeCourse('HTML')

function updateCourse(oldName, newName) {
    if (oldName.length === 0 || newName.length === 0) return 'Має бути рядок'
    if (courses.includes(oldName) === false) return 'Такого курсу нема в колекції'

    const index = courses.indexOf(oldName) // 0
    courses.splice(index, 1, newName) // 
    console.log(courses)
    return courses
}

// updateCourse('HTML', 'html')