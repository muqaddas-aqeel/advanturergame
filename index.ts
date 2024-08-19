#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel -25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "please Enter Your Name",
});
let opponent = await inquirer.prompt({
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
    console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.green(o1.name)} `);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent",
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic(" Ooops You Loose, Try Again"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic(" congratulation!!! You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.red.bold.italic(`you drink health portion your fuel is ${p1.fuel}`)
          
        
      );
    }

    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic(" Ooops You Loose, Try Again"));
      process.exit();
    }
  }
  


   //assassin
if (opponent.select == "Assassin") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent",
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic(" Ooops You Loose, Try Again"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic(" congratulation!!! You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.red.bold.italic( `you drink health portion your fuel is ${p1.fuel}`)
        
       
      );
    }

    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic(" Ooops You Loose, Try Again"));
      process.exit();
    }
  }
  //zombie
  if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select Your Opponent",
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.red.bold.italic(" Ooops You Loose, Try Again"));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic(" congratulation!!! You Win"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.red.bold.italic(
          `you drink health portion your fuel is ${p1.fuel}`
        )
      );
    }

    if (ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic(" Ooops You Loose, Try Again"));
      process.exit();
  }  

  
}
} while (true)
  
  //bye bye

