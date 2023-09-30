const {createApp} = Vue;

createApp({
data() {
  return {
    taskArray: [
      {
        todo: "Transition vue",
        done: true,
      },
      {
        todo: "Timer error message",
        done: false,
      },
      {
        todo: "Animation timer",
        done: true,
      },
    ],
    newTask: "",
    isError: false,
    isErrorDelete: false,
    
  }
},
methods: {
  // ADD TASK
  addTask(){
    // this.newTask = this.newTask.trim()
    if(this.newTask.length >= 5){
      this.taskArray.unshift({todo: this.newTask, done: false});
      this.newTask = "";
      this.isError = false;
    }else{
      this.isError = true;
    }
    console.log(this.taskArray);
  },
  // REMOVE TASK
  removeTask(i){
    if(this.taskArray[i].done === true){
      this.taskArray.splice(i, 1);
      this.isErrorDelete= false;
    }else{
      this.isErrorDelete= true;
    }
  }
},
mounted() {
  console.log("Montato");
},
}).mount("#app")