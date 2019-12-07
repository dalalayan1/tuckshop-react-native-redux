import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";

export default class LiveOrdersComponent extends Component {
  constructor(props) {
    super(props);
    this.handleOrder = this.handleOrder.bind(this);

    this.state = {
      title: "Account Details"
    };
  }

  handleOrder(e, orderObj, status) {
    Object.assign(orderObj, { status });
    this.props.orderAction(orderObj);
  }

  render() {
    const { title } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headingContainer}>
          <Text
            style={[styles.font30, styles.textColorPink, { marginTop: 10 }]}
          >
            {title}
          </Text>
        </View>
        <ScrollView>
          <Image
            source={{
              uri: "http://www.upl.co/uploads/account1575743869.png"
            }}
            style={styles.imageIconStyle}
            height={Dimensions.get("window").height}
            width={Dimensions.get("window").width}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent("LiveOrdersComponent", () => LiveOrdersComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F3F6",
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonStyle: {
    // flex: 1,
    // flexDirection: "column",
    // alignItems: "flex-end"
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
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 4,
    marginBottom: 4,
    padding: 10
  },
  imageIconStyle: {
    marginTop: 0
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
