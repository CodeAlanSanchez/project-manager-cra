import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import projectReducer from 'reducers/projectReducers';
import authReducer from 'reducers/authReducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  projects: projectReducer,
  auth: authReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
