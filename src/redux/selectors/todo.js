export const getTodos = (state) => state.todos
export const getNotCheckedTodos = (state) => state.todos.filter(item => item.isCompleted === false && item.isImportant === false)
export const getCompletedTodos = (state) => state.todos.filter(item => item.isCompleted === true)
export const getImportantTodos = (state) => state.todos.filter(item => item.isImportant === true && item.isCompleted === false)

