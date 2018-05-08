import {INC,DEC} from '../actionTypes/index'

function counterReducer(prevState={counter:0},action){
    switch (action.type){
        case INC:
            return {counter:prevState.counter+1};
        case DEC:
            return {counter:prevState.counter-1};
        default:
            return prevState;

    }
}

export default counterReducer