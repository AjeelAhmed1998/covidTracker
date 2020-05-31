import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import DayOneCard from "./dayOneCard";
import SummaryCard from "./summaryCard";

import Search from "./search";

import { NavigationContainer } from "@react-navigation/native";
import {} from "@react-navigation/stack";

export default class SearchedCountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      global: "",
      dataSource: "",
      ND: "",
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

  render(props) {
    const { searchedCountry } = this.props.route.params;
    const { searchedSlug } = this.props.route.params;

    return (
      <View style={styles.barawalaView}>
        <View style={styles.countryName}>
          <Text style={styles.countryStyle}>{searchedCountry}</Text>
        </View>
        <View style={styles.dayoneCard}>
          <DayOneCard
            style={styles.dayoneCard}
            slug={searchedSlug}
          ></DayOneCard>
        </View>
        <View style={styles.summaryCard}>
          <SummaryCard
            style={styles.summaryCard}
            slug={searchedSlug}
            name={searchedCountry}
          ></SummaryCard>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countryName: {
    paddingTop: 40,
    alignContent: "center",
    alignItems: "center",
  },

  barawalaView: {
    justifyContent: "center",
  },

  dayoneCard: {
    paddingTop: 20,
    paddingBottom: 10,
  },

  summaryCard: {
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 30,
  },

  goback: {
    paddingTop: 20,
  },
  countryStyle: {
    fontFamily: "Maven-pro-bold",

    fontSize: 24,
  },
});
