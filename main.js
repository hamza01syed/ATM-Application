#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "What is your pin number",
        type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("correct your pincode is right");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withDraw", "check Balance", "Fast Cash"]
        }]);
    if (operationAns.operation === "withDraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount to withdraw",
                type: "number"
            }]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is:" + myBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(myBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fast = await inquirer.prompt([{
                name: "Fcash",
                message: "how much you want to withdraw",
                type: "list",
                choices: ["1000", "2000", "5000",]
            }]);
        if (fast.Fcash === "1000") {
            myBalance -= fast.Fcash;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else if (fast.Fcash === "2000") {
            myBalance -= fast.Fcash;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else if (fast.Fcash === "5000") {
            myBalance -= fast.Fcash;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("invalid pin number");
}
