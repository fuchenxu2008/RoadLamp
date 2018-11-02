import React, { Component } from 'react';
import DeviceWindow from '../DeviceWindow';
import './index.css';

export default class DevicePanelList extends Component {
  render() {
    return (
        <div>
            <div className='device-panel-list'>
                <DeviceWindow
                    mode='Image'
                    option={['Auto(RL)', 'Iteration']}
                />
                <DeviceWindow
                    mode='Video'
                    option={['Auto(RL)']}
                />
            </div>
            <br /><br />
        </div>
        
    )
  }
}
