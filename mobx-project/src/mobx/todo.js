import { makeAutoObservable } from "mobx";
class Todo {
    todos = [{ id: 1, title: "Сходить в магазин" }];
  constructor() {
    makeAutoObservable(this);
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
 
}
export default new Todo();
