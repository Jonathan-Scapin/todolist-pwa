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
    createdTaskSpace.classList.remove("show")
}

showTasks();

function validateTask() {

    let inputValue = document.getElementById("contentInputTask").value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(inputValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

function checkedTask(event) {
    console.log(event)

    event.target.classList.toggle('chekedTask');
    event.nextElementSibling.classList.toggle('chekedTask');
}

function showTasks() {

    let inputValue = document.getElementById("contentInputTask").value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    const showWaiting = document.querySelector(".waintingTasks");
    showWaiting.textContent = listArray.length; 
    // if(listArray.length > 0){ 
    //   deleteAllBtn.classList.add("active"); 
    // }else{
    //   deleteAllBtn.classList.remove("active"); 
    // }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li><i class="far fa-circle" onclick="checkedTask(event)"></i><p>${element}</p><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    document.getElementById("contentInputTask").value = '';
    createTask.classList.remove("show");
}

function deleteTask(index) {

    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}