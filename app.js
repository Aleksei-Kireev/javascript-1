const arr = ['!', 'JS', 'люблю', 'Я'];
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
    arrNew[arr.length - 1 - i] = arr[i];
}

arrNew = arrNew.join(' ');
console.log(arrNew);
