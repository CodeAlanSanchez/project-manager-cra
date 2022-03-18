import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import projectReducer from 'reducers/projectReducers';
import authReducer from 'reducers/authReducers';
import thunk from 'redux-thunk';
import projectErrorReducer from 'reducers/projectErrorReducer';
import authErrorReducer from 'reducers/authErrorReducer';

const reducers = combineReducers({
  projects: projectReducer,
  projectsError: projectErrorReducer,
  auth: authReducer,
  authError: authErrorReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
