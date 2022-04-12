import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import projectReducer from 'reducers/projectReducers';
import authReducer from 'reducers/authReducers';
import thunk from 'redux-thunk';
import projectErrorReducer from 'reducers/projectErrorReducer';
import authErrorReducer from 'reducers/authErrorReducer';
import bugReducers from 'reducers/bugReducers';
import inviteReducer from 'reducers/inviteReducer';

const reducers = combineReducers({
  bugs: bugReducers,
  projects: projectReducer,
  projectsError: projectErrorReducer,
  auth: authReducer,
  authError: authErrorReducer,
  invites: inviteReducer,
});

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
