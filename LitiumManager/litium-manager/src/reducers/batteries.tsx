import React from 'react';

const batteries: any = (state = { batteries: batteries}, action: any) => {
    const fullState = state.batteries;
    //state.selectedelement = action.index;
    //const objIndex = state.elements.findIndex((obj) => obj.id === action.index);
    switch (action.type) {
        case 'GET_BATTERY': {
            fullState[state.batteries].id = action.id;
            return state;
        }
        default: {
            return state;
        }
    }
};

export default batteries;
