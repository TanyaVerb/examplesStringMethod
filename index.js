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
console.log(num.toString());

let arr = [1, 2, 3, 4];
arr.toString();
console.log(arr.toString());

console.log((5).toString());
console.log(Math.floor(5.1));

console.group("Math.floor");
console.log(window.Math);
console.log(window.Math.floor(5.1));
console.log(window.Math.floor(-5.1)); //-6
console.log(window.Math.floor(5.9)); //5
console.groupEnd();

// flor -округляет в меньшую сторону

// ceil -

console.log(window.Math.ceil(-5.1)); //-5
console.log(window.Math.ceil(-5.9)); //-5
console.log(window.Math.ceil(5.1)); //6
console.log(window.Math.ceil(5.9)); //6

//round -до ближайшего целого
console.group("Math.round");
console.log(window.Math.round(-5.1)); //-5
console.log(window.Math.round(-5.9)); //-6
console.log(window.Math.round(-5.5)); //-5
console.log(window.Math.round(5.1)); //6
console.log(window.Math.round(5.5)); //6
console.log(window.Math.round(5.9)); //6
console.groupEnd();

//trunc -удаляет дроби без округления
console.group("Math.trunc");
console.log(window.Math.trunc(-5.1)); //-5
console.log(window.Math.trunc(-5.9)); //-6
console.log(window.Math.round(-5.5)); //-5
console.log(window.Math.round(5.1)); //6
console.log(window.Math.round(5.5)); //6
console.log(window.Math.round(5.9)); //6
console.groupEnd();

// number.toFixed(n) от 0 до 20
//фиксирует количество знаков после

console.log(num.toFixed());
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(5));
// console.log(num.toFixed(-1)) ranggeError

//64-битный формат используется
console.log((5).toString(2)); //101 - 3 бита

//неточные вычисления
let num1 = 0.1;
let num2 = 0.2; // компьютер делит на бесконечность
console.log(num1 + num2); //0.30000000000000004, погрешность, если значение переваливает за 64 бита, то он
//потеря точности связано с системой хранения
//чтобы не привышать это значение (64 бита), то движок округляет
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
console.log(isNaN([123])); // fulse,
console.log(isNaN(["123"])); // fulse/ преобразует к число,
console.log(isNaN([1, 2])); // true/ преобразует к NaN, так как не воспринимает запятую
console.groupEnd();

//isFinite
console.group("isFinite");
console.log(isFinite(123)); // false
console.log(isFinite("123")); // false
console.log(isFinite("123.12331")); // false,
console.log(isFinite("123,12331")); // false,
console.log(isFinite("hello")); // true,
console.log(isFinite("123hello")); // false,
console.log(isFinite("")); //  true
console.log(isFinite(false)); // true,
console.log(isNaN(true)); // true,
console.log(isNaN(null)); // false,
console.log(isNaN(NaN)); // false,
console.log(isNaN(NaN)); // false,
console.log(isNaN(undefined)); // false,
console.log(isNaN([123])); // true,
console.log(isNaN(["123"])); // true/ преобразует к число,
console.log(isNaN([1, 2])); // false/ преобразует к NaN, так как не воспринимает запятую
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
console.log(parseInt("12d")); //123
console.log(parseInt("12d3vvvvv")); //12
console.log(parseInt("n12d3vvvvv")); //NaN
console.log(parseInt(["123"])); //123
console.log(parseInt(["123hello"])); //123
console.log(parseInt(["123hello", "hello"])); //123
console.log(parseInt("32.333")); //32
console.log(parseInt(".233")); //NaN
console.log(parseInt("false")); //NaN
console.log(parseInt(false)); //NaN
console.log(parseInt(true)); //NaN
console.log(parseInt("")); //NaN
console.log(parseInt(null)); //NaN

console.groupEnd();
console.group("parseFloat");
console.log(parseFloat("12d")); //123
console.log(parseFloat("12d3vvvvv")); //12
console.log(parseFloat("n12d3vvvvv")); //NaN
console.log(parseFloat(["123"])); //123
console.log(parseFloat(["123hello"])); //123
console.log(parseFloat(["123hello", "hello"])); //123
console.log(parseFloat("32.333")); //32
console.log(parseFloat(".233")); //0.233
console.log(parseFloat("false")); //NaN
console.log(parseFloat(false)); //NaN
console.log(parseFloat(true)); //NaN
console.log(parseFloat("")); //NaN
console.log(parseFloat(null)); //NaN

console.groupEnd();

//Math.max()

console.group("Math.max()");
console.log(Math.max(3, 5, 8, 9, -1));
console.log(Math.max(NaN, 5, 8, 9, -1)); //NaN
console.log(Math.max(3, 5, 8, 9, -1, "hello")); //NaN
console.log(Math.max(3, 5, 8, 9, -1, 200, true, false, null)); //200
console.groupEnd();

console.group("Math.min()");
console.log(Math.max(3, 5, 8, 9, -1)); //-1
console.log(Math.max(NaN, 5, 8, 9, -1)); //NaN
console.log(Math.max(3, 5, 8, 9, -1, "hello")); //NaN
console.log(Math.max(3, 5, 8, 9, -1, 200, true, false, null)); //-1
console.groupEnd();

//Math.random()
console.log(Math.random); // посмотреть  на сайте MDM примеры, функции

//__________________________________________________________________

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
