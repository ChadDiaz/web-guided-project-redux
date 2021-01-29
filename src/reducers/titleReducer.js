import { TOGGLE_EDITING, UPDATE_TITLE } from '../actions/titleAction'

const initialState = {
    title: "Dragon Member List 🐲",
    editing: false
  };
  
  export const titleReducer = (state = initialState, action) => {
    console.log("cd: titleReducer.js: titleReducer: state, action: ", state,action)
    switch (action.type) {
      case UPDATE_TITLE:
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      // NEW CASE HERE
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      default:
        return state;
    }
  };
  