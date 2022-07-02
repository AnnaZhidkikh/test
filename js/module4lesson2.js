const cars = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
  ];

// Task#1
/* Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей */

const getModels = cars => {
     return cars.map((car) => car.model) // тоже самое что return cars.map(({ model }) => model)
 };
// console.log(getModels(cars))
// а можно записать без return 
//const getModels = cars => cars.map(({ model }) => model)

// Task#2
/* Пусть функция makeCarsWithDiscount возвращает новый массив объектов 
с измененным значением свойства price в зависимости от переданной скидки */

const makeCarsWithDiscount = (cars, discount) => {
    return cars.map((car) => {
        const { price } = car
        const newPrice = price - (price * discount) 
        
        return {
            ...car,
            price: newPrice
        }
    })
}
const newCarsArr = makeCarsWithDiscount(cars, 0.2)
//console.log(newCarsArr);

// Task #3
/* Пусть функция filterByPrice возвращает массив автомобилей цена которых 
меньше чем значение параметра threshold */

const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold)

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// Task #4
/* Пусть функция getCarsWithDiscount возвращает массив автомобилей 
свойство onSale которых true */

const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);
// console.table(getCarsWithDiscount(cars));

// Task #5
/* Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает 
со значением параметра type */

const getCarsWithType = (cars, type) => {
    return cars.filter(( { type: carType }) => carType === type)
}
// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// Task #6
const getCarByModel = (cars, model) => {
    return cars.find((car) => car.model === model)
};

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

const carIndex = cars.findIndex((car) => car.model === 'F-150')
// console.log(carIndex)

// Task #7
/* Пусть функция sortByAscendingAmount возвращает новый массив автомобилей 
отсортированный по возрастанию значения свойства amount */

const sortByAscendingAmount = cars => {
    //return [...cars].sort((prev, next) => prev.amount - next.amount)
    // тоже самое только с пом. slice
    return cars.slice().sort((prev, next) => prev.amount - next.amount)
};
//console.table(sortByAscendingAmount(cars));

// Task #8
/* Пусть функция sortByDescendingPrice возвращает новый массив
автомобилей отсортированный по убыванию значения свойства price. */

const sortByDescendingPrice = cars => {
    return [...cars].sort((prev, next) => next.amount - prev.amount)
};
//console.log(sortByDescendingPrice(cars));

// Task #9
/* Пусть функция sortByModel возвращает новый массив автомобилей
отсортированный по названию модели в алфавитном и обратном алфавитном порядке 
в зависимости от значения параметра order */

const sortByModel = (cars, order) => {
    const callbackDic = {
        asc(prev, next) {
        return prev.model.localeCompare(next.model)
        },
        desc(prev, next) {
            return next.model.localeCompare(prev.model)
        }
    }
    return [...cars].sort(callbackDic[order])
};
// console.log(sortByModel(cars, 'asc'));
// console.log(sortByModel(cars, 'desc'));

// Task #10
/* Пусть функция getTotalAmount возвращает общее количество
автомобилей (значение свойств amount) */

const getTotalAmount = cars => {
    return cars.reduce((acc, { amount }, i) => acc + amount, 0)
}
// console.log(getTotalAmount(cars))

// Task #11
// { 'CR-V': { ... }, 'Accord': {...} }

const carsObj = cars.reduce((acc, car) => {
    //console.log(acc)
    //acc[car.model] = { ...car }
    //return acc
    //або
    return { ...acc, [car.model]: { ...car } } 
}, {})
// console.log(carsObj)

// Task #12
/* Пусть функция getAvailableCarNames возвращает массив моделей
автомобилей, но только тех, которые сейчас на продаже */
const getModelsOnSale = cars => {
    return cars.filter(({ onSale }) => onSale)
    .map(({ model }) => model)
};

//console.table(getModelsOnSale(cars));


// Task #13
/* Пусть функция getSortedCarsOnSale возвращает массив автомобилей
на распродаже (свойство onSale), отсортированных по возрастанию цены */

const getSortedCarsOnSale = cars => {
    return [...cars].filter(({ onSale }) => onSale)
        .sort((prev, next) => prev.price - next.price)
};
//console.table(getSortedCarsOnSale(cars));

//some, every
