// This file implements a basic CRUD system for managing tasks using a JavaScript array.
// It includes functions to add, view, update, and delete tasks, each identified by an id.
// This approach is useful for understanding CRUD operations and data management in memory before using databases.
// Example usage is provided at the bottom of the file for demonstration and testing.

let tasks = [];
let nextId = 1;


function addTask(name, description) {
    const task = { id: nextId++, name, description };
    tasks.push(task);
    return task;
}


function getAllTasks() {
    return tasks;
}


function updateTask(id, newName, newDescription) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        return task;
    }
    return null;
}


function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        return tasks.splice(index, 1)[0];
    }
    return null;
}

addTask('Buy groceries', 'Milk, Bread, Eggs');
addTask('Study', 'Review JavaScript fundamentals');

console.log('All tasks:', getAllTasks());

updateTask(1, 'Buy groceries and fruits', 'Milk, Bread, Eggs, Apples');
console.log('After update:', getAllTasks());

deleteTask(2);
console.log('After delete:', getAllTasks());
