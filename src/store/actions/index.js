let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = content => ({
  type: 'TOGGLE_TODO',
  content,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const fetchsPost = () => {
  return (dispatch, getState) => {
    window.Post('headline/listByPage',{page: 0,pageSize: 10,}).then(({code,data}) => {
      dispatch(toggleTodo(data.content));
    });
  }
}