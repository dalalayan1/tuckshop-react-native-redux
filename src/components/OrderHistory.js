import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  AppRegistry,
  ScrollView,
  SafeAreaView
} from "react-native";
import Image from "react-native-scalable-image";
import Icon from "react-native-vector-icons/Ionicons";
import OrderTile from "./OrderTile";
import OrderDetails from "./OrderDetails";

export default class OrderHistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Order History",
      noResultsText: "No orders!",
      showOrderDetailsModal: false,
      selectedOrder: null
    };
  }

  showOrderDetails(e, orderObj) {
    this.setState({
      showOrderDetailsModal: true,
      selectedOrder: orderObj
    });
  }

  hideOrderDetails(e) {
    this.setState({
      showOrderDetailsModal: false,
      selectedOrder: null
    });
  }

  render() {
    const {
      title,
      noResultsText,
      showOrderDetailsModal,
      selectedOrder
    } = this.state;
    const { orderHistoryList: orderList } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headingContainer}>
          <Text
            style={[
              styles.font30,
              styles.textColorPink,
              { textAlign: "center", marginTop: 20 }
            ]}
          >
            {title}
          </Text>
        </View>
        <ScrollView>
          <Image
            height={Dimensions.get("window").height}
            width={Dimensions.get("window").width}
            source={{
              uri: "http://www.upl.co/uploads/116562list1575733326.png"
            }}
            style={styles.imageIconStyle}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent(
  "OrderHistoryComponent",
  () => OrderHistoryComponent
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    width: "100%"
  },
  imageIconStyle: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  orderDetailsContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.8)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    // top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  closeOrderDetailsBtn: {
    position: "absolute",
    top: 20,
    right: 20
  },
  headingContainer: {
    marginTop: 20,
    marginBottom: 16
  },
  orderListContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center"
  },
  sectionContainer: {
    width: "auto",
    backgroundColor: "#fff",
    margin: 10,
    padding: 20,
    borderColor: "rgb(255,66,151)",
    borderWidth: 2
  },
  font30: {
    fontSize: 30
  },
  font20: {
    fontSize: 20
  },
  font16: {
    fontSize: 16
  },
  boldText: {
    fontWeight: "bold"
  },
  capitalText: {
    textTransform: "capitalize"
  },
  textColorGray: {
    color: "#707070"
  },
  textColorPink: {
    color: "rgb(255,66,151)"
  },
  amountText: {
    marginTop: 6,
    marginBottom: 16
  },
  inputField: {
    height: 50,
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "#000"
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#000"
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40
  }
});
