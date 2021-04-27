// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});
nav.addEventListener('click', function() {
    nav.classList.remove('slide');
    document.getElementById("checkBox").checked = false;
});

// Functions
    // Time Function
function startTime() {
    let today = new Date();
    let Hr = today.getHours();
    let Min = today.getMinutes();
    let Sec = today.getSeconds();
    Hr = checkTime(Hr);
    Min = checkTime(Min);
    Sec = checkTime(Sec);
    // document.getElementById('time').innerHTML = Hr + ":" + Min + ":" + Sec;
    let t = setTimeout(startTime, 500);

    if(Hr >= 5 && Hr <= 10) {
        document.getElementById('text').innerHTML = "Good Morning";
        document.body.style.backgroundImage = "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)";
        // document.getElementById('background').style.backgroundImage = "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)";
        // document.getElementById('background').style.backgroundImage = "url(Imgs/mountains_landscape_wildlife_161294_1920x1080.jpg)";
        todoButton.style.background = "#39A9DB";
        document.getElementById('sunSelectID').classList.remove('sunSelect');
        document.body.style.color = '#121D2B';
        document.getElementsByClassName('hamBurger')[0].style.backgroundColor = "#2b2b2b";
        document.getElementsByClassName('hamBurger')[1].style.backgroundColor = "#2b2b2b";
        document.getElementsByClassName('hamBurger')[2].style.backgroundColor = "#2b2b2b";
        // Script src edit for particle.js
        document.getElementById('scriptJS').setAttribute('src', 'Particle/Sun/sun.js');
    }
    else if(Hr >= 11 && Hr <= 15) {
        document.getElementById("text").innerHTML = "Good Afternoon";
        document.body.style.backgroundImage = "linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)";
        // document.getElementById('background').style.backgroundImage = "linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)";
        // document.getElementById('background').style.backgroundImage = "url(Imgs/mountains_sunset_art_146043_1920x1080.jpg)";
        todoButton.style.background = "#7FD1B9";
        document.getElementById('sunSelectID').classList.add('sunSelect');
        document.body.style.color = '#2b2b2b';
        document.getElementsByClassName('hamBurger')[0].style.backgroundColor = "#2b2b2b";
        document.getElementsByClassName('hamBurger')[1].style.backgroundColor = "#2b2b2b";
        document.getElementsByClassName('hamBurger')[2].style.backgroundColor = "#2b2b2b";
        // Script src edit for particle.js
        document.getElementById('scriptJS').setAttribute('src', 'Particle/Sun/sun.js');
    }
    else if(Hr >= 16 && Hr <= 19) {
        document.getElementById("text").innerHTML = "Good Evening";
        document.body.style.backgroundImage = "linear-gradient(225deg, hsla(33, 94%, 57%, 0.6) 0%, hsla(333, 100%, 53%, 0.8) 100%)";
        // document.getElementById('background').style.backgroundImage = "linear-gradient(225deg, hsla(33, 94%, 57%, 0.6) 0%, hsla(333, 100%, 53%, 0.8) 100%)";
        // document.getElementById('background').style.backgroundImage = "url(Imgs/deer_horns_silhouette_163953_1920x1080.jpg)";
        todoButton.style.background = "#7FD1B9";
        document.getElementById('sunSelectID').classList.add('sunSelect');
        document.body.style.color = '#2b2b2b';
        document.getElementsByClassName('hamBurger')[0].style.backgroundColor = "#2b2b2b";
        document.getElementsByClassName('hamBurger')[1].style.backgroundColor = "#2b2b2b";
        document.getElementsByClassName('hamBurger')[2].style.backgroundColor = "#2b2b2b";
        // Script src edit for particle.js
        document.getElementById('scriptJS').setAttribute('src', 'Particle/Sun/sun.js');
    }
    else {
        document.getElementById("text").innerHTML = "Good Night";
        document.body.style.backgroundImage = "linear-gradient(225deg, hsla(232, 30%, 20%, 1) 0%, hsla(232, 27%, 36%, 1) 50%, hsla(231, 36%, 54%, 1) 100%)";
        // document.getElementById('background').style.backgroundImage = "linear-gradient(225deg, hsla(232, 30%, 20%, 1) 0%, hsla(232, 27%, 36%, 1) 50%, hsla(231, 36%, 54%, 1) 100%)";
        // document.getElementsByClassName('todo').style.background = 'white';
        todoButton.style.background = "#39A9DB";
        document.getElementById('sunSelectID').classList.remove('sunSelect');
        document.body.style.color = "#f6f5f5";
        document.getElementsByClassName('hamBurger')[0].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName('hamBurger')[1].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName('hamBurger')[2].style.backgroundColor = "whitesmoke";
        document.getElementById('scriptJS').setAttribute('src', 'Particle/Night/night.js');
    }
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}

    // addTodo To HTML Function
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add Todo To Local Storage
    saveLocalTodos(todoInput.value);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to List
    todoList.appendChild(todoDiv);
    // Clear Todo Input Value
    todoInput.value = "";
}

    // Check or Trash Button Function
function deleteCheck(e) {
    const item = e.target;
    const checked = e.target;
    // Delete Todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // Check Mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        checked.classList.toggle('complete-btn-active');
    }
}

    // Toddo Filter Function
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
    // Save Todo To Local Storage
function saveLocalTodos(todo) {
    // Check Local Storage
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to List
    todoList.appendChild(todoDiv);
    }) 
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos)); 
}
