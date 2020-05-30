import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// import DayOneCard from './dayOneCard';
// import SummaryCard from './summaryCard';
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

export default class SummaryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // country: this.props.route.params,
      global: "",
      dataSource: "",
      ND: "",
      TD: "",
      TC: "",
      TR: "",

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
  componentDidMount(props) {
    // const { searchedCountry } = this.props.route.params;
    // const { searchedSlug } = this.props.route.params;
    return (
      fetch("https://api.covid19api.com/summary")
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

                element = this.countryList[i]["Slug"]; //.Slug;
                // console.log(element);
                // slugElement = this.countryList[i]["Slusg"];
                // console.log(slugElement);

                if (element == this.props.slug) {
                  // this.ND = this.countryList[i]["NewDeaths"];
                  this.setState({
                    ND: this.countryList[i]["NewDeaths"],
                    TD: this.countryList[i]["TotalDeaths"],
                    TC: this.countryList[i]["TotalConfirmed"],
                    TR: this.countryList[i]["TotalRecovered"],
                    Slug: this.countryList[i]["Slug"],
                  });
                  console.log(this.countryList[i]["NewDeaths"]);

                  // console.log(this.countryList[i][Slug]);
                }
                // if(element == array[i]["Country"])
                // return
              }
              // console.log(this.countryList[45]["Country"]);
              // console.log("hello");
            }
          );
        })

        // .then(() => {
        //   return fetch(
        //     "https://api.covid19api.com/dayone/country/" + searchedSlug
        //   );
        // })

        // .then((response2) => response2.json())

        // .then((resopnseJson2) => {
        //   this.setState(
        //     {
        //       // this is an array
        //       dayoneSource: resopnseJson2,
        //       dayOneList: resopnseJson2
        //     },
        //     function () {
        //       // this.dayOneList

        //       this.dayOneList = resopnseJson2;

        //       // this.firstDayInfo = this.dayOneList[0];
        //       // // this.setState({

        //       // //   firstDayInfo:this.dayOneList[0]
        //       // // })

        //       // console.log(this.dayOneList);

        //       // console.log(
        //       //   "this is the info from firstDayInfo " + this.firstDayInfo.Active
        //       // );

        //       // this.variablee = this.firstDayInfo.Active

        //       // console.log("hello friend");

        //       // console.log(this.dayOneList);

        //       // for(let i = 0 ; i<this.dayOneList.length; i++){
        //       //   if(this.dayOneList[i]["Slug"]==this.searchedSlug){

        //       //     this.dayOneCountry=this.dayOneList[0]
        //       //     console.log("day one info is right here " + this.dayOneCountry);

        //       //   }
        //       // }

        //       // function(){
        //       //   // console.log("this is dayoneSource: "+this.state.dayoneSource);
        //     }
        //     // })
        //   );
        // })
        .catch((error) => {
          console.error(error);
        })
    );
  }

  render(props) {
    // const { searchedCountry } = this.props.route.params;
    // const { searchedSlug } = this.props.route.params;
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
      <View style={styles.cardView}> 
        {/* console.log("l"); e  */}
        {/* <Button
          title="go back to search"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        ></Button> */}

        {/* <Text style={styles.countryName}>{this.props.name}</Text> */}
        {/* <Text> {this.dayOneCountry.Date}</Text> */}

        {/* <Text>here comes the info load {this.dayOneList[1][""]}</Text> */}
        {/* <Text>"here comes more info "{this.firstDayInfo.Active}</Text> */}
        {/* <Text>{this.dayOneList[0]["Active"]}</Text> */}
        {/* <Text>hello hello {this.state.dayOneList.Active}</Text> */}


        <View style={styles.headingView}>
          <Text style={styles.headingStyle}>Summary info</Text>
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
        
        {/* <SummaryCard slug={searchedSlug} name={searchedCountry}></SummaryCard>
        <DayOneCard slug = {searchedSlug}></DayOneCard> */}
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