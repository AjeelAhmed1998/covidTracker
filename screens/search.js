import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
// import {} from '@react-navigation/native'
// import { Searchbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import {} from "@react-navigation/drawer";
import {} from "@react-navigation/stack";

import SearchedCountryDetails from "./eachCountryDetails";

// const Search = (props) => {
//   const [loading, setLoading] = useState(true);
//   const [dataSource, setDataSource] = useState("");
//   const [text, setText] = useState("");

//   this.arrayholder = [];

//   useEffect(() => {
//     return fetch("https://api.covid19api.com/countries")
//       .then((response) => response.json())
//       .then(
//         (responseJson) => {
//           setLoading(false);
//           setDataSource(responseJson);
//         },
//         function () {
//           arrayholder = responseJson;
//         }
//       );
//   }).catch((error) => {
//     console.error(error);
//   });

//   // const SearchFilterFunction(text){

//   return (
//     <View>
//       <TextInput></TextInput>
//       <Button
//         title="search"
//         onPress={() => {
//           props.navigation.navigate("searched country");
//         }}
//       ></Button>
//     </View>
//   );
// };

// export default Search;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: "",
      touchedCountry: "",
    };
    this.arrayholder = [];
    this.countries = 'countries';
  }
  
  componentDidMount() {
    return fetch("https://api.covid19api.com/"+this.countries)//countries
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })

      .catch((error) => {
        console.error(error);
      });
  }

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.Country
        ? item.Country.toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: newData,
      text: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#080808",
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <View style={styles.searchArea}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            value={this.state.touchedCountry}
            // editable={true}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            // clearButtonMode="always"
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.props.navigation.navigate("searched country", {
                searchedCountry: this.state.touchedCountry,
              });
            }}
          >
            <Text>Search</Text>
          </TouchableOpacity>
          {/* 
          <TouchableOpacity
          onPress={()=>{
            this.setState(
              {touchedCountry: ""}
            )
          }}
          >
            <Text>
              clear
            </Text>
          </TouchableOpacity> */}
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.textStyle}
              onPress={() => {
                this.setState({
                  touchedCountry: item.Country,
                });
              }}
            >
              <Text>{item.Country}</Text>
            </TouchableOpacity>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
    flex: 3,
  },

  searchArea: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
  },
});
