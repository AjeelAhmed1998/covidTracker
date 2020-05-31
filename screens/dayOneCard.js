import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class DayOneCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOne: [],
      info: "",
      infoDate: "",
      infoConfirmed: "",
    };
    this.arrayholder = [];
  }

  apiCall(props) {
    //slug prop comes in here
    fetch("https://api.covid19api.com/dayone/country/" + this.props.slug)
      .then((response) => response.json())
      .then((response) => {
        var Active = response[0].Active;
        var Date = response[0].Date;
        var Confirmed = response[0].Confirmed;

        if (Active == undefined) {
          Active = "No Data";
        }
        this.setState({
          info: Active,
          infoDate: Date,
          infoConfirmed: Confirmed,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount(props) {
    this.apiCall(props);
  }

  render() {
    return (
      <View style={styles.cardView}>
        <View style={styles.headingView}>
          <Text style={styles.headingStyle}>Day one </Text>
        </View>

        <View style={styles.infoView}>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Active cases </Text>
            <Text style={styles.numberStyle}>{this.state.info}</Text>
          </View>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>First day date</Text>
            <Text style={styles.numberStyle}>2020-5-2</Text>
          </View>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Confirmed cases </Text>
            <Text style={styles.numberStyle}>{this.state.infoConfirmed}</Text>
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
