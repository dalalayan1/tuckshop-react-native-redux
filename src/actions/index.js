export const orderAction = payload => {
  return {
    type: "HANDLE_ORDER",
    payload
  };
};

export const addOrderItem = payload => {
  return {
    type: "ADD_ORDER",
    payload
  };
};