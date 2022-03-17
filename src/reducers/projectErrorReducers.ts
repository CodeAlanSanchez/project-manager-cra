const initialState = { message: '', code: '' };

type MyReducer = typeof initialState;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any): MyReducer => {
  switch (action.type) {
    case 'CREATE_PROJECT_ERROR':
      return {
        code: action.payload.code,
        message: action.payload.message,
      };
    case 'FETCH_PROJECT_ERROR':
    default:
      return state;
  }
};
