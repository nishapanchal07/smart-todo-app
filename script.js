let taskinput = document.getElementById("taskInput");
let addbtn = document.getElementById("addBtn");
let tasklist = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

let allBtn = document.getElementById("allBtn");
let completedBtn = document.getElementById("completedBtn");
let pendingBtn = document.getElementById("pendingBtn");



// TASKS ARRAY


let tasks = [];


// GET SAVED TASKS


let savedTasks = JSON.parse(localStorage.getItem("tasks"));

if (savedTasks) {
    tasks = savedTasks;
}


// CREATE TASK FUNCTION


function createTask(task) {

    let li = document.createElement("li");


    // Restore completed status
    if (task.completed) {
        li.classList.add("completed");
    }


    // TASK TEXT
   

    let tasktext = document.createElement("span");

    tasktext.textContent = task.text;

    li.append(tasktext);


   
    // DELETE BUTTON
  

    let deletebtn = document.createElement("button");

    deletebtn.textContent = "Delete";

    li.append(deletebtn);


    deletebtn.addEventListener("click", function () {

        li.remove();

        tasks = tasks.filter(function (item) {

            return item !== task;

        });

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );


        taskCount.textContent =
            "Total Tasks: " + tasklist.children.length;

    });


  
    // COMPLETE BUTTON
    

    let completebtn = document.createElement("button");

    completebtn.textContent = "Complete";

    li.append(completebtn);


    completebtn.addEventListener("click", function () {

        li.classList.toggle("completed");

        task.completed =
            li.classList.contains("completed");


        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    });


    // EDIT BUTTON
   

    let editbtn = document.createElement("button");

    editbtn.textContent = "Edit";

    li.append(editbtn);


    editbtn.addEventListener("click", function () {

        let newtask = prompt("Enter new task");


        if (newtask !== null && newtask.trim() !== "") {

            tasktext.textContent = newtask;

            task.text = newtask;


            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

        }

    });


    // ADD TASK TO LIST
  

    tasklist.append(li);

}


// LOAD SAVED TASKS


for (let i = 0; i < tasks.length; i++) {

    createTask(tasks[i]);

}


// Update counter after loading
taskCount.textContent =
    "Total Tasks: " + tasklist.children.length;


// ADD NEW TASK


addbtn.addEventListener("click", function () {

    if (taskinput.value.trim() !== "") {


        let task = {

            text: taskinput.value,

            completed: false

        };


        createTask(task);


        tasks.push(task);


        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );


        taskCount.textContent =
            "Total Tasks: " + tasklist.children.length;


        taskinput.value = "";


    } else {

        alert("Please enter a task");

    }

});



// ALL FILTER


allBtn.addEventListener("click", function () {

    for (let i = 0; i < tasklist.children.length; i++) {

        tasklist.children[i].style.display = "list-item";

    }

});



// COMPLETED FILTER


completedBtn.addEventListener("click", function () {

    for (let i = 0; i < tasklist.children.length; i++) {


        if (
            tasklist.children[i]
                .classList
                .contains("completed")
        ) {

            tasklist.children[i].style.display =
                "list-item";

        } else {

            tasklist.children[i].style.display =
                "none";

        }

    }

});



// PENDING FILTER


pendingBtn.addEventListener("click", function () {

    for (let i = 0; i < tasklist.children.length; i++) {


        if (
            tasklist.children[i]
                .classList
                .contains("completed")
        ) {

            tasklist.children[i].style.display =
                "none";

        } else {

            tasklist.children[i].style.display =
                "list-item";

        }

    }

});