export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TITLE ='UPDATE_TITLE';
export const ADD_NEW_MEMBER = 'ADD_NEW_MEMBER';
export const TOGGLE_DRAGON_STATUS = 'TOGGLE_DRAGON_STATUS';

export const toggleEditing = () => {
    return {
        type: TOGGLE_EDITING
    }
}

export const updateTitle = (newTitle) => {
    return {
        type: UPDATE_TITLE,
        payload: newTitle
    }
}

export const addNewMember = (newName) => {
    return {
        type: ADD_NEW_MEMBER,
        payload: newName
    }
}

export const toggleDragonStatus = (memberIdx) => {
    return {
        type: TOGGLE_DRAGON_STATUS,
        payload: memberIdx
    }
}