import ActionType from "../contants/action-types";
const initialState = [
  {
    id: 1,
    title: "doston",
    category: "Full-Stach developer...",
  },
];
export const setProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
