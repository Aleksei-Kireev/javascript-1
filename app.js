const balance = 1200;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

if (((balance >= 1000) || (bonusBalance >= 100)) && !isBanned && !isExist && isSelling)
{
    console.log('Игра куплена');
}
else {
    console.log('Игру нельзя купить');
}