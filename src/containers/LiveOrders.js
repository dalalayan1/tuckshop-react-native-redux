import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { orderAction, addOrderItem } from "../actions";
import LiveOrdersComponent from "../components/LiveOrders";

function mapStateToProps(state) {
  const { appReducer: { liveOrdersList } = {} } = state;

  return {
    liveOrdersList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      orderAction,
      addOrderItem
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveOrdersComponent);
