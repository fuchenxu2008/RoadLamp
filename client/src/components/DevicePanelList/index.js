import React, { Component } from 'react';
import DeviceWindow from '../DeviceWindow';
import './index.css';

export default class DevicePanelList extends Component {
  render() {
    return (
        <div>
            <div className='device-panel-list'>
                <DeviceWindow mode='Image' active/>
                <DeviceWindow mode='Video'/>
            </div>
            <br /><br />
        </div>
        
    )
  }
}
