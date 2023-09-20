const moneyStart = 12000;
const percent = 7;
const months = 24;
const price = 13500;

const moneyEnd = moneyStart * (1 + percent / 100 / 12) ** months;

if (moneyEnd > price) {
    console.log('Дом куплен. Остаток: ' + (moneyEnd - price));
} else if (moneyEnd == price) {
    console.log('Дом куплен. Средств не осталось');
} else {
    console.log('Не хватает средств: ' + (price - moneyEnd));
}