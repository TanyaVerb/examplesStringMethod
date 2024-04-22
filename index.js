//Задача 1
//задача на использование метода indexOf()

let str1 = "Ни справа, ни слева, ни в воде, ни на берегу никого не было";

let word = "ни";

function countOccurrences(text, word) {
  let text1 = text.toLowerCase();
  let word1 = word.toLowerCase();
  let count = 0;
  let position = 0;

  while ((position = text1.indexOf(word1, position)) !== -1) {
    count++;
    position += word1.length;
  }

  return count;
}

console.log(countOccurrences(str1, word));

//Вариант 2 (более подходящий)
function countOccurrences(text, word) {
  let count = 0;
  let index = text.indexOf(word);
  while (index !== -1) {
    count++;
    index = text.indexOf(word, index + 1);
  }
  return count;
}

// Задача 2
//Поиск подстроки в строке с использованием цикла

let str2 = "Ни справа, ни слева, ни в воде, ни на берегу никого не было";

function findAllOccurrences(text, searchText) {
  let text1 = text.toLowerCase();
  let searchText1 = searchText.toLowerCase();
  let occurrences = [];
  let index = text1.indexOf(searchText1);

  while (index !== -1) {
    occurrences.push(index);
    index = text.indexOf(searchText1, index + 1);
  }
  console.log(index);
  return occurrences;
}

console.log(findAllOccurrences(str2, "ни")); //(5) [0, 11, 21, 32, 45] -возвращает массив индексов всех вхождений в строке.

//Задача 3
//Проверка наличия всех символов строки в другой строке

const stringTask2_1 = "!@#$.T"; //символы должны быть в пароле (5 символов)
// const stringTask2_2 = "Cat!@#$.";
const stringTask2_3 = "!321312dadaaada!@#$.T";

function checkAllCharactes(str1, str2) {
  const requiredSymbolLength = str1.length;
  let counter = 0; // не может быть больше 5
  for (let char of str1) {
    if (!str2.includes(char)) {
      console.log("checkAllCharactes", false);
      return false;
    } else {
      console.log("checkAllCharactes", true);
      counter++;
    }
    return counter === requiredSymbolLength;
  }
}

console.log(checkAllCharactes(stringTask2_1, stringTask2_3));

//Задача 4
// Разделение строки на подстроки фиксированной длины

// let str10 = "Ни справа, ни слева, ни в воде, ни на берегу никого не было";

// function splitIntoChunks(str, chunkSize) {
//   const chunks = [];
//   for (let i = 0; i < str.length; i += chunkSize) {
//     chunks.push(str.substring(i, i + chunkSize));
//   }
//   return chunks;
// }

// let chunkSize = 5;
// const chunks = splitIntoChunks(str10, chunkSize);
// console.log(chunks); //

//_____________________________________________________
//Задача 4
// Разделение строки на подстроки фиксированной длины

let str10 = "Ни справа, ни слева, ни в воде, ни на берегу никого не было";
function splitIntoChunks2(str, length) {
  const substrArray = [];
  for (let i = 0; i < str.length; i += length) {
    substrArray.push(str.slice(i, i + length));
  }

  return substrArray;
}

console.log(splitIntoChunks2(str10, 5));

//Задача 6
//Фильтрация сообщений

const badWords = ["Собака", "Петух", "Козель"];

const userIncorrectMessage = "Эй ты, Петух. Я сказал Петух";
const userCorrectMessage = "Эй ты, Чел!";

function filterMessage(message) {
  let filtredMessage = message;

  for (let word of badWords) {
    filtredMessage = filtredMessage.replaceAll(word, "*".repeat(word.length));
  }
  return filtredMessage;
}

console.log(filterMessage(userIncorrectMessage)); // 'Эй ты, *****'
console.log(filterMessage(userCorrectMessage)); // 'Эй ты, Чел!'

//Задача 5
//Нахождение минимального и максимального слова в массиве с учетом локали

let textArray = ["Привет", "Hello", "word", "дом", "javascript"];
// function findMinWord(array) {}
// function findMaxWord(array) {
//   let maxWord = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > maxWord) {
//       maxWord = array[i].length;
//     }
//   }
//   return maxWord;
// }

// console.log(findMaxWord(textArray));

function findMaxWord2(arr) {
  let maxWord = "";
  for (let word of arr) {
    if (word.localeCompare(maxWord) == 1) {
      maxWord = word;
    }
  }
  return maxWord;
}

console.log(findMaxWord2(textArray));

// ___________________________________________________

let str01 = "Nfhrysl";
let str02 = "мвеВапр";
let str03 = "мвеВапр";

str01.localeCompare(str02);
console.log(str01.localeCompare(str02)); //1
console.log(str02.localeCompare(str01)); //-1
console.log(str02.localeCompare(str03)); //0

