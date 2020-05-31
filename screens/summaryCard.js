import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Search from "./search";

import { NavigationContainer } from "@react-navigation/native";
import {} from "@react-navigation/stack";

export default class SummaryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      global: "",
      dataSource: "",
      ND: "",
      TD: "",
      TC: "",
      TR: "",
      Slug: "",
      dayOneList: "",
    };

    this.keyholder = "";
    this.countryList = [];
    this.dayOneList = [];
    this.dayOneCountry = "";
    this.firstDayInfo = "";
    this.variablee = "";
  }

  componentDidMount(props) {
    return fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            dataSource: responseJson,
          },
          function () {
            this.keyholder = responseJson; // the whole object is in it

            this.countryList = this.keyholder.Countries;
            for (var i = 0; i < this.countryList.length; i++) {
              let element;

              element = this.countryList[i]["Slug"]; //.Slug;

              if (element == this.props.slug) {
                this.setState({
                  ND: this.countryList[i]["NewDeaths"],
                  TD: this.countryList[i]["TotalDeaths"],
                  TC: this.countryList[i]["TotalConfirmed"],
                  TR: this.countryList[i]["TotalRecovered"],
                  Slug: this.countryList[i]["Slug"],
                });
                console.log(this.countryList[i]["NewDeaths"]);
              }
            }
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(props) {
    return (
      <View style={styles.cardView}>
        <View style={styles.headingView}>
          <Text style={styles.headingStyle}>Summary</Text>
        </View>

        <View>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>New deaths </Text>
            <Text style={styles.numberStyle}>{this.state.ND}</Text>
          </View>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Total deaths</Text>
            <Text style={styles.numberStyle}>{this.state.TD}</Text>
          </View>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Total confirmed </Text>
            <Text style={styles.numberStyle}>{this.state.TC}</Text>
          </View>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Total recovered</Text>
            <Text style={styles.numberStyle}>{this.state.TR}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#AFF8D8",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },

  infoView: {},

  infoPadding: {
    padding: 20,
  },

  headingView: {
    padding: 10,
  },

  headingStyle: {
    fontFamily: "Raleway-light",
    fontSize: 24,
  },

  infoStyel: {
    fontFamily: "Raleway-light-normal",
  },

  numberStyle: {
    fontFamily: "Maven-pro-regular",
    fontSize: 25,
  },
});
