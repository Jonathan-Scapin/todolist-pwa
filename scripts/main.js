let todoList = document.querySelector('#list');
let task = document.getElementsByTagName('#list li')
let createdTaskSpace = document.getElementById('createTask')
let connexion = document.getElementById('connexion')
const circleIcon = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>`
const trashIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>`

function newTask() {
    createdTaskSpace.classList.add("show")
}

function showProfil() {
    connexion.classList.add("show")
}

function backTask() {
    connexion.classList.remove("show")
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
    if (event.target.tagName === 'P') {
        event.target.classList.toggle('checked');
      }
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
        newLiTag += `<li onclick="checkedTask(event)"><span>${circleIcon}</span><p>${element}</p><span onclick="deleteTask(${index})">${trashIcon}</span></li>`;
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

function toggleDarkMode() {
    document.body.classList.toggle("darkMode");
    connexion.classList.toggle("darkMode");
    createdTaskSpace.classList.toggle("darkMode");
}