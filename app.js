const tasks = ['Задача 1'];

function addTask(task) {
    return tasks.push(task);
}
addTask('Задача 2');
addTask('Задача 3');
addTask('Задача 4');
addTask('Задача 5');
console.log(tasks);

function deleteTask(task) {
    if (tasks.includes(task)) {
        return tasks.splice(tasks.indexOf(task), 1);
    }
    return tasks;
}
deleteTask('Задача 4');
console.log(tasks);

function transferTask(task) {
    if (tasks.includes(task)) {
        const id = tasks.indexOf(task);
        tasks.unshift(tasks[id]);
        tasks.splice(id + 1, 1);
    }
}
transferTask('Задача 3');
console.log(tasks);