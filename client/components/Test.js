
import { List } from 'immutable';
import  React, {Component, PropTypes} from 'react';
import { GroupActions } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



export default class Test1 extends Component {
  
  static propTypes = {
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    groups: PropTypes.instanceOf(List).isRequired
  }

   constructor(props) {
    super(props);    
    this.state = {groups: null};
  }

  componentWillMount() {
    this.setState({groups: this.props.actions.fetchAllGroups()}, ()=>
      console.log(this));
  }



  render() {
    return (
      <div>
        Test David DeWitt2d
      </div>
    );
  }
}
