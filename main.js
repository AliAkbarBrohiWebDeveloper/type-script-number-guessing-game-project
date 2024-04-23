#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t Welcome to \ Ali Akbar Brohi\ Number guessing game\t "));
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Write a (number between 1 - 10:",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congaratulations You guess a right number");
}
else
    (console.log(chalk.green("Sorry you geuess a wrong number")));
console.log(answers);
