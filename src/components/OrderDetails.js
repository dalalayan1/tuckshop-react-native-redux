import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Image from "react-native-scalable-image";

const OrderDetails = ({
  id,
  title,
  time,
  amount,
  status,
  imgSrc,
  orderSrc,
  closeModal
}) => (
  <View style={styles.orderDetailsWrapper} key={id}>
    <Text
      style={[
        styles.textColorPink,
        styles.font30,
        styles.centerText,
        { marginBottom: 20 }
      ]}
    >
      Order Details
    </Text>
    <Text style={[styles.font20, styles.capitalText]}>{title}</Text>
    <Text style={[styles.textColorGray, styles.amountText]}>{id}</Text>
    <Text style={[styles.textColorGray]}>{time}</Text>
    {status && (
      <Text style={[styles.font16, styles.boldText]}>Status: {status}</Text>
    )}
    {imgSrc && (
      <Image
        source={{
          uri: imgSrc
        }}
        style={styles.imageIconStyle}
        width={Dimensions.get("window").width * 0.2}
      />
    )}
    {orderSrc && (
      <ScrollView>
        <Image
          source={{
            uri: orderSrc
          }}
          style={styles.imageStyle}
          width={Dimensions.get("window").width * 0.8}
        />
      </ScrollView>
    )}
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity style={styles.orderDetailsBtn} onPress={closeModal}>
        <Text
          style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
        >
          Accept
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderDetailsBtn} onPress={closeModal}>
        <Text
          style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
        >
          Reject
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const AddOrder = ({ addOrderHandler }) => (
  <View style={styles.orderDetailsWrapper}>
    <Text style={[styles.textColorPink, styles.font30, styles.centerText]}>
      Create Order
    </Text>
    <View style={styles.formWrapper}>
      <TextInput style={styles.inputField} placeholder="Order name" />
      <TextInput style={styles.inputField} placeholder="Phone number" />
    </View>
    <Image
      source={{
        uri: "http://www.upl.co/uploads/neworder1575730605.png"
      }}
      style={styles.imageStyle}
      width={Dimensions.get("window").width * 0.7}
    />
    <TouchableOpacity style={styles.createOrderBtn} onPress={addOrderHandler}>
      <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
        Add order
      </Text>
    </TouchableOpacity>
  </View>
);

export default class ModalComponent extends Component {
  render() {
    const { type } = this.props;

    return (
      <View style={styles.orderDetailsWrapper}>
        {type === "ORDER_DETAILS" && <OrderDetails {...this.props} />}
        {type === "ADD_ORDER" && <AddOrder {...this.props} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F3F6",
    padding: 20
  },
  orderDetailsWrapper: {
    backgroundColor: "#fff",
    marginTop: 50,
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0
  },
  imageIconStyle: {
    padding: 10,
    marginTop: 10,
    height: 64,
    width: 64
  },
  imageStyle: {
    marginTop: 30
  },
  orderDetailsBtn: {
    backgroundColor: "rgb(255,66,151)",
    color: "#fff",
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center"
  },
  createOrderBtn: {
    backgroundColor: "rgb(255,66,151)",
    color: "#fff",
    marginTop: 20,
    marginBottom: 30,
    padding: 20,
    width: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center"
  },
  headingContainer: {
    marginTop: 20,
    marginBottom: 16
  },
  sectionContainer: {
    width: "100%",
    backgroundColor: "#fff"
  },
  formWrapper: {
    // marginTop: 0,
    // marginLeft: 10,
    // marginRight: 10
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
  centerText: {
    textAlign: "center"
  },
  textColorGray: {
    color: "#707070"
  },
  textColorPink: {
    color: "rgb(255,66,151)"
  },
  amountText: {
    marginTop: 8,
    marginBottom: 8
  },
  inputField: {
    fontSize: 20,
    height: 50,
    width: 300,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 10
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
