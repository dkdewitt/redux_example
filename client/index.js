'use strict';
import 'babel-core/polyfill';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { default as Router, Link, Route, RouteHandler, Redirect } from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, compose, combineReducers,applyMiddleware } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import {Test1, test, GroupRouter} from './components';
import {Sidebar} from './components/layout';
import CounterApp from './components/Counter';
import {GroupContainer} from './containers';
import thunkMiddleware from 'redux-thunk';
import * as CounterActions from './actions/Counter';
require("scss/app.scss");
import createHistory from 'history/lib/createBrowserHistory';
import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';

import rootReducer from './reducers';
console.log(GroupContainer);

//@connect(state => ({ routerState: state.router }))
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  constructor(props,context) {
    super(props,context);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }


 componentDidMount() {

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

    <div className='main isOpen'>
    <a className='button'></a>
    <div className="container">
        <h1>App Container</h1>
        
        {this.props.children}
      </div></div></div></div>
    );
  }
}



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
                <Route path="/counter" component={CounterApp} />
              </Route>
            <Route path="/groups" component={GroupContainer} />
            </Route>

            );



let middleware = [thunkMiddleware];




const store = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory,routes, })
)(createStore)(rootReducer);



class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </Provider>

      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));