function addTodo() {
    const input = document.getElementById('todo-input');
    const value = input.value.trim();
    if (!value) return;
  
    const li = document.createElement('li');
    li.textContent = value;
  
    // Create delete button
    const btn = document.createElement('button');
    btn.textContent = "Delete";
    btn.style.marginLeft = "10px";
    btn.onclick = () => li.remove();
  
    li.appendChild(btn);
  
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
  }  