let str = prompt('Сколько будет 7 + или - 15?');
if (Number(str) === 22 || Number(str) === -8 || str === 'Я не робот') {
    console.log('Успех');
} else {
    console.log('Вы робот!');
}