const addTextBtn = document.querySelector(".btn");
const textUser = document.querySelector(".data");
console.log(textUser);
const result = document.querySelector(".text");
console.log(result);

addTextBtn.addEventListener("click", function (e) {
  let data = filterMessage(textUser.value);
  result.innerHTML = data;
});

//Методы чисел

// toString приводит массив к строке
//в двоичной системе 5,, toString(2) //'101'
// Math -метод в глобальном oбъекте
//

let num = 5.12345;
console.log(num.toString()); // строка 5.12345

let arr = [1, 2, 3, 4];
arr.toString();
console.log(arr.toString()); // строка 1,2,3,4

console.log((5).toString()); // строка 5
console.log(Math.floor(5.1)); // число 5

console.group("Math.floor");
console.log(window.Math);
console.log(window.Math.floor(5.1)); //5
console.log(window.Math.floor(-5.1)); //-6
console.log(window.Math.floor(5.9)); //5
console.groupEnd();

// flor -округляет в меньшую сторону

// ceil -округляет в большую сторону

console.log(window.Math.ceil(-5.1)); //-5
console.log(window.Math.ceil(-5.9)); //-5
console.log(window.Math.ceil(5.1)); //6
console.log(window.Math.ceil(5.9)); //6

//round -до ближайшего целого
console.group("Math.round");
console.log(window.Math.round(-5.1)); //-5
console.log(window.Math.round(-5.9)); //-6
console.log(window.Math.round(-5.5)); //-5
console.log(window.Math.round(5.1)); //5
console.log(window.Math.round(5.5)); //6
console.log(window.Math.round(5.9)); //6
console.groupEnd();

//trunc -удаляет дроби без округления
console.group("Math.trunc");
console.log(window.Math.trunc(-5.1)); //-5
console.log(window.Math.trunc(-5.9)); //-5
console.log(window.Math.round(-5.5)); //-5
console.log(window.Math.round(5.1)); //5
console.log(window.Math.round(5.5)); //6
console.log(window.Math.round(5.9)); //6
console.groupEnd();

// number.toFixed(n) от 0 до 20
//фиксирует количество знаков после (строка)

console.log(num.toFixed()); //5
console.log(num.toFixed(0)); //5
console.log(num.toFixed(1)); //5.1
console.log(num.toFixed(5)); //5.12345
// console.log(num.toFixed(-1)) ranggeError

//64-битный формат используется
console.log((5).toString(2)); //101 - 3 бита

//неточные вычисления
let num1 = 0.1;
let num2 = 0.2; // компьютер делит на бесконечность
console.log(num1 + num2); //0.30000000000000004, погрешность, если значение переваливает за 64 бита, то он
//потеря точности связано с системой хранения
//чтобы не превышать это значение (64 бита), то движок округляет
//0.1 + 0.2 ===0.3 - false
// (0.1 + 0.2).toFixed(1) === 0.3.toFixed(1)//true

//isNaN
console.group("isNaN");
console.log(isNaN(123)); // false, т к 123- число
console.log(isNaN("123")); // false,
console.log(isNaN("hello")); // true,
console.log(isNaN("123hello")); // true,
console.log(isNaN("")); // false, пустую строку можно преобразовать в число
console.log(isNaN(false)); // false,
console.log(isNaN(true)); // false,
console.log(isNaN(null)); // false,
console.log(isNaN(NaN)); // true,
console.log(isNaN(undefined)); // true,
console.log(isNaN([123])); // false,
console.log(isNaN(["123"])); // false/ преобразует к число,
console.log(isNaN([1, 2])); // true/ преобразует к NaN, так как не воспринимает запятую
console.groupEnd();

//isFinite
console.group("isFinite");
console.log(isFinite(123)); // true
console.log(isFinite("123")); // true
console.log(isFinite("123.12331")); // true,
console.log(isFinite("123,12331")); // false,
console.log(isFinite("hello")); // false,
console.log(isFinite("123hello")); // false,
console.log(isFinite(" ")); //  true,пустую строку можно преобразовать в число
console.log(isFinite(false)); // true,false можно преобразовать в число
console.log(isFinite(true)); // true,true можно преобразовать в число
console.log(isFinite(null)); // true,true можно преобразовать в число
console.log(isFinite(NaN)); // false,
console.log(isFinite(Infinity)); // false,
console.log(isFinite(undefined)); // false,
console.log(isFinite([123])); // true / Number([123]) -> 123
console.log(isFinite(["123"])); // true / Number(['123']) -> 123
console.log(isFinite([1, 2])); // false / Number([1, 2]) -> NaN, так как не воспринимает запятую
console.groupEnd();

//Object.is сравнивает значения, NaN не равно NaN
//window.Object.is

