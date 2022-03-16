import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import projectReducer from 'reducers/projectReducers';
import authReducer from 'reducers/authReducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  projects: projectReducer,
  auth: authReducer,
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
