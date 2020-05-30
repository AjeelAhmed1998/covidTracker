import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// import {} from '@react-navigation/native'

import CountryCard from "./countryCard";
import { Switch } from "react-native-paper";
// import { ScrollView } from "react-native-gesture-handler";

export default class EachCountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: "",
      country: "",
      // continent: this.props.continentNames,
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
        this.continent = "Asutralia%2Foceania";
        break;
    }
    // if(this.props.name = "Asia"){
    //   this.continent = "Asia"
    // }
    // else
    // this.continent = this.props.continentName;
  }

  componentDidMount(props) {
    // return
    // var post;

    // // Call the API
    // fetch('https://jsonplaceholder.typicode.com/posts/5').then(function (response) {
    //   if (response.ok) {
    //     return response.json();
    //   } else {
    //     return Promise.reject(response);
    //   }
    // }).then(function (data) {

    //   // Store the post data to a variable
    //   this.post = data;

    //   // Fetch another API
    //   return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);

    // }).then(function (response) {
    //   if (response.ok) {
    //     return response.json();
    //   } else {
    //     return Promise.reject(response);
    // //   }
    // // }).then(function (userData) {
    // //   console.log(post, userData);
    // // }).catch(function (error) {
    // //   console.warn(error);
    // // });

    return (
      // console.log();

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

        //
        .then(() => {
          return fetch(
            //I can't remember why I wrote the index number there
            "http://disease.sh/v2/countries/" + this.arrayOfCountries[0]
          );

          // return fetch('http://disease.sh/v2/countries/'+this.arrayOfCountries[1])
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

    // fetch('http://disease.sh/v2/continents/Asia')
  }

  // exFunction() {
  //   return <Text>hello</Text>;
  // }

  // render() {
  //   const elements = ['one', 'two', 'three'];

  //   const items = []

  //   for (const [index, value] of elements.entries()) {
  //     items.push(<li key={index}>{value}</li>)
  //   }

  //   return (
  //     <div>
  //       {items}
  //     </div>
  //   )
  // }

  render(props) {
    const array = this.arrayOfCountries;

    // const items = [];
    // for (let i=0; i<2; i++){
    //   this.arrayOfCountries[i];
    // }

    // for(const [])
    return (
      <ScrollView style={styles.screenContainer}>
        {array.map((name, index) => (
          <CountryCard style={styles.CountryCard} list={array} index={index}></CountryCard>
        ))}

        {/* {
          

          array.map((i)=>{
            return
              <CountryCard/>; 
          })

        }; */}
        {/* {() => {
          for (let i = 0; i < 2; i++) {
            this.exFunction(); 
          }
        }} */}
        {/* <CountryCard
          list = {this.arrayOfCountries}
          index = {i}
        /> */}

        {/* <Text>this is where you will get all information, continent wise </Text> */}
        {/* <Text>{this.props.route.name}</Text> */}
      </ScrollView>
    );
  }
}

export const styles = StyleSheet.create({
  // screenContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   alignContent: "center",
  // },


  CountryCard:{
    padding:20, 
  }
});