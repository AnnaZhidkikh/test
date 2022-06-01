console.log('Hello world!')

// Example 1 - Базовые математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

const apple = 100;
const grapes = 50;
const totalSum = apple + grapes;
console.log(totalSum);

const diff = apple - grapes;
console.log(diff);

// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором.

let students = 132;
students = students + 10; //students += 10;
console.log(students);

// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

const result = 100 + 223 - 2 * 5;
console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

const value = 25.5;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value)); // по стандартным правилам округления

//Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const sum = repairBots + defenceBots;
// Cyberdyne Systems has 200 bots in stock
const str = companyName + " " + "has" + " " + sum + " " + "bots in stock";
console.log(str);

const str2 = `${companyName} has ${sum} bots in stock`;
console.log(str2);
// "" '' - для строки можно использовать любые из этих кавычек

 /* Example 6 - Методы строк и чейнинг
 * Напиши скрипт который рассчитывает индекс массы тела человека.
 * Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
 *
 * Вес и высота хранятся в переменных weight и height,
 * но не как числа, а в виде строк (специально для задачи).
 * Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
 *
 * Индекс массиы тела необходимо округлить до одной цифры после запятой; */

 const weight = '88,7';
 const height = '1.75';

// indexOf
 const weightCom = weight.indexOf(',');
 console.log(weightCom);
 const weightFirstPart = weight.slice(0, weightCom);
 console.log(weightFirstPart);
 const weightLastPart = weight.slice(weightCom + 1);
 console.log(weightLastPart);
 console.log(`${weightFirstPart}.${weightLastPart}`);

 //replace, replaceAll
 const fixedWeight = weight.replace(',', '.');
 console.log(fixedWeight);
 const fixedHeight = height.replace(',', '.');

 const weightNum = Number(fixedWeight);
const heightNum = Number(fixedHeight);
console.log(weightNum);
console.log(heightNum);

//Math.pow - возведение в степень, в данном случае в квадрат
const bmi = (weightNum / Math.pow(heightNum, 2)).toFixed(2);
console.log(bmi);
//toFixed возвращает строку, чтобы сделать число нужно 
console.log(Number(bmi));
// Либо же сделать так
//const bmi = Number((weightNum / Math.pow(heightNum, 2)).toFixed(2));
//console.log(bmi);

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?
console.log(5 > 4); //true
console.log(10 >= '7'); //true
console.log('2' > '12'); //true потому что сравниваются первые символы строки 2>1
console.log('2' < '12'); //false
console.log('4' == 4); //true потому что не строгое равенство, 4 приравнивается к числу
console.log('6' === 6); //false потому что проверяются типы 
console.log('false' === false); //false 
console.log(1 == true); //true, если преобразовать true к числу это будет 1
console.log(1 === true); //false, сравниваются типы
console.log('0' == false); //false, так как '0' - строка 
console.log('0' === false); //false
console.log('Papaya' < 'papaya'); //true по unicodeview проверка
console.log('Papaya' === 'papaya'); //false
console.log(undefined == null); //true, так как два значения false дадут true 
console.log(undefined === null); //false

// Example 8 - Логические операторы
// Каким будет результат выражений?

console.log(true && 3); //3
console.log(false && 3); //false, оператор &&d валится на false, останавливается на значении false и возвращает значение false
console.log(true && 4 && 'kiwi'); //kiwi
console.log(true && 0 && 'kiwi'); //0
console.log(true || 3); //true, оператор || останавливается на первом true 
console.log(true || 3 || 4); //true
console.log(0 || '' || false); //false, вернет последнее false 
console.log(null || 2 || undefined); // 2 - любое число больше 0 в булевом варианте будет true
console.log((1 && null && 2) > 0); // null - это false, сравниваем теперь null > 0, будет false
// (2 && 3) => 3, 2-true, 3-true, возвращает последнее true 
console.log(null || (2 && 3) || 4); //3 - первое true это 3