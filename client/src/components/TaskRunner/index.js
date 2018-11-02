import React, { Component } from 'react';
import DataTable from '../DataTable';
import { connect } from 'react-redux';
import './index.css';

export class TaskRunner extends Component {
  render() {
    const { taskData, runningMode, lastRun, taskImg, Q_table } = this.props
    const Q_table_Display = Q_table.map((d1, i1) => (
      <tr key={`1_${i1}`}>
        <td>{i1}</td>
        {d1.map((d2, i2) => (
          <td key={`2_${i2}`}>{d2.toFixed(2)}</td>
        ))}
      </tr>
    ));

    return (
      <div>
        <div className='taskrunner'>
          <div className='task-data'>
            <DataTable data={lastRun && lastRun.includes('RL') && taskData.length > 0 ? [taskData[taskData.length - 1]] : taskData} loading={runningMode ? true : false} />
            {
              lastRun && taskImg && <img src={taskImg} className='task-img' alt=""/>
            }
          </div>
        </div>
        <table className='qtable'>
          <thead>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
          </thead>
          <tbody>{Q_table_Display}</tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ task }) => ({
  runningMode: task.runningMode,
  taskData: task.taskData,
  lastRun: task.lastRun,
  taskImg: task.taskImg,
  Q_table: task.Q_table
})

export default connect(mapStateToProps)(TaskRunner);
