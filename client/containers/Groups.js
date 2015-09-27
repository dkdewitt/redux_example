import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import  {GroupActions} from '../actions';
import { bindActionCreators } from 'redux';


@connect(state => ({
    groups: state.groups
}))
export default class GroupContainer extends Component {


  componentDidMount() {
    const { dispatch, GroupActions } = this.props;
 
  }

    render() {
        const { counter, dispatch } = this.props;
        return (
            <Groups groups={this.props.groups.groups}
                     {...bindActionCreators(GroupActions, dispatch)} />
        );
    }
}


class Groups extends Component {
    static PropTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    };

    componentDidMount(){
         this.props.fetchAllGroups();
    }

componentWillReceiveProps(nextProps) {
   
}

getGroups(){
    this.props.fetchAllGroups();
}
    render() {


        const { increment, decrement, counter } = this.props;
        
        //console.log(state);
        let groups = _.map(this.props.groups, (group) => {
            //console.log(this);
            return group.title;
        })

        return (
            <div>
                {groups}

                <button onClick={this.getGroups.bind(this)}  value="Hello">Add </button>
            </div>
        );
    }
}


//export default GroupContainer;
