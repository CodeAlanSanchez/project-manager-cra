const initialState = {
  code: '',
  field: '',
  message: '',
};

type MyReducer = typeof initialState;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any): MyReducer => {
  switch (action.type) {
    case 'DELETE_PROJECT_ERROR':
      return action.payload;
    case 'CREATE_PROJECT_ERROR':
      console.log(action.payload);
      return {
        code: action.payload.code,
        field: action.payload.field,
        message: action.payload.message,
      };
    case 'FETCH_PROJECT_ERROR':
    default:
      return state;
  }
};
