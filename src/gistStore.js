import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import gistReducer from './reducers/gistReducer';

const store = createStore(
  gistReducer,
  applyMiddleware(thunk)
)

export default store
