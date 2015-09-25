
import { List } from 'immutable';
import  React, {Component, PropTypes} from 'react';
import { GroupActions } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



function mapStateToProps(state) {
  return {
    counter: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GroupActions, dispatch);
}


//@connect( mapDispatchToProps)
class Test1 extends Component {
  

   constructor(props) {
    super(props);    
    this.state = {groups: null};
    let { dispatch } = this.props;
    console.log(this);
  }

  componentWillMount() {
    console.log(this.props.fetchAllGroups());
    //this.setState({groups: this.props.fetchAllGroups()}, ()=>
    //  console.log(this));
  }



  render() {
    return (
      <div>
        Test David DeWitt2d
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test1);