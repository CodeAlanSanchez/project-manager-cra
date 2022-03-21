/* eslint-disable import/no-anonymous-default-export */
export default (projects = [], action: any) => {
  switch (action.type) {
    default:
      return projects;
    case 'FETCH_PROJECTS':
    case 'FETCH_PROJECT':
      return action.payload;
    case 'CREATE_PROJECT':
      return [...projects, action.payload];
    case 'UPDATE_PROJECT':
      return projects.map((project: any) =>
        project.id === action.payload.id ? action.payload : project
      );
    case 'DELETE_PROJECT':
      return projects.filter(
        (project: any) => project.id !== action.payload.id
      );
  }
};
