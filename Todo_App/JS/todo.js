//This function gets the task from input
function get_todos() {
    //This creates an array of tasks that are inputed
    var todos = new Array;
    //This pulls the task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    //If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//This function adds the inputed task to the get_todos array
function add() {
    //This takes the value of the input and saves it to a variable
    var task = document.getElementById('task').value;
    var todos = get_todos();
    //This adds the task to the end of the array
    todos.push(task);
    //This converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    //This resets the input to blank after the task is added
    document.getElementById('task').value = '';
    show();
    return false;
}

//This function keeps the task permanently displayed on the screen
function show() {
    //This sets the task that was retreived as a variable
    var todos = get_todos();
    //This sets up each task as an unordered list
    var html = '<ul>';
    //This displays a task to the list in the order it was inputed
    for (var i = 0; i < todos.length; i++) {
        //This also displays the task as a list and creates the button with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    //This displays the task as a list on the screen
    document.getElementById('todos').innerHTML = html;
    //This re-attaches remove listeners to the newly rendered buttons
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
//This diplays the inputed task when the "Add Item" button is clicked
document.getElementById('add').addEventListener('click', add);
//This allows the Enter key to add a task
document.getElementById('task').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        add();
    }
});
//This will keep the inputs displayed permanently on the screen
show();

//This function removes the task when the "x" button is clicked
function remove() {
    //This sets the task that was retreived as a variable
    var id = this.getAttribute('id');
    var todos = get_todos();
    //This removes the task from the array
    todos.splice(id, 1);
    //This converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    //This keeps the remaining tasks displayed on the screen after one is removed
    show();
    return false;
}


