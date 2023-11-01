const textInput = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if(textInput.value === ''){
        alert ("Put something");
    }else{
        let li = document.createElement('li');
        li.innerHTML = textInput.value;
        taskList.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    textInput.value = '';
    saveTask();
}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask()
    }
},false)

function saveTask(){
    localStorage.setItem('data',taskList.innerHTML);
}

function getSaveTask(){
    taskList.innerHTML = localStorage.getItem('data');
}

getSaveTask();