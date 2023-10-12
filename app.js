const operations = [1000, -700, 300, -500, 10000];
let balance = 100;
let len = operations.length;
let positiveSum = 0, negativeSum = 0;
let positiveIndex = 0, negativeIndex = 0;

function getBalance(balance, operations) {
    for (let i = 0; i < len; i++) {
        if (balanceCheck(balance, operations[i])) {
            balance += operations[i];
            f3(operations[i]);
        } else break;
    }
    return balance;
}

function balanceCheck(balance, num) {
    if (balance + num >= 0) {
        return true;
    } else return false;
}

function f3(num) {
    if (num >= 0) {
        positiveSum += num;
        positiveIndex++;
    } else {
        negativeSum += num;
        negativeIndex++;
    }
}

console.log(`Итоговый баланс: ${getBalance(balance, operations)}`);
console.log(`Средний расход: ${negativeSum/negativeIndex}`);
console.log(`Средний доход: ${positiveSum/positiveIndex}`);
