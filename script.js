// Declarations

const Todoinput = document.querySelector(".todoinput");
const Todobutton = document.querySelector(".todobutton");
// const Todolists = document.querySelector(".todolists");
const Todolistform = document.querySelector(".todolists");

// Event

Todobutton.addEventListener('click', Add);
Todolistform.addEventListener('click', ComDelete);
document.addEventListener("DOMContentLoaded", getTodos);

// Functions
function Add(event){
    event.preventDefault();
    let Tododiv = document.createElement('div');
    Tododiv.classList.add('tododiv');
    let Todoli = document.createElement('li');
    Todoli.classList.add('todoli');
    Todoli.innerText = Todoinput.value;
    saveLocalTodos(Todoinput.value);
    Tododiv.appendChild(Todoli);
    Todoinput.value = "";
    let Completebutton = document.createElement('button');
    Completebutton.innerHTML = `<i class="fas fa-check"></i>`;
    Completebutton.classList.add('completebtn');
    Tododiv.appendChild(Completebutton);
    let Destroybutton = document.createElement('button');
    Destroybutton.innerHTML = `<i class="fas fa-trash"></i>`;
    Destroybutton.classList.add('destroybtn');
    Tododiv.appendChild(Destroybutton);
    Todolistform.appendChild(Tododiv);
}

function ComDelete(event){
    event.preventDefault();
    const item = event.target;
    if(item.classList[0] === "destroybtn"){
        const paradiv = item.parentElement;
        paradiv.classList.add('fall');
        removeLocalTodos(paradiv);
        paradiv.addEventListener("transitionend", event => {
            paradiv.remove();
        })
        
    }
    if(item.classList[0] === "completebtn"){
        const todo = item.parentElement;
        todo.classList.add("com");
        
    }
}


// 

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
      //Create todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("tododiv");
      //Create list
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todoli");
      todoDiv.appendChild(newTodo);
      Todoinput.value = "";
      //Create Completed Button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      completedButton.classList.add("completebtn");
      todoDiv.appendChild(completedButton);
      //Create trash button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("destroybtn");
      todoDiv.appendChild(trashButton);
      //attach final Todo
      Todolistform.appendChild(todoDiv);
    });
  }