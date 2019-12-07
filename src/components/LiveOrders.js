import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import OrderTile from "./OrderTile";
import OrderDetails from "./OrderDetails";

export default class LiveOrdersComponent extends Component {
  constructor(props) {
    super(props);
    this.handleOrder = this.handleOrder.bind(this);

    this.state = {
      title: "Live Orders",
      noResultsText: "No orders!",
      showModal: false,
      selectedOrder: null,
      modalType: null
    };
  }

  handleOrder(e, orderObj, orderAction) {
    e.stopPropagation();
    Object.assign(orderObj, { orderAction });
    this.props.orderAction(orderObj);
  }

  openModal(e, orderObj, modalType) {
    this.setState({
      showModal: true,
      selectedOrder: orderObj,
      modalType
    });
  }

  closeModal(e) {
    this.setState({
      showModal: false,
      selectedOrder: null,
      modalType: null
    });
  }

  addOrderHandlerFunc() {
    const newOrderItem = {
      user: 1,
      id: 2744234784652,
      title: "Vijay Kumar",
      time: "Sun, 12pm",
      status: "PENDING",
      online: true,
      imgSrc: "https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png"
    };
    this.props.addOrderItem(newOrderItem);
    this.closeModal();
  }

  render() {
    const {
      title,
      noResultsText,
      showModal,
      selectedOrder,
      modalType
    } = this.state;
    const { liveOrdersList: orderList } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={[styles.font30, styles.textColorPink]}>{title}</Text>
        </View>
        {orderList && orderList.length && (
          <View style={styles.orderListContainer}>
            <ScrollView>
              {orderList.map(orderInfo => (
                <TouchableOpacity
                  style={styles.sectionContainer}
                  key={orderInfo.id}
                  onPress={e => this.openModal(e, orderInfo, "ORDER_DETAILS")}
                >
                  <OrderTile {...orderInfo} />
                  {orderInfo.status === "PENDING" && (
                    <View style={styles.buttonWrapper}>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={e =>
                          this.handleOrder(e, orderInfo, "IN_PROGRESS")
                        }
                      >
                        <Icon name="md-checkmark" color="green" size={30} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={e =>
                          this.handleOrder(e, orderInfo, "REJECTED")
                        }
                      >
                        <Icon name="ios-close" size={40} />
                      </TouchableOpacity>
                    </View>
                  )}
                  {orderInfo.status === "IN_PROGRESS" && (
                    <View style={styles.buttonWrapper}>
                      <View style={styles.buttonStyle}>
                        <Icon
                          name="ios-restaurant"
                          color="rgb(255,66,151)"
                          size={40}
                        />
                      </View>
                    </View>
                  )}
                  {orderInfo.status === "REJECTED" && (
                    <View style={styles.buttonWrapper}>
                      <View style={styles.buttonStyle}>
                        <Icon
                          name="ios-remove-circle-outline"
                          color="rgb(255,66,151)"
                          size={40}
                        />
                      </View>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        {!orderList ||
          (!orderList.length && (
            <View style={styles.sectionContainer}>
              <Text style={[styles.font20, styles.capitalText]}>
                {noResultsText}
              </Text>
            </View>
          ))}
        <TouchableOpacity
          style={styles.addOrderBtn}
          onPress={e => this.openModal(e, {}, "ADD_ORDER")}
        >
          <Icon name="md-add-circle" color="rgb(255,66,151)" size={50}></Icon>
        </TouchableOpacity>
        {showModal && (
          <View style={styles.orderDetailsContainer}>
            <TouchableOpacity
              style={styles.closeOrderDetailsBtn}
              onPress={e => this.closeModal(e)}
            >
              <Icon name="ios-close" size={40} />
            </TouchableOpacity>
            <OrderDetails
              {...selectedOrder}
              closeModal={() => this.closeModal()}
              addOrderHandler={() => this.addOrderHandlerFunc()}
              type={modalType}
            />
          </View>
        )}
      </View>
    );
  }
}

AppRegistry.registerComponent("LiveOrdersComponent", () => LiveOrdersComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#F1F3F6",
    paddingTop: 20,
    paddingBottom: 20,
    position: "relative"
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    right: 20,
    top: 10
  },
  addOrderBtn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 0
  },
  imageIconStyle: {
    height: 25,
    width: 25
  },
  buttonStyle: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 0
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
  orderDetailsContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,1)",
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
