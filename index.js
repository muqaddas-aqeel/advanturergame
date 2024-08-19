#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer_1.default.prompt({
    type: "input",
    name: "name",
    message: "please Enter Your Name",
});
let opponent = await inquirer_1.default.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
// console.log(opponent.select);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        console.log(`${chalk_1.default.bold.green(p1.name)} vs ${chalk_1.default.bold.green(o1.name)} `);
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic(" Ooops You Loose, Try Again"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic(" congratulation!!! You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.red.bold.italic(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk_1.default.red.bold.italic(" Ooops You Loose, Try Again"));
            process.exit();
        }
    }
    //assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic(" Ooops You Loose, Try Again"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic(" congratulation!!! You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.red.bold.italic(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk_1.default.red.bold.italic(" Ooops You Loose, Try Again"));
            process.exit();
        }
    }
    //zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic(" Ooops You Loose, Try Again"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic(" congratulation!!! You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.red.bold.italic(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk_1.default.red.bold.italic(" Ooops You Loose, Try Again"));
            process.exit();
        }
    }
} while (true);
//bye bye
