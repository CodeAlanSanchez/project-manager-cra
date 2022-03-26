import {
  CREATE_BUG,
  DELETE_BUG,
  FETCH_BUG,
  FETCH_BUGS,
  UPDATE_BUG,
} from 'types/actions';
import * as api from '../api';

export const getBugs =
  (projectId: number, setLoading: Function) => async (dispatch: any) => {
    try {
      const { data } = await api.fetchBugs(projectId);

      setLoading(false);

      dispatch({
        type: FETCH_BUGS,
        payload: data.bugs,
      });
    } catch (error: any) {
      const { field, message } = error.response.data.error;
      dispatch({
        type: 'CREATE_BUG_ERROR',
        payload: { field, message },
      });
    }
  };

export const getBug =
  (id: number, setLoading: Function) => async (dispatch: any) => {
    try {
      const { data } = await api.fetchBug(id);

      setLoading(false);

      dispatch({ type: FETCH_BUG, payload: data.bug });
    } catch (error: any) {
      console.log(error);
      const { field, message } = error.response.data.error;
      dispatch({
        type: 'CREATE_BUG_ERROR',
        payload: { field, message },
      });
    }
  };

export const createBug =
  (projectId: number, bug: any) => async (dispatch: any) => {
    try {
      const { data } = await api.createBug(projectId, bug);

      console.log(data);

      dispatch({ type: CREATE_BUG, payload: data.bug });
    } catch (error: any) {
      const { field, message } = error.response.data.error;
      dispatch({
        type: 'CREATE_BUG_ERROR',
        payload: { field, message },
      });
    }
  };

export const updateProject =
  (projectId: number, bug: any) => async (dispatch: any) => {
    try {
      const { data } = await api.updateProject(projectId, bug);

      dispatch({ type: UPDATE_BUG, payload: data.bug });
    } catch (error) {
      console.error(error);
    }
  };
