import * as types from '../constants/ActionTypes';

export function addGroup(group) {
  return { type: types.ADD_GROUP, group };
}

export function deleteGroup(id) {
  return { type: types.DELETE_GROUP, id };
}

export function editGroup(id, group) {
  return { type: types.EDIT_GROUP, id, text };
}
