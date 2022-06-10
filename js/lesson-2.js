// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

/*
const answer = prompt("Какое официальное название JavaScript?");
console.log(answer);

if (answer === ECMAScript) {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}
*/
//Example 2 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

//const answer = prompt('Enter a number');
// //console.log(answer);
//const num = Number(answer);
// console.log(num);
// if (num > 0) {
//     console.log("Это положительное число");
// } else if (num === 0) {
//     console.log("Это ноль");
// } else if (num < 0) {
//     console.log("Это отрицательное число");
// } можно еще записать это таким образом, скоращенная запись
//if (num >0) console.log("Это положительное число");
//else if (num === 0) console.log("Это ноль");
//else if (num < 0) console.log("Это отрицательное число");
//else console.log("Это не число");

// Example 3 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512

//const a = 120;
//const b = 180;
// if (true && true)  повертаеться останне true 
//if (a > 100 && b > 100) {
   // if (a > b) console.log(a)
  //  else console.log(b) можно упростить и записать так 
 // console.log(Math.max(a, b));
//}
//else {
//    console.log(b + 512);
//}

/**
 * Example 4 - Форматирование ссылки
 * Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
 * Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
 */

// let link = "https://test.com/users";
// console.log(link.lastIndexOf('/'));
// //console.log(link.includes('/', link.length - 1));
// //console.log(link.length - 1);
// //console.log(link.endsWith('/'));
// /// (false === false) =>true
// if (link.endsWith('/') === false) { // а можно записать if (!link.endsWith('/')
//     link += '/';
// }
// console.log(link);

/** Example 5 - Форматирование ссылки (тернарный оператор)
 * Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.
 */

//  let link = "https://test.com/users";
//  //link = !link.endsWith('/') ? link + '/' : link;  //або
//  link = link[link.length - 1] !== '/' ? link + '/' : link;
//  console.log(link);
//  //тернарный для того чтобы вызвать переменную и тернарный обязательно что-то возвращает

 /**
 * Example 6 - Дедлайн сдачи проекта (switch)
 * Выполни рефакторинг кода используя switch.
 */

//  const daysUntilDeadline = 5;

//   if (daysUntilDeadline === 0) {
//       console.log('Сегодня');
//   } else if (daysUntilDeadline === 1) {
//       console.log('Завтра');
//   } else if (daysUntilDeadline === 2) {
//       console.log('Послезавтра');
//   } else {
//       console.log('Дата в будущем');
//   }

//   switch (daysUntilDeadline) {
//       case 0:
//           console.log('Сегодня');
//           break;
//       case 1:
//           console.log('Завтра');
//           break;
//       case 2:
//           console.log('Послезавтра');     
//           break;
          
//        default:
//         console.log('Дата в будущем');
//   }

  // admin, user, support

// const USER_TYPE = 'asdas'

// switch(USER_TYPE) {
//     case 'admin': // можно объединять
//     case 'support':
//         console.log('admin or support')
//         break;
//     default:
//         console.log('user')
// }

/**
 * Example 7 - Цикл for
 * Вывести к консоль каждый символ из строки
 */
// const str = "Hello World";
// for (let i = 0; i < str.length; i += 1) {
//         console.log(str[i])
//     }

/**
 * Example 8 - Цикл for
 * Напишите скрипт который на основе строки "Hello World" 
 * создаст новую строку которая будет содержать исходную строку в виде юникод символов
 */

// const str = "Hello World";
// let res = '';
// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === ' ') {
//         res += str[i];
//         continue;
//     }
//          res += str[i].charCodeAt();
// }
// console.log(res);

/**
 * Example 9 - Цикл for
 * Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.
 */

//  const max = 100;
//  const min = 20;

//  for (let i = min; i <= max; i +=1) {
//     if ((i % 5) === 0) {
//     console.log(i);
//     }
//  }
