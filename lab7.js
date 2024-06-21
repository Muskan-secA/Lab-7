<!DOCTYPE html>
<html lang="en">
<head>
    <title>Task Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: grey;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 10px 
            width: 300px;
            text-align: center;
        }
        h1 {
            margin-bottom: 20px;
        }
        input[type="text"] {
            width: calc(100% - 22px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid ;black
            border-radius: 4px;
        }
        button {
            background-color: blue;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            width: 100%;
        }
        button:hover {
            background-color: darkblue;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            background-color: lightpink;
            padding: 10px;
            border: 5px black;
            margin-bottom: 5px;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        ul li.completed {
            text-decoration: line-through;
            color: black;
        }
        .task-actions {
            display: flex;
            gap: 10px;
        }
        .task-actions button {
            background-color: red;
            color: black;
            border: none;
            border-radius: 4px;
            padding: 5px;
        }
        .task-actions button:hover {
            background-color: darkred;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Task Manager</h1>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button id="addTaskButton">Add Task</button>
        <ul id="taskList"></ul>
    </div>

    <script>
        document.getElementById('addTaskButton').addEventListener('click', () => {
            const taskInput = document.getElementById('taskInput');
            if (taskInput.value.trim() !== "") {
                addTask(taskInput.value);
                taskInput.value = "";
            }
        });

        const addTask = (taskText) => {
            const taskList = document.getElementById('taskList');

            const li = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    li.classList.add('completed');
                } else {
                    li.classList.remove('completed');
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            tener('click', () => {
                taskList.removeChild(li);deleteButton.addEventLis
            });

            const taskActions = document.createElement('div');
            taskActions.className = 'task-actions';
            taskActions.appendChild(checkbox);
            taskActions.appendChild(deleteButton);

            li.appendChild(taskSpan);
           li.appendChild(taskActions);

            taskList.appendChild(li);
        };
    </script>
</body>
</html>
