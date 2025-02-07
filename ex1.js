var array = [];
var addTask = function (task) {
    array.push(task);
    console.log("the task has been added");
    return array.length;
};
var listAllTasks = function () {
    array.forEach(function (task) {
        console.log(task);
    });
};
var deleteTask = function (taskToDelete) {
    // array.filter(task => task !== taskToDelete);
    for (var i = 0; i < array.length; i++) {
        if (array[i] == taskToDelete) {
            array.splice(i, 1);
            console.log("task has been deleted");
            return array.length;
        }
        else {
            console.log("no such task in array");
            return -1;
        }
    }
};
addTask("wash dishes");
addTask("make bed");
addTask("walk dog");
listAllTasks();
deleteTask("wash d");
listAllTasks();
