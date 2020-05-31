import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import CountryCard from "./countryCard";
import { Switch } from "react-native-paper";

export default class EachCountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: "",
      country: "",
    };
    this.keyholder = "";
    this.arrayOfCountries = [];
    this.post = "";
    this.country = "";
    this.arrayOfContinents = ["Asia", "Europe"];
    this.continent = "";
    console.log("hello this is " + this.props.name);

    switch (this.props.route.name) {
      case "Asia":
        this.continent = "Asia";
        break;
      case "Europe":
        this.continent = "Europe";
        break;

      case "NA":
        this.continent = "North%20America";
        break;

      case "SA":
        this.continent = "South%20America";
        break;

      case "Africa":
        this.continent = "Africa";
        break;

      case "Oceania":
        this.continent = "Australia%2Foceania";
        break;
    }
  }

  componentDidMount(props) {
    return (
      //send the continent name as props in fetch so I can
      //keep the same screen
      fetch("http://disease.sh/v2/continents/" + this.continent)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState(
            {
              dataSource: responseJson,
            },
            function () {
              this.keyholder = responseJson;
              this.arrayOfCountries = this.keyholder.countries;
              console.log(this.arrayOfCountries);
            }
          );
        })

        .then(() => {
          return fetch(
            //I can't remember why I wrote the index number there
            "http://disease.sh/v2/countries/" + this.arrayOfCountries[0]
          );
        })

        .then((response2) => response2.json())

        .then((response2Json) => {
          this.setState(
            {
              country: response2Json,
            },
            function () {
              console.log(this.state.country.country);
            }
          );
        })

        .catch((error) => {
          console.error(error);
        })
    );
  }

  render(props) {
    const array = this.arrayOfCountries;

    return (
      <ScrollView style={styles.screenContainer}>
        {array.map((name, index) => (
          <CountryCard
            style={styles.CountryCard}
            list={array}
            index={index}
          ></CountryCard>
        ))}
      </ScrollView>
    );
  }
}

export const styles = StyleSheet.create({
  CountryCard: {
    padding: 20,
  },
});
