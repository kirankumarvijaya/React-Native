import {put,takeLatest} from 'redux-saga/effects';
import {GET_CONTACTS} from '../actionTypes';
import {getContactsSuccess,getContactsError} from '../actionCreators'

export function* ContactsWatcher(){
    yield takeLatest(GET_CONTACTS,startFetchCall);
}

function* startFetchCall(){
    try{
        let list=fetch('https://randomuser.me/api/?results=20').then(r=>r.json());
        yield dispatch(getContactsSuccess(list.results));
    }
    catch(error){
        yield dispatch(getContactsSuccess(error));
    }
}