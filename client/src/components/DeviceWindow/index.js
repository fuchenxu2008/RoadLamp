import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { runMode } from '../../actions/task';
import './index.css';

export class DeviceWindow extends Component {
  startTask = (mode) => {
    let time = 0;
    if (mode === 'Image') time = 3000;
    if (mode === 'Video') time = 2000;
    this.props.runMode(mode, time);
  }

  render() {
    const {mode, runningMode} = this.props;
    const running = mode === runningMode;
    return (
        <div className={`device-panel ${running && 'device-active'}`}>
          <div className='device-name'>
            {mode} Mode
          </div>
          <div className="run-btn-group">
            <Button
              type='primary'
              ghost
              icon='caret-right'
              onClick={() => this.startTask(mode)}
              disabled={running}
            >Auto(RL)</Button>
            {
              mode === 'Image' &&
              <Button
                type='primary'
                ghost
                icon='caret-right'
                onClick={() => this.startTask(mode)}
                disabled={running}
              >Iteration</Button>
            }
          </div>
        </div>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  runningMode: task.runningMode,
})

const mapDispatchToProps = (dispatch) => ({
  runMode: (mode, time) => dispatch(runMode(mode, time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceWindow);
