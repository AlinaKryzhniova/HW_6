var array = [];

var addList =() => {
    var newTask = document.getElementById("input");
    var list = document.getElementById("todoList");
    var item = document.createElement("li");
    item.classList.add("todo__list-style");
    item.textContent = newTask.value;
    list.appendChild(item);
    array.push(newTask.value);
    newTask.value = "";
};
    

var deleteList =() => {
    var element = document.getElementById('todoList');
    while (element.firstElementChild){
        element.removeChild(element.firstElementChild);
    }
};
    

var addLine =() =>  {
          var addclass = event ? event.target : event.target;
          var newclass = addclass.className;

          if (~newclass.indexOf("todo__list-style-text")) {
              addclass.className = "todo__list-style";
          } else {
              addclass.className = "todo__list-style-text";
          }
};
    
    enter.addEventListener("click",addList);
    element.addEventListener("click",deleteList);
    todoList.addEventListener('click', addLine);