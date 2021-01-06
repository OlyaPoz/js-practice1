'use strict';

/* Даны числа 4, -2, 5, 19, -130, 0, 10. 
Найдите минимальное и максимальное число.*/
function minNumb(arr) {
  let min = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

function maxNumb(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

//=====================
const arr = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max(...arr)); 
console.log(Math.min(...arr));

/* Дан массив arr. Найдите среднее арифметическое его элементов. 
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/

function arrayAverage(arr) {
  let sum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

/*Выведите на экран случайное целое число от 1 до 100. */
function getRandomInt() {
  return Math.floor(Math.random() * 101) + 1; 
};

/*Заполните массив 10-ю случайными целыми числами.*/
const randomArr = [];
for (let i = 1; i <= 10; i++){
  randomArr.push(Math.floor(Math.random() * 100) );
}

//==========================================

/*1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

/*2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/
const arr4 = [1, 2, 3];
console.log(arr4.reverse());

/*3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.  */
const arr5 = [1, 2, 3];
const arr6 = arr5.push(4, 5, 6);
console.log(arr5);

/*4.  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */
const arr7 = [1, 2, 3];
const arr8 = arr7.unshift(4, 5, 6);
console.log(arr7);

/*5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его. */
const arr9 = ['js', 'css', 'jq'];
const arr10 = arr9.shift();
console.log(arr10);
console.log(arr9);

/*6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.*/
const arr11 = ['js', 'css', 'jq'];
const arr12 = arr11.pop();
console.log(arr12);

/*7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в 
новый элементы [1, 2, 3]. */
const arr13 = [1, 2, 3, 4, 5];
const arr14 = arr13.slice(0, 3);
console.log(arr14);
/*8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в 
новый элементы [4, 5].*/
const arr15 = arr13.slice(3,5);
console.log(arr15);

/*9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice 
преобразуйте массив в [1, 4, 5]. */
const arr16 = [1, 2, 3, 4, 5];
const arr17 = arr16.splice(1, 2);
console.log(arr16);

/*10.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в 
новый массив элементы [2, 3, 4]. */
const arr18 = [1, 2, 3, 4, 5];
const arr19 = arr18.splice(1, 3);
console.log(arr19);

/*11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */
const arr20 = [1, 2, 3, 4, 5];
const arr21 = arr20.splice(3, 0, 'a', 'b', 'c');
console.log(arr20);

/*12.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте 
из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */
const arr22 = [1, 2, 3, 4, 5];
const arr23 = arr22.splice(1, 0, 'a', 'b') && 
arr22.splice(-2, 0, 'c') &&
arr22.splice(-1, 0, 'e');
console.log(arr22);

/*13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/
const arr24 = [3, 4, 1, 2, 7];
arr24.sort();
console.log(arr24);

/*14. Дан объект {js:'test', jq: 'hello', css: 'world'}.
 Получите массив его ключей.*/
 const obj = {
   js:'test', 
   jq: 'hello',  
   css: 'world'};
 console.log(Object.keys(obj));

 /*необходимо создать функцию hasElem, которая параметрами 
 будет принимать массив и строку, и возвращать true, 
 если строка есть в массиве, и false - если нет */

 function hasElem (array, string) {
   for (let i = 1; i < array.length; i++){
     if(array[i] === string){
       return true;
     }
     return false;
   }
 }
 const array1 = [1, 2, 3];
 const str = 'string';
 console.log(hasElem(array1, str));

 /*Дан массив с числами. Проверьте, что в этом массиве есть указанное число. 
 Если есть - вернуть true, а если нет - вернуть false.*/
 //const array2 = [1, 2, 3];
 console.log(hasElem(array1, 2));

 /*Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа
  подряд. Если есть -  вернуть true, а если нет - вернуть false.*/
  function myArr (arr) {
    for (let i = 1; i < arr.length; i++){
      if(arr[i] === arr[i - 1]){
        return true;
      }
      return false;
    }
  }
  console.log(myArr(array1));
  const array2 = [2, 2, 3];
  console.log(myArr(array2));