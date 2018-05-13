import {GET_CONTACTS,GET_CONTACTS_FAILURE,GET_CONTACTS_SUCCESS} from '../actionTypes';

export function getContacts(){
    return {
        type:GET_CONTACTS
    }
}

export function getContactsSuccess(contacts){
    return{
        type:GET_CONTACTS_SUCCESS,
        ContactsItem:contacts
    }
}

export function getContactsError(error){
    return{
        type:GET_CONTACTS_FAILURE,
        ContactsItem:error
    }
}
