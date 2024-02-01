const batteriesReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_DATA_BATTERIES':
            return action.payload;
        default:
            return state;
    }
};

export default batteriesReducer;
