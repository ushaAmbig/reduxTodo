import { combineReducers } from 'redux'

const todos = (state = [], action) => {
    switch(action.type) {
        case 'GET_TODO': return state.todos; 
        case 'CREATE_TODO': 
        return [
            ...state,
            {id: action.id,
            title: action.title,
            status: action.status}
        ];
        case 'CHANGE_STATUS':
            return state.map((todo) => todo.id === action.id ? {...todo, status:'completed'}: todo)
        default: return state;
    }
}

// export default todos;

export default combineReducers({
    todos
  })