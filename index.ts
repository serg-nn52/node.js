// console.log(process.argv);

// Задача 1

// const a: number = +process.argv[2];
// const operand: string = process.argv[3];
// const b: number = +process.argv[4];
// let result: number = 0;
// switch (operand) {
//   case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "*":
//     result = a * b;
//     break;
//   case "/":
//     result = a / b;
//     break;
// }
// console.log(a, operand, b, "=", result);

// -----------------------------------------------------

// Задача 2, через prompt

// const promp: NodeRequire = require("prompt-sync")({ sigint: true });
// const a: number = +promp(`Input 1 number  `);
// const b: number = +promp(`Input 2 number  `);
// const operand: string = promp(`Input operand  `);
// let result: number = 0;
// switch (operand) {
//   case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "*":
//     result = a * b;
//     break;
//   case "/":
//     result = a / b;
//     break;
// }
// console.log(a, operand, b, "=", result);

// -----------------------------------------------------

// Задача 3, Wordley

// type strType = {
//   programmWord: string;
//   countCorrectLetters(userWord: string): void;
// };

// const str: strType = require("./lib/str");
// const promp: NodeRequire = require("prompt-sync")({ sigint: true });

// let userWord: string = promp(
//   `Введите загаданное слово, 5 английских букв `
// ).toLowerCase();

// while (str.programmWord !== userWord) {
//   str.countCorrectLetters(userWord);
//   userWord = promp(
//     `Введите загаданное слово, 5 английских букв `
//   ).toLowerCase();
// }
// console.log("Вы победили!");

// -------------------------------------------------------------------------------

//Примеры работы с файлами

// import fs from "fs"; // require не сработал

// синхронный вариант
// const buf = fs.readFileSync("./questions.txt").toString(); //есть ли плагин для автоподстановки путей?
// console.log(buf);

// асинхронный вариант через then
// fs.promises
//   .readFile("./questions.txt")
//   .then((buf) => console.log(buf.toString()));

// асинхронный вариант через async/await
// async function main() {
//   const buf = await fs.promises.readFile("./questions.txt");
//   console.log(buf.toString());
// }
// main();

// Задача 4, Викторина

// import fs from "fs";
// const promp: NodeRequire = require("prompt-sync")({ sigint: true }); // через импорт ошибка

// const buf = fs.readFileSync("./questions.txt");
// const questionsArray: string[] = buf
//   .toString()
//   .split("----\r\n")
//   .map((el) => {
//     return el.split("\r\n")[0];
//   });
// const optionAnswerArray: string[][] = buf
//   .toString()
//   .split("----\r\n")
//   .map((el) => {
//     const arr: string[] = [];
//     for (let i = 1; i <= 4; i++) {
//       arr.push(`${i} - ${el.split("\r\n")[i]}`);
//     }
//     return arr;
//   });
// const correctAnswerArray: string[] = buf
//   .toString()
//   .split("----\r\n")
//   .map((el) => {
//     return el.split("\r\n")[5];
//   });
// let countCorrectAnswer: number = 0;

// const getUserAnswer = (i: number) => {
//   console.log(i + 1, questionsArray[i]);
//   console.log(optionAnswerArray[i]);
//   const userAnswer: string = promp(`Введите номер правильного ответа - `);
//   return userAnswer;
// };

// for (let i = 0; i < questionsArray.length; i++) {
//   const userAnswer = getUserAnswer(i);
//   if (userAnswer === correctAnswerArray[i]) {
//     countCorrectAnswer++;
//     console.log("Верный ответ!");
//   } else console.log("Ответ неправильный!");
// }

// console.log(
//   `Викторина закончена, количество правильных ответов - ${countCorrectAnswer}!`
// );
// ----------------------------------------------
