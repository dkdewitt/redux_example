import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/actions';

class App extends Component {
  render() {
    const { groups, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);
    console.log(this.state);
    return (
      <div>
      
        <MainSection groups={groups} addGroup=  {group =>dispatch(TodoActions.addGroup(group))} actions={actions}  />
      </div>
    );
  }
}

App.propTypes = {
  groups: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

export default connect(mapStateToProps)(App);