import  React, {Component} from 'react';

export default class Sidebar extends Component {
  render() {
    return (
<div className='sidebar'>
    <div className='title'>
      PyLync
    </div>
    <ul className='nav'>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Statistics</a>
      </li>
      <li>
        <a className='active'>Milestones</a>
      </li>
      <li>
        <a>Experiments</a>
      </li>
      <li>
        <a>Previews</a>
      </li>
      <li>
        <a>Assets</a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Logout</a>
      </li>
    </ul>
  </div>
    );
  }
};



module.exports = Sidebar;