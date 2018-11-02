import { RUN_MODE, FINISH_MODE, UPDATE_DATA } from '../constants/task';

export const runMode = (mode, socket) => (dispatch) => {
    dispatch(runningMode(mode));
    socket.emit('start', mode);
    console.log('mode: ', mode);

    socket.on('img', (data) => {
        console.log('Topic: img');
        dispatch(updateData(mode, data))
    })

    socket.on('complete', () => {
        console.log('Topic: complete');
        dispatch(finishMode(socket));
    })
}

export const runningMode = (mode) => ({
    type: RUN_MODE,
    payload: mode,
})

export const updateData = (mode, data) => ({
    type: UPDATE_DATA,
    payload: {
        ...data,
        mode,
        accuracy: 'N/A'
    }
})

export const finishMode = (socket) => {
    socket.emit('stop');
    socket.removeAllListeners('img');
    return {
        type: FINISH_MODE,
    }
}