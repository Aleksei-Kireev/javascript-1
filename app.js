const userAge = 25;
const userIsWork = true;
const userMoney = 1500;

const priceMacBook = 2000;

function canBuy() {
    if (userMoney >= priceMacBook) {
        return 'Идем покупать ноутбук!';
    } else if (bankMoney() + userMoney >= priceMacBook) {
        return 'Идем покупать ноутбук!';
    } else {
        return 'Не хватает средств!';
    }
}

function bankMoney() {
    switch(true) {
        case userAge > 24 && userIsWork === true:
            return 500;
        case userAge > 24:
            return 100;
        default:
            return 0;
    }
}

console.log(canBuy());