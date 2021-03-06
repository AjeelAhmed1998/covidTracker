import React, { version } from "react";
import { StyleSheet, Text, View } from "react-native";
import { log } from "react-native-reanimated";

export default class GlobalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: "",
    };
    this.global = "";
    this.keyHolder = "";
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            dataSource: responseJson,
          },
          function () {
            this.keyHolder = responseJson;
            this.global = this.keyHolder.Global;
            this.setState({
              global: this.keyHolder.Global,
            });
          }
        );
      })

      .catch((error) => {
        console.error(error);
      });
  }

  render(props) {
    return (
      <View style={{ alignContent: "center" }}>
        <View style={styles.cardView}>
          <View>
            <Text style={styles.headingStyle}>Global info</Text>
          </View>

          <View>
            {/* create as many views in here as there are info  */}
            <View style={styles.infoPadding}>
              <Text style={styles.infoStyel}>New confirmed</Text>
              <Text style={styles.numberStyle}>{this.global.NewConfirmed}</Text>
            </View>

            <View style={styles.infoPadding}>
              <Text style={styles.infoStyel}>Total confirmed</Text>
              <Text style={styles.numberStyle}>
                {this.global.TotalConfirmed}
              </Text>
            </View>

            <View style={styles.infoPadding}>
              <Text style={styles.infoStyel}>New deaths</Text>
              <Text style={styles.numberStyle}>{this.global.NewDeaths}</Text>
            </View>

            <View style={styles.infoPadding}>
              <Text style={styles.infoStyel}>Total deaths</Text>
              <Text style={styles.numberStyle}>{this.global.TotalDeaths}</Text>
            </View>

            <View style={styles.infoPadding}>
              <Text style={styles.infoStyel}>New recovered</Text>
              <Text style={styles.numberStyle}>{this.global.NewRecovered}</Text>
            </View>

            <View style={styles.infoPadding}>
              <Text style={styles.infoStyel}>Total recovered</Text>
              <Text style={styles.numberStyle}>
                {this.global.TotalRecovered}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    marginTop: 30,
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
    marginRight: 20,
  },

  infoStyel: {
    fontFamily: "Raleway-light-normal",
  },

  numberStyle: {
    fontFamily: "Maven-pro-regular",
    fontSize: 25,
  },
});
