let id = 1;
export const addTodo = payload => ({
    type: 'CREATE_TODO',
    id: id++,
    title: payload.title,
    status: payload.status
})

export const getTodo = () => ({
    type: 'GET_TODO'
})

export const changeStatus = (id) => ({
    type: 'CHANGE_STATUS',
    id
})