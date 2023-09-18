/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const priceToHour = 80;
const hoursToDay = 5;
const daysToWeek = 5;
const work = 40;
const daysToWeekend = 11;

console.log((daysToWeekend - 2) * 5 >= work);
console.log(work * priceToHour);