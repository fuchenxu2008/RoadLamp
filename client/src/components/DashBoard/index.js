import React, { Component } from 'react';
import { Icon } from 'antd';
import DevicePanelList from '../DevicePanelList';
import TaskRunner from '../TaskRunner';
import './index.css';

export default class DashBoard extends Component {
  render() {
    return (
      <div className='dashboard page'>
        <h2 className='section-title'>
          <Icon type="rocket" /> Control Panel
        </h2>
        <DevicePanelList />
        <h2 className='section-title'>
          <Icon type="hourglass" /> Current Task
        </h2>
        <TaskRunner />
      </div>
    )
  }
}
