import * as constants from './constans'

export interface AddNewName {
    type: constants.ADD_NEW_NAME;
    name: string;
};

export interface RemoveName {
    type: constants.REMOVE_NAME;
    name: string;
};

export type NamesActions = AddNewName | RemoveName;

export function removeName(name: string): RemoveName {
    return {
        type: constants.REMOVE_NAME,
        name: name
    };
};

export function addNewName(name: string): AddNewName {
    return {
        type: constants.ADD_NEW_NAME,
        name: name
    };
};