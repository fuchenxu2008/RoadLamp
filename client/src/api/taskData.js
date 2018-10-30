const database = {
    Image: {
        key: '1',
        mode: 'Image',
        analysis: 'Everything runs on Rasberry Pi',
        averageFrameRate: '0.4FPS',
        averagePowerConsumption: 'N/A',
        peakBandwidth: 'N/A',
    },
    Video: {
        key: '2',
        mode: 'Video',
        analysis: 'Task scheduling',
        averageFrameRate: '1.2FPS',
        averagePowerConsumption: 'N/A',
        peakBandwidth: 'N/A',
    }
}

export const getTaskData = (mode) => {
    return database[mode];
}