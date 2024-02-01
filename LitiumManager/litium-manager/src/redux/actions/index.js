export const setBatteries = (nr) => {
    return {
        type: 'SET_DATA_BATTERIES',
        payload: nr
    };
};
export const getBattery = (id) => {
    return {
        type: 'GET_BATTERY',
        id: id
    };
};
