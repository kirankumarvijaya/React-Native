import {INC,DEC} from '../actionTypes/index'
export function incrementActionCreators(){
    return {
        type:INC
    }
}

export function decrementActionCreators(){
    return {
        type:DEC
    }
}