import { List, Map, Record } from 'immutable';
import camelCase from 'camel-case';


const Group = Record({
    id: 0,
    title: "",
    description: "",
    is_active: false,
});


const ACTIONS_MAP = {
  addGroup(state, payload){
    const { group } = payload;

    return state.update('groupList', groupList => {
      return groupList.push(Group({ index: group.id, ...group }));
    })
  },

  deleteGroup(state, payload) {
    return state.update('groupList', groupList => {
      return groupList.filter(group => group.get('id') !== payload.id);
    });
  },

  editGroup(state, payload) {
    const {id, label } = payload;
    
    return state.update('groupList', groupList => {
      return groupList.map(group => {
        return (group.get('id') === id)
          ? group.set('label', label)
          : group;
      });
    });
  },

  fetchAllGroups(state, payload){
    const groupList = List(payload.groups).map(group => Group({ index: group.id,...group}));
  }
};

const initialState = {groupList: {}};

export function groups(state = initialState, action) {
  //console.log(action);
  const {type, payload} = action;
  //console.log(action);
  const reducer = ACTIONS_MAP[camelCase(type)];
  /**
   * If the action corresponds to a handler in ACTIONS_MAP, return a reduction
   * of the state. If no corresponding action is found, simply pass the state
   * through.
   */
  
  return (reducer) ? reducer(state, payload) : state;

}


