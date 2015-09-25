"use strict";
import 'babel-core/polyfill';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { default as Router, Link, Route, RouteHandler, Redirect } from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import configureStore from './store/configureStore';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
const store = configureStore();
import {Test1, test, GroupRouter} from './components';
import {Sidebar} from './components/layout';

require("scss/app.scss");

import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';



function mapStateToProps(state) {
  return {
    routerState: state.router
  };
}




//@connect(state => ({ routerState: state.router }))
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }


 componentDidMount() {
    console.log(this.props);
    //const { dispatch, selectedReddit } = this.props;
    //dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  render() {
    const links = [
      '/',
      '/parent',
      '/parent/child?bar=baz',
      '/parent/child/123?baz=foo',
      '/groups'
    ].map(l =>
      <p>
        <Link to={l}>{l}</Link>
      </p>
    );

    return (
<div>
<div className='wrapper'>
  <Sidebar />
        <h1>App Container</h1>
        {links}
        {this.props.children}
      </div></div>
    );
  }
}

connect(mapStateToProps)(App);

class Parent extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.props.children}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child</h2>
      </div>
    );
  }
}


const routes = (
            <Route path="/" component={App}>
              <Route path="/parent" component={Parent}>
                <Route path="/child" component={Child} />
                <Route path="/child/:id" component={Test1} />
                
              </Route>
            <Route path="/groups" component={Test1} />
            </Route>

            );



class Root extends Component {
  render() {console.log(this);
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter store={store}>
            {routes}
          </ReduxRouter>
        </Provider>

      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));