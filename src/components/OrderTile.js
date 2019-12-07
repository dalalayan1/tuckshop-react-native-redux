import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const OrderTile = ({ id, title, time, amount, status, imgSrc }) => (
  <View style={styles.sectionContainer} key={id}>
    <Text style={[styles.font20, styles.capitalText]}>{title}</Text>
    <Text style={[styles.textColorGray, styles.amountText]}>{id}</Text>
    <Text style={[styles.textColorGray]}>{time}</Text>
    <Text style={[styles.font16, styles.textColorPink, styles.boldText, styles.font16]}>
      {amount}
    </Text>
    {status && (
      <Text style={[styles.font16, styles.boldText]}>Status: {status}</Text>
    )}
    {imgSrc && (
      <Image
        source={{
          uri: imgSrc
        }}
        style={styles.imageIconStyle}
      />
    )}
  </View>
);

export default OrderTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F3F6",
    padding: 20
  },
  imageIconStyle: {
    padding: 10,
    marginTop: 10,
    height: 64,
    width: 64
  },
  headingContainer: {
    marginTop: 20,
    marginBottom: 16
  },
  sectionContainer: {
    width: "100%",
    backgroundColor: "#fff"
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
    marginTop: 16,
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
