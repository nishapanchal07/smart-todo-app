let taskinput = document.getElementById("taskInput");
let addbtn = document.getElementById("addBtn");
let tasklist = document.getElementById("taskList");


addbtn.addEventListener("click" , function(){
    let li = document.createElement("li");
    li.textContent = taskinput.value;

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";

    li.append(deletebtn);
    
    deletebtn.addEventListener("click", function(){
        li.remove();

});

    tasklist.append(li);
    taskinput.value = "";

});

