// Обычная функция
function toPower(num, power) {
    const res = num ** power;
    return res;
}
console.log(toPower(2, 3));

// Стрелочная функция
const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));
