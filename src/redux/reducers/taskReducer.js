const initialState = {
  add: null,
  completed_tasks: null,
  completed_has_more: false,
  todo_tasks: null,
  todo_has_more: false,
}

const taskReducer = (state = initialState, { type, payload, hasMore, lastVisit }) => {
  switch (type) {
    case 'TASK_ADD':
      return { ...state, add: payload }
    case 'TASK_LIST_COMPLETE':
      return { ...state, completed_tasks: payload, completed_has_more: hasMore, lastVisit }
    case 'TASK_MORE_LIST_COMPLETE':
      return { ...state, completed_tasks: [...state.completed_tasks, ...payload], completed_has_more: hasMore, lastVisit }
    case 'TASK_LIST_TODO':
      return { ...state, todo_tasks: payload, todo_has_more: hasMore, lastVisit }
    case 'TASK_MORE_LIST_TODO':
      return { ...state, todo_tasks: [...state.todo_tasks, ...payload], todo_has_more: hasMore, lastVisit }
    default:
      return state
  }
}
export default taskReducer
