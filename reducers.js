import {GET_CONTACTS,GET_CONTACTS_SUCCESS,GET_CONTACTS_FAILURE} from '../actionTypes';

export  default function productReducer(
    prevState={
        products:[],
        isLoading:true    
    },
    action
){
    switch(action.type){
        case GET_CONTACTS:{
            return {...prevState,isLoading:true}
        }
        case GET_CONTACTS_SUCCESS:{
            return {...prevState,isLoading:false,contacts:action.productValues}
        }
        case GET_CONTACTS_FAILURE:{
            return {...prevState,isLoading:false,contacts:action.productValues}
        }
        default:{
            return prevState;   
        }

    }

} 