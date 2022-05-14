'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    choiceExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && 
                 (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий урвень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопления?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let question = +prompt("Статья необязательных расходов?", "");
    
            if (question != "" && question != null) {
                console.log("done");
                appData.optionalExpenses[i] = question;
            } else {
                console.log('error');
                i--;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");
        if (typeof(items)=== "string" && items != "" && typeof(items) != null) {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        } else {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        }

        appData.income.forEach(function(items, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + items);
        }); 
    }
};

for (let i in appData) {
    console.log("Наша программа включает в себя: " + i + " - " + appData[i] );
}

