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

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
