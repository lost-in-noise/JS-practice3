"use strict";

// // 1.15
// // მასივის შექმნა
// let myArray = [5, 25, 89, 120, 36];

// // მასივის ბოლოში ორი ელემენტის დამატება
// myArray.push("javascript", "python");

// // მასივის დასაწყისში html და css ელემენტების დამატება
// myArray.unshift("html", "css");

// // ელემენტების რაოდენობის დაბეჭდვა
// console.log("მასივში არის " + myArray.length + " ელემენტი");

// // პირველი და ბოლო ელემენტის წაშლა
// myArray.shift();
// myArray.pop();

// // ახალი ელემენტების დაბეჭდვა
// console.log("ახალი ელემენტები: " + myArray);


// // 2.15
// // მასივის შექმნა
// let fruits = ["ფორთოხალი", "ბანანი", "მსხალი"];

// // ელემენტების რაოდენობის დაბეჭდვა
// console.log("მასივში არის " + fruits.length + " ელემენტი");

// // მასივის ბოლოში ორი ელემენტის დამატება: ვაშლი და ანანასი
// fruits.push("ვაშლი", "ანანასი");

// // მასივის დასაწყისში ელემენტის დამატება: საზამთრო
// fruits.unshift("საზამთრო");

// // ელემენტების რაოდენობის დაბეჭდვა
// console.log("მასივში არის " + fruits.length + " ელემენტი");

// // მე-3 ადგილას ელემეტის დამატება: მანგო
// fruits.splice(2, 0, "მანგო");

// // პირველი და ბოლო ელემენტის წაშლა
// fruits.shift();
// fruits.pop();

// // დარჩენილი ელემენტების რაოდენობის დაბეჭდვა
// console.log("დარჩენილი ელემენტების რაოდენობა: " + fruits.length);


// // 3.15
// let array = [1, 2, 3, 4, 5];

// let newElements = ['a', 'b', 'c'];

// array.splice(3, 0, ...newElements);

// console.log(array); // [1, 2, 3, 'a', 'b', 'c', 4, 5]


// // 6.15

// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//         console.log("num1 is the largest");
//     } else if (num2 > num1) {
//         console.log("num2 is the largest");
//     } else {
//         console.log("error");
//     }
// }

// // პარამეტრებად გადაეცემა ორი რიცხვი
// compareNumbers(10, 5);  // Output: num1 is the largest
// compareNumbers(3, 8);   // Output: num2 is the largest
// compareNumbers(7, 7);   // Output: error


// // 7.15
// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array.map(item => item / 3);

// console.log(newArray);


// // 9.15
// let array = [2, 15, 10, 24];

// array.splice(2, 1);

// console.log(array);