console.group("Object.is");
Object.is(NaN, NaN); // true
Object.is(-0, 0); // false
Object.is("Root", "ROOT"); // false
Object.is("Root", "Root"); // true
console.groupEnd();

// parsInt parseFloat
console.group("parsInt");
console.log(parseInt("123")); //123
console.log(parseInt("12d3vvvvv")); //12
console.log(parseInt("n12d3vvvvv")); //NaN
console.log(parseInt(["123"])); //123
console.log(parseInt(["123hello"])); //123
console.log(parseInt(["123hello", "hello"])); //123
console.log(parseInt(["hello123", "hello"])); //NaN
console.log(parseInt(32.321)); //32
console.log(parseInt("32.321")); //32
console.log(parseInt(".23321")); //NaN
console.log(parseInt("false")); //NaN
console.log(parseInt(false)); //NaN
console.log(parseInt(true)); //NaN
console.log(parseInt("")); //NaN
console.log(parseInt(null)); //NaN
console.groupEnd();

console.group("parseFloat");
console.log(parseFloat("123")); //123
console.log(parseFloat("123vvvvv")); //123
console.log(parseFloat("1hello23")); //1
console.log(parseFloat("hello123")); //NaN
console.log(parseFloat(["123"])); //123
console.log(parseFloat(["123hello"])); //123
console.log(parseFloat(["123hello", "hello"])); //123
console.log(parseFloat("32.321")); //32.321
console.log(parseFloat(".23321")); //0.23321
console.log(parseFloat("false")); //NaN
console.log(parseFloat(false)); //NaN
console.log(parseFloat(true)); //NaN
console.log(parseFloat(" ")); //NaN
console.log(parseFloat(null)); //NaN
console.groupEnd();

//Math.max()

console.group("Math.max()");
console.log(Math.max(3, 5, 8, 200, -1)); //200
console.log(Math.max(NaN, 5, 8, 9, -1)); //NaN
console.log(Math.max(3, 5, 8, 9, -1, "hello")); //NaN
console.log(Math.max(3, 5, 10, 200, -1, "hello")); // NaN
console.log(Math.max(3, 5, 8, 9, -1, 200, true, false, null)); //200
console.groupEnd();

console.group("Math.min()");
console.log(Math.min(3, 5, 10, 200, -1)); // -1
console.log(Math.min(NaN, 3, 5, 10, 200, -1)); // NaN
console.log(Math.min("hello", 3, 5, 10, 200, -1)); // NaN
console.log(Math.min(3, 5, 10, 200, -1, "hello")); // NaN
console.log(Math.min(3, 5, 10, 200, -1, "", true, false, null)); // -1
console.groupEnd();

//Math.random()
console.log(Math.random); // посмотреть  на сайте MDM примеры, функции

//Получение случайного числа в заданном интервале
function getRandomArbitrary(min, max) {
  console.log(parseInt(Math.random() * (max - min) + min));
}
//__________________________________________________________________
//Получение случайного целого числа в заданном интервале

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

//____________________________________________________________________

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

//__________________________________________________________________
//Получение случайного целого числа в заданном интервале, включительно

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
//_________________________________________________________________________

//Задача
let users = [
  { id: 1, name: "Vlad" },
  { id: 2, name: "Anna" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Tema" },
  { id: 5, name: "Vlad" },
  { id: 6, name: "Dima" },
  { id: 7, name: "Tanya" },
];

console.log(users[0].name);

const fruitsUnique = Array.from(new Set(users));
console.log(fruitsUnique);
// function removeDuplicates(userList){
//   const newUserList = [];
//   for (let i = 0; i < userList.length; i++){
//     if (userList[i][j]!== userList[i][j])
//     newUserList.push(userList[i])
//   }

//  return newUserList
// }

// const newUserList

// собрать новый массив, убрать повторяющиеся

function removeDuplicateUsers(arr) {
  let uniqueNames = [];
  let filteredUsers = arr.filter((user) => {
    if (!uniqueNames.includes(user.name)) {
      uniqueNames.push(user.name);
      return true;
    }
    return false;
  });
  return filteredUsers;
}

let filteredUsers = removeDuplicateUsers(users);
console.log(filteredUsers);
//____________________________________________________________

function removeDuplicateUsers2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name === arr[j].name) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

let filteredUsers2 = removeDuplicateUsers2(users);
console.log(filteredUsers2);
//_____________________________________________________________________
function removeDuplicateUsers3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Object.is(arr[i].name, arr[j].name)) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

