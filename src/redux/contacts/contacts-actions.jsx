import { v4 as uuidv4 } from "uuid";
import types from "./contacts-types";

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

export const changeFilter = (e) => ({
  type: types.FILTER,
  payload: e.currentTarget.value,
});