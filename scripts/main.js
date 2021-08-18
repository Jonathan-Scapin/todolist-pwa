let tasksList = [];
let todoList = document.querySelector('#list');
let task = document.getElementsByTagName('#list li')
let createdTaskSpace = document.getElementById('createTask')
let userSpace = document.getElementById('userSpace')

function newTask() {
    createdTaskSpace.classList.add("show")
}

function showProfil() {
    userSpace.classList.add("show")
}

function backTask() {
    userSpace.classList.remove("show")
}

showTasks();

function validateTask() {

    let inputValue = document.getElementById("contentInputTask").value;
    let obj = {
        task: inputValue,
        category: 'category'
    }

    tasksList.push(obj);

    showTasks();
}

function checkedTask(event) {
    event.target.classList.toggle('chekedTask');
}

function showTasks() {

    let newList = "";

    tasksList.forEach((element, index) => {

        newList += `<li onclick="checkedTask(event)"><i class="far fa-circle"></i>${element.task}<span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`

    });


    todoList.innerHTML = newList;

    document.getElementById("contentInputTask").value = '';

    createTask.classList.remove("show");
}

function deleteTask(index) {
    tasksList.splice(index, 1)
    showTasks();
}