let filteredUsers3 = removeDuplicateUsers3(users);
console.log(filteredUsers3);
//_________________________________________________________________________
// Функция для удаления дубликатов по идентификатору
function removeDuplicates(users) {
  let uniqueUsers = [];
  users.forEach((user) => {
    // Проверяем, есть ли пользователь с таким же идентификатором в массиве uniqueUsers
    let duplicate = uniqueUsers.some((u) => Object.is(u.id, user.id));
    // Если пользователь уникальный, добавляем его в массив uniqueUsers
    if (!duplicate) {
      uniqueUsers.push(user);
    }
  });
  return uniqueUsers;
}
// Удаление дубликатов
let uniqueUsers = removeDuplicates(users);
// Вывод уникальных пользователей
console.log(uniqueUsers);
//______________________________________________________________________

//Вы пишете функцию, которая должна обновлять объект и возвращать результат изменения.
//Однако вам нужно убедиться, что объект действительно изменился. Используйте Object.is() для сравнения исходного объекта с его обновленной версией.

function updateObject(obj, key, value) {
  let originalObject = Object.assign({}, obj); // Создаем копию исходного объекта
  obj[key] = value; // Обновляем объект
  // Проверяем, изменился ли объект с помощью Object.is()
  let hasChanged = !Object.is(obj, originalObject);
  return hasChanged;
}

// Исходный объект
let obj = { key: "value" };

// Обновляем объект
let result_ = updateObject(obj, "key", "new value");
//___________________________________________________________
//ЗАДАЧА: Сравнение объектов с особыми значениями

// Объекты для сравнения
let person1 = { name: "Alice", age: 30 };
let person2 = { name: "Alice", age: 30 };

function checkIsEqual(obj1, obj2) {
  let isEqual = Object.is(obj1, obj2);

  // Выводим результат
  if (isEqual) {
    console.log("Объекты равны (ссылаются на один и тот же объект)");
  } else {
    console.log(
      "Объекты не равны (содержат одинаковые данные, но разные объекты)"
    );
  }
  return isEqual;
}

//Объекты не равны (содержат одинаковые данные, но разные объекты)
console.log(checkIsEqual((person1, person2))); //false
//_________________________________________________________________________
//ЗАДАЧА: Анализ пользовательского ввода
//Предположим, что у вас есть форма, в которую пользователь вводит свой возраст.
//Вам нужно проверить, является ли введенное значение числом, и если да, вывести сообщение об этом

// Получаем пользовательский ввод
// let userInput = prompt("Введите свой возраст:");
// // Преобразуем введенное значение в число с помощью parseFloat() и parseInt()
// let parsedFloat = parseFloat(userInput);
// let parsedInt = parseInt(userInput);
// // Проверяем, является ли введенное значение числом
// if (!isNaN(parsedFloat) && !isNaN(parsedInt)) {
//   // Если оба преобразования успешны, выводим сообщение об успешном вводе
//   console.log("Вы ввели числовое значение: " + parsedFloat);
// } else {
//   // Если хотя бы одно преобразование не удалось, выводим сообщение об ошибке
//   console.log("Ошибка! Введенное значение не является числом.");
// }
// ___________________________________________________________________________
//ЗАДАЧА: Расчет стоимости покупки

//Вы разрабатываете веб-приложение для онлайн-магазина и вам нужно преобразовать введенные пользователем цены товаров из строкового формата в числовой, чтобы выполнить расчет общей стоимости покупки.

// Введенные пользователем цены товаров
let price1 = "29.99 USD";
let price2 = "15.49 USD";
let price3 = "10.00 USD";
// Преобразуем цены товаров в числовой формат
let numericPrice1 = parseFloat(price1);
let numericPrice2 = parseFloat(price2);
let numericPrice3 = parseFloat(price3);

// Вычисляем общую стоимость покупки
let totalPrice = numericPrice1 + numericPrice2 + numericPrice3;
// Выводим результат
console.log("Общая стоимость покупки: " + totalPrice.toFixed(2) + " USD");
// метод toFixed(2) используется для округления результата до двух десятичных знаков, чтобы обеспечить правильный формат отображения стоимости.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_____________________Коллбэк функции_______________________________

let ar1 = [1, 2, 3, 4, 5];

function callb(arr, callback, callback2) {
  let result = [];
  let result2 = [];

  for (let elem in arr) {
    result.push(callback(arr[elem]));
    result2.push(callback2(arr[elem]));
  }
  console.log(result, result2);
}

function quadrat(num) {
  num = num ** 2;
  return num;
}

function cube(num) {
  num = num ** 3;
  return num;
}

// callb(ar1, quadrat); //(5) [1, 4, 9, 16, 25]
// callb(ar1, cube); //(5) [1, 8, 27, 64, 125]
callb(ar1, cube, quadrat); //(5) [1, 8, 27, 64, 125] (5) [1, 4, 9, 16, 25]
callb(ar1, quadrat, cube); //(5) [1, 4, 9, 16, 25] (5) [1, 8, 27, 64, 125]

//________________________________________________