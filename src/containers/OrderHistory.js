import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OrderHistoryComponent from "../components/OrderHistory";

function mapStateToProps(state) {
  const { appReducer: { orderHistoryList } = {} } = state;

  return {
    orderHistoryList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistoryComponent);
