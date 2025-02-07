
//interface for task manager
interface TaskInterface{
    tasks: string[];
    addTask: (task:string) => number;
    deleteTask: (task:string) => number;
    listAllTasks: () => void;
}

//class which implements interface contains tasks array and methods for manupulation
class TaskManager implements TaskInterface {
    tasks: string[];

    constructor() {
        this.tasks = []
    }

    addTask(task:string):number {
        this.tasks.push(task);
        console.log(task+" has been added")
        return this.tasks.length;
    }
    deleteTask(task:string):number {
        for (let i = 0; i< this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                this.tasks.splice(i,1);
                console.log(task+" has been deleted")
                return this.tasks.length;
            }     
        }
        //return -1 if no task found
        return -1;
    }
    listAllTasks(){
        this.tasks.forEach((task: string) => {
            console.log(task);
        })
    }
}

//creating an instance of task manager class and testing
let tasksmanager = new TaskManager();
tasksmanager.addTask("play games");
tasksmanager.addTask("running")
tasksmanager.addTask("cook dinner")

tasksmanager.listAllTasks();
tasksmanager.deleteTask("running")
tasksmanager.listAllTasks()