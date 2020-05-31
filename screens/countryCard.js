import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import {} from '@react-navigation/native'

export default class CountryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
    };
  }

  componentDidMount(props) {
    return fetch(
      "http://disease.sh/v2/countries/" + this.props.list[this.props.index]
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            info: responseJson,
          },
          function () {
            this.data = responseJson;
          }
        );
      });
  }

  render(props) {
   
    return (
      <View style={styles.cardView}>
        <View >
          <Text style={styles.headingStyle}>
            {/* {this.data.country } */}
            {this.props.list[this.props.index]}
          </Text>
        </View>
        <View>
          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Cases </Text>
            <Text style={styles.numberStyle}>{this.state.info.cases}</Text>
          </View>

          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Deaths </Text>
            <Text style={styles.numberStyle}>{this.state.info.deaths}</Text>
          </View> 

          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Recovered </Text>
            <Text style={styles.numberStyle}>{this.state.info.recovered}</Text>
          </View>

          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Active </Text>
            <Text style={styles.numberStyle}>{this.state.info.active}</Text>
          </View>

          <View style={styles.infoPadding}>
            <Text style={styles.infoStyel}>Critical </Text>
            <Text style={styles.numberStyle}>{this.state.info.critical}</Text>
          </View>


        </View>
        {/* <Image style={styles.FlagImage} source={{uri:this.state.info.countryInfo.flag}}></Image> */}
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
    marginBottom:10, 
    marginTop:10,

  },

  infoView: {},

  infoPadding: {
    padding: 20,
    marginLeft:20
  },

  headingView: {
    // flex:1,
    paddingRight: 10,
    marginRight:20
  },

  headingStyle: {
    fontFamily: "Raleway-light",
    fontSize: 24,
    paddingRight:20,
    marginRight: 20
  },

  infoStyel: {
    fontFamily: "Raleway-light-normal",
  },

  numberStyle: {
    fontFamily: "Maven-pro-regular",
    fontSize: 25,
  },
  card: {
    padding: 10,
  },
});
