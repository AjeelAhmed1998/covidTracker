import React from "react";
import { Text, View, StyleSheet } from "react-native";
// import { black } from "react-native-paper/lib/typescript/src/styles/colors";

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
    // this.dayOne = "";
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
          // dataSource: responseJson,
          info: Active,
          infoDate: Date,
          infoConfirmed: Confirmed,
        });
        // console.log("I is "+i);

        // this.dayOne = this.arrayholder[0];
        // let a = this.dayOne;
        // console.log("this is coming from dayOneCard" + this.state.dayOne.Active);
        // return this.dayOne;
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
      // <Text>coming from dayOneCard component {this.state.dataSource[0]["Active"]}</Text>
      // <Text>hello {JSON.stringify(this.state.dayOne[0]["Active"])} hello</Text>
      <View style={styles.cardView}>
        <View style={styles.headingView}>
          <Text style={styles.headingStyle}>Dayone info</Text>
        </View>

        <View style={styles.infoView}>
          {/* <Text>hello</Text> */}
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
    backgroundColor:"#AFF8D8",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft:10,
    marginRight:10, 
    borderRadius: 20
  },

  infoView: {},

  infoPadding: {
    padding: 20 , 
  },

  headingView: {
    padding: 10,
  },

  headingStyle:{
    fontFamily:"Raleway-light",
    fontSize:24
    
  },

  infoStyel:{
    fontFamily:"Raleway-light-normal"

  },

  numberStyle:{
    

    fontFamily: "Maven-pro-regular",
    fontSize:25

  }
});
