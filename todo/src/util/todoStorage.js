/**
 * we use localStorage for data persistence
 */

export function getTodo() {
  return JSON.parse(localStorage.getItem("todo"))
}

export function setTodo(newTodo) {
  return localStorage.setItem("todo",JSON.stringify(newTodo))
}