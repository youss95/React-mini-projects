import createItemsLogic from "../common/createItemsLogic";
import createReducer from "../common/createReducer";
/*
//type
const ADD = "friend/ADD";
const REMOVE = "friend/REMOVE";
const EDIT = "friend/EDIT";
//action
export const addFriend = (friend) => ({ type: ADD, friend });
export const removeFriend = (friend) => ({ type: REMOVE, friend });
export const editFriend = (friend) => ({ type: EDIT, friend });
//initial
const INITIAL_STATE = { friends: [] };
//reducer
const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter(
      (friend) => friend.id !== action.friend.id
    )),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex(
      (friend) => friend.id === action.friend.id
    );
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  },
});
**/
const { add, remove, edit, reducer } = createItemsLogic("friends");
export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
export default reducer;
