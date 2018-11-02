import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { runMode, finishMode } from '../../actions/task';
import './index.css';

export class DeviceWindow extends Component {
  startTask = (mode) => {
    this.props.runMode(mode, this.props.socket);
  }

  render() {
    const { mode, option, runningMode } = this.props;
    const runningDevice = runningMode ? runningMode.includes(mode) : false;
    return (
        <div className={`device-panel ${runningDevice && 'device-active'}`}>
          <div className='device-name'>
            {mode} Mode
          </div>
          <div className="run-btn-group">
            {option.map((opt, i) => {
              const running = runningMode && runningMode.includes(mode) && runningMode.includes(opt);              
              return (
                <Button
                  key={i}
                  type='primary'
                  icon={running ? 'poweroff' : 'caret-right'}
                  ghost
                  onClick={() => {
                      running
                      ? this.props.finishMode(this.props.socket)
                      : this.startTask(`${mode}_${opt}`);
                  }}
                >{running ? 'Stop' : opt}</Button>
              )
            })}
          </div>
        </div>
    )
  }
}

const mapStateToProps = ({task, global}) => ({
  runningMode: task.runningMode,
  socket: global.socket,
})

const mapDispatchToProps = (dispatch) => ({
  runMode: (mode, socket) => dispatch(runMode(mode, socket)),
  finishMode: (socket) => dispatch(finishMode(socket))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceWindow);
