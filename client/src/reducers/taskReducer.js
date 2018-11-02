import { RUN_MODE, FINISH_MODE, UPDATE_DATA } from '../constants/task';
import uuid from 'uuid/v4';

const initialState = {
    runningMode: null,
    taskData: [], // might pile up
    lastRun: null,
    historyData: [],
    taskImg: null,
    Q_table: [],
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case RUN_MODE:
            return {
                ...initialState,
                runningMode: action.payload,
                lastRun: action.payload,
                historyData: state.historyData,
            };
        case UPDATE_DATA:
            return {
                ...state,
                taskImg: action.payload.frame,
                Q_table: action.payload.Q_table,
                taskData: state.taskData.concat({
                    key: uuid(),
                    mode: action.payload.mode,
                    analysis: action.payload.cut_point,
                    accuracy: action.payload.accuracy,
                    averageFrameRate: action.payload.fps,
                    averagePowerConsumption: 'N/A',
                })
            }
        case FINISH_MODE:
            return {
                ...state,
                runningMode: null,
            };
        default:
            return state;
    }
}