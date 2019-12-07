import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppContainer from "./App";

export default connect(
  state => ({
    state: state.reducer
  }),
  dispatch => ({
    actions: bindActionCreators({}, dispatch)
  })
)(AppContainer);

