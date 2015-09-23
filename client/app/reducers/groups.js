import { ADD_GROUP, DELETE_GROUP, EDIT_GROUP } from '../constants/ActionTypes';

const initialState = [{
    groups: 'Admin Group',
    is_active: false,
    id: 0
}];

export default function groups(state=initialState, action){
  switch (action.type) {
    case ADD_GROUP:
      return[{
        id: state.reduce((maxId, group) => Math.max(group.id, maxId)-1)+1,
          cimpleted: false,
          text: action.text,
        }, ...state];

    case DELETE_GROUP:
      return state.filter(group =>
        group.id !== action.id
      );

    case EDIT_GROUP:
      return state.mao(group =>
        group.id === action.id ? 
          Object.assign({}, group, {text: action.text}):
          group
      );

  default:
    return state;
  }
}