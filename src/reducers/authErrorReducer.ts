const initialState = {
  field: '',
  message: '',
};

type MyReducer = typeof initialState;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any): MyReducer => {
  switch (action.type) {
    case 'CLEAR_AUTH_ERROR':
      return { field: '', message: '' };
    case 'CREATE_AUTH_ERROR':
      console.log(action.payload);
      return {
        field: action.payload.field,
        message: action.payload.message,
      };
    case 'FETCH_AUTH_ERROR':
    default:
      return state;
  }
};
