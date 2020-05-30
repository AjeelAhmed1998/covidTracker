import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import DayOneCard from "./dayOneCard";
import SummaryCard from "./summaryCard";
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
      ND: "",
      Slug: "",
      // dayoneSource: "south-africa",
      // firstDayInfo: [],
      dayOneList: "",
    };

    this.keyholder = "";
    this.countryList = [];
    this.dayOneList = [];
    this.dayOneCountry = "";
    this.firstDayInfo = "";
    this.variablee = "";
    // this.ND = "";

    // console.log(this.countryList);
  }

  // countryName = () => {
  //   const {country} = this.props.route.params
  // }
  // componentDidMount(props) {
  //   const { searchedCountry } = this.props.route.params;
  //   const { searchedSlug } = this.props.route.params;
  //   return fetch("https://api.covid19api.com/summary")
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState(
  //         {
  //           dataSource: responseJson,
  //         },
  //         function () {
  //           this.keyholder = responseJson; // the whole object is in it

  //           this.countryList = this.keyholder.Countries;
  //           for (var i = 0; i < this.countryList.length; i++) {
  //             // const element = array[i]["Country"];
  //             let element;

  //             element = this.countryList[i]["Slug"]; //.Slug;
  //             // console.log(element);
  //             // slugElement = this.countryList[i]["Slusg"];
  //             // console.log(slugElement);

  //             if (element == searchedSlug) {
  //               // this.ND = this.countryList[i]["NewDeaths"];
  //               this.setState({
  //                 ND: this.countryList[i]["NewDeaths"],
  //                 Slug: this.countryList[i]["Slug"],
  //               });
  //               console.log(this.countryList[i]["NewDeaths"]);

  //               // console.log(this.countryList[i][Slug]);
  //             }
  //             // if(element == array[i]["Country"])
  //             // return
  //           }
  //           // console.log(this.countryList[45]["Country"]);
  //           // console.log("hello");
  //         }
  //       );
  //     })

  //     .then(() => {
  //       return fetch(
  //         "https://api.covid19api.com/dayone/country/" + searchedSlug
  //       );
  //     })

  //     .then((response2) => response2.json())

  //     .then((resopnseJson2) => {
  //       this.setState(
  //         {
  //           // this is an array
  //           dayoneSource: resopnseJson2,
  //           dayOneList: resopnseJson2
  //         },
  //         function () {
  //           // this.dayOneList

  //           this.dayOneList = resopnseJson2;

  //           // this.firstDayInfo = this.dayOneList[0];
  //           // // this.setState({

  //           // //   firstDayInfo:this.dayOneList[0]
  //           // // })

  //           // console.log(this.dayOneList);

  //           // console.log(
  //           //   "this is the info from firstDayInfo " + this.firstDayInfo.Active
  //           // );

  //           // this.variablee = this.firstDayInfo.Active

  //           // console.log("hello friend");

  //           // console.log(this.dayOneList);

  //           // for(let i = 0 ; i<this.dayOneList.length; i++){
  //           //   if(this.dayOneList[i]["Slug"]==this.searchedSlug){

  //           //     this.dayOneCountry=this.dayOneList[0]
  //           //     console.log("day one info is right here " + this.dayOneCountry);

  //           //   }
  //           // }

  //           // function(){
  //           //   // console.log("this is dayoneSource: "+this.state.dayoneSource);
  //         }
  //         // })
  //       );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render(props) {
    const { searchedCountry } = this.props.route.params;
    const { searchedSlug } = this.props.route.params;
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
      <View style={styles.barawalaView}>
        {/* console.log("l"); e  */}
        <View style={styles.countryName}>
          <Text style={styles.countryStyle} >{searchedCountry}</Text>
          {/* <Text> {this.dayOneCountry.Date}</Text> */}
        </View>
        {/* <Text>here comes the info load {this.dayOneList[1][""]}</Text> */}
        {/* <Text>"here comes more info "{this.firstDayInfo.Active}</Text> */}
        {/* <Text>{this.dayOneList[0]["Active"]}</Text> */}
        {/* <Text>hello hello {this.state.dayOneList.Active}</Text> */}
        {/* <Text> */}
        {/* New deaths in {searchedCountry}={this.state.ND}{" "} */}
        {/* </Text> */}
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

        {/* <View style={styles.goback}>
          <Button
            title="go back"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          ></Button>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countryName: {
    paddingTop: 40,
    alignContent: "center",
    alignItems:"center"
  },

  barawalaView: {
    justifyContent: "center",
  },

  dayoneCard: {
    paddingTop: 20,
    paddingBottom: 10,
  },

  summaryCard: {
    // marginTop: 50,
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom:30
  },

  goback: {
    paddingTop: 20,
  },
  countryStyle:{
    fontFamily:"Maven-pro-bold",

    fontSize:24
  }
});
