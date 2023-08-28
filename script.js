"use strict";

// // 1.15
// // მასივის შექმნა
let myArray = [5, 25, 89, 120, 36];

// // მასივის ბოლოში ორი ელემენტის დამატება
myArray.push("javascript", "python");

// // მასივის დასაწყისში html და css ელემენტების დამატება
myArray.unshift("html", "css");

// // ელემენტების რაოდენობის დაბეჭდვა
console.log("მასივში არის " + myArray.length + " ელემენტი");

// // პირველი და ბოლო ელემენტის წაშლა
myArray.shift();
myArray.pop();

// // ახალი ელემენტების დაბეჭდვა
console.log("ახალი ელემენტები: " + myArray);

