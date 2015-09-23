import { ADD_GROUP, DELETE_GROUP, EDIT_GROUP } from '../constants/ActionTypes';

const initialState = [{
   
      
        name: 'Admin Group',
        is_active: false,
        id: 0
   
},{
   
      
        name: 'Admin Group',
        is_active: false,
        id: 3
   
}];

export default function groups(state=initialState, action){
  switch (action.type) {
    case ADD_GROUP:
      
      //console.log( state.reduce((maxId, group)=> Math.max(group.id, maxId.id)-1)+1);
      
      return[ ...state,{
        //id: state.reduce((maxId, group)=> Math.max(group.id, maxId.id)-1)+1,
        //  id: 1,
          is_active: true,
          name: action.group,
        }];

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