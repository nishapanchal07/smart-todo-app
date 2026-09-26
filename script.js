let taskinput = document.getElementById("taskInput");
let addbtn = document.getElementById("addBtn");
let tasklist = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");


addbtn.addEventListener("click", function () {

    // Check if task is not empty
    if (taskinput.value.trim() !== "") {

        let li = document.createElement("li");

        // Task text
        let tasktext = document.createElement("span");
        tasktext.textContent = taskinput.value;
        li.append(tasktext);


        // Delete button
        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        li.append(deletebtn);

        deletebtn.addEventListener("click", function () {
            li.remove();

            taskCount.textContent =
                "Total Tasks: " + tasklist.children.length;
        });


        // Complete button
        let completebtn = document.createElement("button");
        completebtn.textContent = "Complete";
        li.append(completebtn);

        completebtn.addEventListener("click", function () {
            li.classList.toggle("completed");
        });


        // Edit button
        let editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        li.append(editbtn);

        editbtn.addEventListener("click", function () {

            let newtask = prompt("Enter new task");

            if (newtask !== null && newtask.trim() !== "") {
                tasktext.textContent = newtask;
            }
        });


        // Add task to list
        tasklist.append(li);

        // Update counter
        taskCount.textContent =
            "Total Tasks: " + tasklist.children.length;

        // Clear input
        taskinput.value = "";

    } else {
        alert("Please enter a task");
    }

});