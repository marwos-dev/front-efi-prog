import { CONSTANTS } from "../actions"

export const addCard = (list_id, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {text, list_id},
  }
};

// export const editCard = (id, list_id, newText) => {
//   return {
//     type: CONSTANTS.EDIT_CARD,
//     payload: { id, list_id, newText }
//   };
// };

// export const deleteCard = (id, list_id) => {
//   return {
//     type: CONSTANTS.DELETE_CARD,
//     payload: { id, list_id }
//   };
// };