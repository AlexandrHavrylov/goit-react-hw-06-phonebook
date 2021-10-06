import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, changeFilter } from "./contacts-actions";

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (state.find((contact) => contact.name === payload.name)) {
      alert(`${payload.name} is alredy in contacts `);
      return state;
    }
    return (state = [payload, ...state]);
  },
  [deleteContact]: (state, { payload }) => {
    return state.filter((contact) => contact.id !== payload);
  },
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
