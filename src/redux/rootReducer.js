import { combineReducers } from 'redux'
import taskReducer from './reducers/taskReducer'
import userReducer from './reducers/userReducer'

export const rootReducer = combineReducers({
  listState: userReducer,
  taskState: taskReducer
})
