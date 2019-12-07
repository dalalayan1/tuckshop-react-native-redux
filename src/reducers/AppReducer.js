export default appReducer = (
  state = {
    liveOrdersList: [
      {
        id: 184354731249,
        title: "Anushka Shankar",
        time: "Today, 2:34PM",
        amount: "Rs 220",
        online: true,
        status: "PENDING",
        imgSrc:
          "https://c7.uihere.com/files/47/533/247/swiggy-office-business-online-food-ordering-delivery-bangalore-business.jpg",
        orderSrc: "http://www.upl.co/uploads/tanayorder1575733843.png"
      },
      {
        id: 284357247349,
        title: "Tanay Agarwal",
        time: "Today, 2:21PM",
        amount: "Rs 220",
        online: true,
        status: "IN_PROGRESS",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/b/bb/Square_zomato_logo_new.png",
        orderSrc: "http://www.upl.co/uploads/tanayorder1575733843.png"
      }
    ],
    orderHistoryList: [
      {
        user: 1,
        id: 8258752773464856,
        title: "quo adipisci enim quam",
        status: "accepted",
        online: true,
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/b/bb/Square_zomato_logo_new.png"
      },
      {
        user: 1,
        id: 825875124896424322756,
        title: "quo adipisci enim quam",
        online: true,
        status: "accepted",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/b/bb/Square_zomato_logo_new.png"
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case "HANDLE_ORDER": {
      const selectedOrder = action.payload;

      const liveOrdersListState = JSON.parse(
        JSON.stringify(state.liveOrdersList)
      );

      liveOrdersListState.forEach(order => {
        if (order.id == selectedOrder.id) {
          order.orderAction === "IN_PROGRESS"
            ? (order.status = "IN_PROGRESS")
            : (order.status = "REJECTED");
        }
      });

      const newState = Object.assign({}, state, {
        liveOrdersList: liveOrdersListState
      });
      return newState;
    }
    case "ADD_ORDER": {
      const liveOrdersListState = JSON.parse(
        JSON.stringify(state.liveOrdersList)
      );

      liveOrdersListState.push(action.payload);

      const newState = Object.assign({}, state, {
        liveOrdersList: liveOrdersListState
      });
      return newState;
    }
    default:
      return state;
  }
};
