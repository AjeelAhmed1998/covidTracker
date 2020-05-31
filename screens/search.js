import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";

import {} from "@react-navigation/drawer";
import {} from "@react-navigation/stack";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: "",
      touchedCountry: "",
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch("https://api.covid19api.com/countries")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });

        this.arrayholder = responseJson;
      })

      .catch((error) => {
        console.error(error);
      });
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.Country
        ? item.Country.toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: newData,
      text: text,
    });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#37bdb4",
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.searchArea}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            clearButtonMode="always"
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.textStyle}
              onPress={() => {
                console.log(item.Country);
                this.props.navigation.navigate("searched country", {
                  searchedCountry: item.Country,
                  searchedSlug: item.Slug,
                });
              }}
            >
              <Text style={styles.countryStyle}>{item.Country}</Text>
            </TouchableOpacity>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    padding: 16,
  },
  textStyle: {
    padding: 20,
  },

  countryStyle: {
    fontFamily: "Raleway-light-normal",
  },
  textInputStyle: {
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#37bdb4",
    backgroundColor: "#FFFFFF",
    flex: 3,
    fontFamily: "Raleway-light-normal",
  },

  searchArea: {
    flexDirection: "row",
    alignItems: "baseline",
    
  },
});
