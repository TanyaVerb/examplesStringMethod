console.log(1);
 

// push - возвращает длину массива

Array.prototype.push()

/* 
Array.prototype.push()
'Array.prototype.pop()'
'Array.prototype.splice()'
'Array.prototype.slice()'
'Array.prototype.concat()'
'Array.prototype.forEach()'

*/

console.group('Array.prototype.push()')

let testArrayPush = [ 1,2,3,4,5]
console.log('before push')
console.log(testArrayPush.push(7))
console.log('after push',testArrayPush);
console.groupEnd()

console.group('Array.prototype.pop()')

let testArrayPop = [ 1,2,3,4,5]
console.log('before pop')
console.log(testArrayPush.pop())
console.log(testArrayPush.pop(7))
console.log('after pop',testArrayPush);
console.groupEnd()
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//возвращает удаленные элементы
console.group('Array.prototype.splice()')
let testArraySplice = [ 1,2,3,4,5]
console.log('before splice')
// console.log(testArraySplice.splice())//возвращает пустой массив
// console.log(testArraySplice.splice(0))//возвращает с первого элемента по каждому элементу в массиве, удалит все элементы
// console.log(testArraySplice.splice(1))//возвращает со второго элемента по каждому элементу в массиве, удалит все элементы
// console.log(testArraySplice.splice(-1))// удаляет последний
// console.log(testArraySplice.splice(5))// ничего не удалит, так как больше длины массива
// console.log(testArraySplice.splice(0,0))// ничего не удалит, []
// console.log(testArraySplice.splice(0,1))// 
// console.log(testArraySplice.splice(0,22))// удалит все
// console.log(testArraySplice.splice(0,1,'replace item'))// 
// console.log(testArraySplice.splice(0,2,'replace item'))// 
// console.log(testArraySplice.splice(0,2,'replace item','replace item' ))// 
console.log(testArraySplice.splice(1,0,'add item1','add item2' ))// 
console.log('after splice',testArraySplice);
console.groupEnd()
// _________________________________________________________
//возвращает новый массив (создает поверхностную копию, объект - коптрует ссылкку)
// console.group('Array.prototype.slice()')
// let testArraySlice = [ 1,2,3,4,5, {name: 'Vlad'}]
// console.log('before slice')
// console.log('return value', newArray = testArraySlice.slice(), newArray === testArraySlice)//false
// console.log('return value',  testArraySlice.slice(0))
// console.log('return value',  testArraySlice.slice(-2))
// console.log('return value',  testArraySlice.slice(6))//
// console.log('return value',  testArraySlice.slice(0,5))//(6) [1, 2, 3, 4, 5, {…}]
// console.log('return value',  testArraySlice.slice(0,2))// 1,2
// console.log('return value',  testArraySlice.slice(0,0))// 
// console.log('return value',  testArraySlice.slice(1,-1))// (4) [2, 3, 4, 5]
// console.log('return value',  testArraySlice.slice(4,-3))//пустой массив

// console.log('after slice',testArraySlice);
// console.groupEnd()

// console.log(testArraySlice.at(-1).name = 'Alina')
// console.log(newArray[0] = 'Hello')
// console.log(testArraySlice)
// console.log(newArray)
//_______________________________________________________________
console.group('Array.prototype.concat()')
let testArrayConcat1 = [ 1,2,3,4,5, {name: 'Vlad'}]
let testArrayConcat2 = [ 6,7,8,9,0, {name: 'Alina'}]
console.log('before concat1',testArrayConcat1)
console.log('before concat2',testArrayConcat2)

// console.log('return value',  testArrayConcat.concat(testArrayConcat2))
// console.log('return value',  testArrayConcat.concat(testArrayConcat2,'add item',101, {car:"BMW"}))
// console.log('return value',  testArrayConcat.concat(testArrayConcat2,[101]))
console.log('return value',  testArrayConcat1.concat(testArrayConcat2,[[101]]))

console.log('after concat1',testArrayConcat1);
console.log('after concat2',testArrayConcat2);
console.groupEnd()
// _____________________________________________________________

//'Array.prototype.forEach()'
// console.group('Array.prototype.forEach()')
// let testArrayForEach = [ 1,2,3,4,5, {name: 'Vlad'}]// 6 элементов

// testArrayForEach.forEach((element, index, array)=>{
// console.log(element)
// console.log(index)
// console.log(array)
// if (index==2) return;
// if (index==1) array.push(7); // последний элемент будет {}
// if (index==1) array.splice(index +1,1); // 
// if (index==1) array.splice(index +1,0, 'add item'); // пробежался не больше первоначальной длины, последний не проитерирован
//возвращает всегда undefined
//element = element+2 игнорируется
// if (typeof element !='object'){
//     array[index] = Math.pow(element,2)
// }else
// element.name = 'Alina'
 
// })

// console.log('before ForEach',testArrayForEach)
// console.groupEnd()


//'Array.prototype.find()'
console.group('Array.prototype.find()')
let testArrayFind = [ 1,2,3,4,5, {name: 'Vlad'}]
testArrayFind.find((element, index, array)=>{
    if (typeof element!=='number')
        return true  
    
   
})


console.log('before find',testArrayFind)
console.log('after find',testArrayFind)
console.groupEnd()
// _____________________________________________________________________
const usersw = [
    {id:1, name: 'Vlad'},
    {id:1, name: 'Петя'},
    {id:1, name: ''},
    {id:1, name: 'Дима'},
]

function foo(userList, targetName){
  const foundObj = userList.find((element)=>!element.name)
  foundObj.name = targetName
        
       
    }
 
foo (usersw, 'Тоня')
console.log(usersw)

function foo(){

}