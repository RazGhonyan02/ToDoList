export const getTodos = (state) => state.todos
export const getNotCheckedTodos = (state) => state.todos.filter(item => item.isChecked === false)
export const getCompletedTodos = (state) => state.todos.filter(item => item.isChecked === true)
export const getImportantTodos = (state) => state.todos.filter(item => item.isImportant === true)
