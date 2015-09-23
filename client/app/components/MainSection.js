import React, { Component, PropTypes } from 'react';
//import TodoItem from './TodoItem';
//import Footer from './Footer';
import { SHOW_ALL, SHOW_MY_GROUPS, SHOW_ACTIVE_GROUPS } from '../constants/TodoFilters';

const GROUP_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_MY_GROUPS]: group => !group.is_member,
  [SHOW_ACTIVE_GROUPS]: group => group.is_active
};

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted() {

  }

  handleShow(filter) {
    this.setState({ filter });
  }



  render() {
    //const { todos, actions } = this.props;
    //const { filter } = this.state;

    //const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    //const completedCount = todos.reduce((count, todo) =>
    //  todo.completed ? count + 1 : count,
    //  0
    //);
  console.log(this.props);
    return (
      <div className="main">
        {this.props.groups}
        <br />
        <a onClick={function(){alert();}}>Test</a>
      </div>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;