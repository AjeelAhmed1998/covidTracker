import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import {} from '@react-navigation/native'

// import { Button } from "react-native-paper";

import Search from "./search";

import { NavigationContainer } from "@react-navigation/native";
import {} from "@react-navigation/stack";

// const SearchedCountryDetails = (props) => {
//   return (
//     <View>
//       <Text>searched country details come here</Text>
//       <Button
//         title="go back to search"
//         onPress={() => {
//           props.navigation.goBack();
//         }}
//       ></Button>
//     </View>
//   );
// };

// export default SearchedCountryDetails;

export default class SearchedCountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // country: this.props.route.params,
      global: "",
      dataSource: "",
      ND: '', 
    };

    this.keyholder = "";
    this.countryList = [];

    // this.ND = "";

    // console.log(this.countryList);
  }

  // countryName = () => {
  //   const {country} = this.props.route.params
  // }
  componentDidMount(props) {
    const { searchedCountry } = this.props.route.params;
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
              // const element = array[i]["Country"];
              let element;

              element = this.countryList[i]["Country"];

              if (element == searchedCountry) {
                // this.ND = this.countryList[i]["NewDeaths"];
                this.setState({
                  ND: this.countryList[i]["NewDeaths"]
                })
                console.log(this.countryList[i]["NewDeaths"]); 
              }
              // if(element == array[i]["Country"])
              // return
            }
            // console.log(this.countryList[45]["Country"]);
            // console.log("hello");
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(props) {
    const { searchedCountry } = this.props.route.params;

    // for (var i = 0; i < this.countryList.length; i++) {
    //   // const element = array[i]["Country"];
    //   let element;

    //   element = this.countryList[i]["Country"];

    //   if (element == searchedCountry) {
    //     this.ND = this.countryList[i]["NewDeaths"];
    //     // return ND;
    //   }
    // }
    return (
      // console.log("hello");
      <View>
        {/* console.log("l"); e  */}
        <Button
          title="go back to search"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        ></Button>

        <Text style={styles.countryName}>{searchedCountry}</Text>
        <Text>New deaths in {searchedCountry}={this.state.ND}  </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countryName: {
    paddingTop: 30,
  },
});
