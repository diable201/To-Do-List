let list = document.getElementsByTagName("LI");
for (let i = 0; i < list.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


let listChecked = document.querySelector("ul");
listChecked.addEventListener("click", function (task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("checked");
    }
}, false);


function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("new-task").value.trim();
    let newTask = document.createTextNode(inputValue);
    li.appendChild(newTask);
    
    if (inputValue === '') {
        alert("Please write a new task!");
    } else {
        document.getElementById("tasks").appendChild(li);
    }

    document.getElementById("new-task").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}