//class which implements interface contains tasks array and methods for manupulation
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log(task + " has been added");
        return this.tasks.length;
    };
    TaskManager.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                this.tasks.splice(i, 1);
                console.log(task + " has been deleted");
                return this.tasks.length;
            }
        }
        return -1;
    };
    TaskManager.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    return TaskManager;
}());
var tasksmanager = new TaskManager();
tasksmanager.addTask("play games");
tasksmanager.addTask("running");
tasksmanager.addTask("cook dinner");
tasksmanager.listAllTasks();
tasksmanager.deleteTask("running");
tasksmanager.listAllTasks();
