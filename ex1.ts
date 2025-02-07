//creating arr of tasks
let array: string[] = [];

//arrow func to add a task to an arr, returns num of tasks in arr
const addTask = (task:string):number => {
    array.push(task);
    console.log(task+" has been added")
    return array.length;
}

//iterates through the array and prints out the tasks
const listAllTasks = () => {
    array.forEach((task: string) => {
        console.log(task);
    })
}

//deletes a task from an array using splice func
const deleteTask = (taskToDelete:string):number => {
    for (let i = 0; i< array.length; i++) {
        if (array[i] == taskToDelete) {
            array.splice(i,1);
            console.log(taskToDelete+" has been deleted")
            return array.length;
        } else {
            console.log("no such task in array")
           
        }     
    }
   
    return -1;
}

//testing functions
addTask("wash dishes")
addTask("make bed")
addTask("walk dog")

listAllTasks();
deleteTask("wash d")
listAllTasks();
deleteTask("wash dishes")
listAllTasks();

