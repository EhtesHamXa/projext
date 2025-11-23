function addTodo(todos, text) {
    const value = text.trim();
    if (!value) return todos;
  
    return [...todos, value];
  }
  
  function deleteTodo(todos, index) {
    return todos.filter((_, i) => i !== index);
  }
  
  module.exports = { addTodo, deleteTodo };
  