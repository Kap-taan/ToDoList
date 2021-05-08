// Declarations

const Todoinput = document.querySelector(".todoinput");
const Todobutton = document.querySelector(".todobutton");
// const Todolists = document.querySelector(".todolists");
const Todolistform = document.querySelector(".todolists");

// Event

Todobutton.addEventListener('click', Add);
Todolistform.addEventListener('click', ComDelete);

// Functions
function Add(event){
    event.preventDefault();
    let Tododiv = document.createElement('div');
    Tododiv.classList.add('tododiv');
    let Todoli = document.createElement('li');
    Todoli.classList.add('todoli');
    Todoli.innerText = Todoinput.value;
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
        paradiv.addEventListener("transitionend", event => {
            paradiv.remove();
        })
        
    }
    if(item.classList[0] === "completebtn"){
        const todo = item.parentElement;
        todo.classList.add("com");
        
    }
}