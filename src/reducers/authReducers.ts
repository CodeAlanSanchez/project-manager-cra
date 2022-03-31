/* eslint-disable import/no-anonymous-default-export */
export default (user = {}, action: any) => {
  switch (action.type) {
    case 'LOGIN':
    case 'ME':
    case 'REGISTER':
      return action.payload;
    case 'LOG_OUT':
      return {};
    case 'GET_AUTH':
    default:
      return user;
  }
};
