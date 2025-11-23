const { addTodo, deleteTodo } = require("../todo");

describe("Todo Functions", () => {
  test("addTodo should add a new todo", () => {
    const todos = [];
    const updated = addTodo(todos, "Learn CI/CD");
    expect(updated).toContain("Learn CI/CD");
  });

  test("addTodo should ignore empty input", () => {
    const todos = ["Task 1"];
    const updated = addTodo(todos, "   ");
    expect(updated.length).toBe(1);
  });

  test("deleteTodo should remove correct index", () => {
    const todos = ["A", "B", "C"];
    const updated = deleteTodo(todos, 1);
    expect(updated).toEqual(["A", "C"]);
  });

  test("deleteTodo should do nothing if index is wrong", () => {
    const todos = ["A"];
    const updated = deleteTodo(todos, 5);
    expect(updated).toEqual(["A"]);
  });
});
