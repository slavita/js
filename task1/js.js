"use strict";
let answer0 = prompt("Are you here?", "yes");
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses : undefined,
    optionalExpenses: undefined,
    income: undefined,
    savings : false
}

var mandatory = prompt("Введите обязательную статью расходов в этом месяце");
var cost = prompt("Во сколько обойдется?");
var expenses = { 
    mandatory : cost
    }

alert(money/30);
