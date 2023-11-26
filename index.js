
function newTask(title, description) {
  const task = {
    title: title,
    description: description, 
    complete: false,
    markComplete: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', "Take all the Poop out of the litter box");
const task2 = newTask("Do Laundry", "really? i need to explain laundry?");
const tasks = [task1, task2]

task1.logState()
task1.markComplete()
task1.logState()

// console.log(tasks);

