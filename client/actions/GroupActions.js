import 'isomorphic-fetch';

import { Actions } from '../constants';

const SERVER_URL = '127.0.0.1:5000/api';

/**
 * Check for HTTP error responses.
 */
function check(response) {
  const { status, statusText } = response;

  if (status >= 200 && status < 300) return response;

  const error = new Error(statusText);
  error.response = response;
  return error;
}

/**
 * Parse the response's JSON.
 */
function parse(response) {
  return response.json();
}



const GroupActions = {
  addGroup(group) {
    return dispatch => {
      return fetch(`${SERVER_URL}/groups`, {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          is_active: true,
          group
        })
      })
      .then(check)
      .then(parse)
      .then(todo => dispatch({
        type: Actions.ADD_GROUP,
        payload: { group }
      }))
      .catch(err => dispatch({
        type: Actions.ADD_GROUP,
        payload: err,
        error: true
      }));
    };
  },


  deleteGroup(id) {
    return dispatch => {
      return fetch(`${SERVER_URL}/groups/${id}`, {
        method: 'DELETE'
      })
      .then(check)
      .then(() => dispatch({
        type: Actions.DELETE_GROUP,
        payload: { id }
      }))
      .catch(err => dispatch({
        type: Actions.DELETE_GROUP,
        payload: err,
        error: true
      }));
    };
  },

  editGroup(id, group) {
    return dispatch => {
      return fetch(`${SERVER_URL}/groups/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ group })
      })
      .then(check)
      .then(parse)
      .then(todo => dispatch({
        type: Actions.EDIT_GROUP,
        payload: {
          id: group.id,
          group: group
        }
      }))
      .catch(err => dispatch({
        type: Actions.EDIT_GROUP,
        payload: err,
        error: true
      }));
    };
  },

  fetchAllGroups() {console.log("hello");
    return dispatch => {
      return fetch(`${SERVER_URL}/groups`, {
        method: 'GET'
      })
      .then(check)
      .then(parse)
      .then(groups => dispatch({
        console.log(groups);
        type: Actions.FETCH_ALL_GROUPS,
        payload: { groups }
      }))
      .catch(err => dispatch({
        type: Actions.FETCH_ALL_GROUPS,
        payload: err,
        error: true
      }));
    };
  },

}
export default GroupActions;