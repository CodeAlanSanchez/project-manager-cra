import * as api from '../api';

export const signIn = (body: any) => async (dispatch: any) => {
  try {
    const { data } = await api.signin(body);

    return Promise.all([
      dispatch({ type: 'CLEAR_AUTH_ERROR', payload: {} }),
      dispatch({ type: 'LOGIN', payload: data }),
    ]);
  } catch (error: any) {
    console.log(error);
    const { field, message } = error?.response?.data.error;
    dispatch({
      type: 'CREATE_AUTH_ERROR',
      payload: { field, message },
    });
  }
};

export const signUp = (body: any) => async (dispatch: any) => {
  try {
    const { data } = await api.register(body);

    return Promise.all([
      dispatch({ type: 'CLEAR_AUTH_ERROR', payload: {} }),
      dispatch({ type: 'REGISTER', payload: data }),
    ]);
  } catch (error: any) {
    const { field, message } = error?.response?.data.error;
    dispatch({
      type: 'CREATE_AUTH_ERROR',
      payload: { field, message },
    });
  }
};

export const me = () => async (dispatch: any) => {
  try {
    const { data } = await api.me();

    return Promise.all([
      dispatch({ type: 'CLEAR_AUTH_ERROR', payload: {} }),
      dispatch({ type: 'ME', payload: data }),
    ]);
  } catch (error: any) {
    // const { field, message } = error?.response?.data.error;
    // dispatch({
    //   type: 'CREATE_AUTH_ERROR',
    //   payload: { field, message },
    // });
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    const { data } = await api.logout();

    dispatch({ type: 'LOG_OUT', payload: data });
  } catch (error: any) {
    const { field, message } = error?.response?.data.error;
    dispatch({
      type: 'CREATE_AUTH_ERROR',
      payload: { field, message },
    });
  }
};

export const clearAuthError = () => async (dispatch: any) => {
  dispatch({ type: 'CLEAR_AUTH_ERROR', payload: null });
};
