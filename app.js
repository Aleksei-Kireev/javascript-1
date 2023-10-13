const arr = [1, 4, 4, 10];

const avg = arr.reduce((prev, current, index) => {
    prev += current;
    if (index === arr.length - 1) {
        return prev / (index + 1);
    } else {
        return prev;
    };
}, 0);

console.log(avg);