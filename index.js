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
