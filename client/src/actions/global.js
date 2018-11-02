import { SET_SOCKET } from '../constants/global';

export function setSocket(socket) {
    return {
        type: SET_SOCKET,
        payload: socket
    }
}