/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Button, Text, View } from "react-native";

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button onPress={this._postData} title="logout" />
      </View>
    );
  }
  _postData = async () => {
    let location = new Location();
    location.append("lat", "123.321");
    location.append("log", "321.123");

    // this.setState({ text: "clicked" });
    fetch("https://myUrl.here/postApi", {
      method: "POST",
      body: location
    }).then(response => {
      this.setState({ text: JSON.stringify(response) });
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
