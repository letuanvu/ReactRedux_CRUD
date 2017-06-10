import * as types from '../constants/ActionTypes'
export const companyReducer = (state = [] ,action) => {
  switch(action.type){
    case types.ADD_COMPANY:
      return [...state,{
        name:action.name,
        url:action.url
      }]
      case types.FETCH_COMPANY:
        return [...action.data]
      case types.DELETE_COMPANY:
        return state.filter(({ id }) => id !== action.id);
      default:
      return state
  }
}

export default companyReducer
