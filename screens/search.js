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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
// import {} from '@react-navigation/native'
import { DataTable } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import {} from "@react-navigation/drawer";
import {} from "@react-navigation/stack";

import SearchedCountryDetails from "./eachCountryDetails";
import { log } from "react-native-reanimated";

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
  }

  componentDidMount() {
    return fetch("https://api.covid19api.com/countries") //countries
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          }
          // console.log(this.arrayholder[2]["Slug"]);
        );

        this.arrayholder = responseJson;
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
          height: 1,
          width: "100%",
          backgroundColor: "#37bdb4",
        }}
      />
    );
  };

  render() {
    // if (this.state.isLoading) {
      //Loading View while data is loading
      // return (
        // <View style={{ flex: 1, paddingTop: 20 }}>
          // <ActivityIndicator />
        // </View>
      // );
    // } else {
      // const barData = {
      //   labels: ["January", "February", "March", "April", "May", "June"],
      //   datasets: [
      //     {
      //       data: [20, 45, 28, 80, 99, 43],
      //     },
      //   ],
      // };
      return (
        // <DataTable>
        //   <DataTable.Header>
        //     <DataTable.Title>Dessert</DataTable.Title>
        //     <DataTable.Title numeric>Calories</DataTable.Title>
        //     <DataTable.Title numeric>Fat</DataTable.Title>
        //   </DataTable.Header>

        //   <DataTable.Row>
        //     <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        //     <DataTable.Cell numeric>159</DataTable.Cell>
        //     <DataTable.Cell numeric>6.0</DataTable.Cell>
        //   </DataTable.Row>

        //   <DataTable.Row>
        //     <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        //     <DataTable.Cell numeric>237</DataTable.Cell>
        //     <DataTable.Cell numeric>8.0</DataTable.Cell>
        //   </DataTable.Row>

        //   <DataTable.Pagination
        //     page={1}
        //     numberOfPages={3}
        //     onPageChange={(page) => { console.log(page); }}
        //     label="1-2 of 6"
        //   />
        // </DataTable>

        <View style={styles.viewStyle}>
          <View style={styles.searchArea}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => this.SearchFilterFunction(text)}
              // value={this.state.touchedCountry}
              // editable={true}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
              clearButtonMode="always"
            />

            {/* <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              console.log(this.state.touchedCountry)
              this.props.navigation.navigate("searched country", {
                
                searchedCountry: this.state.touchedCountry,
              });
            }}
          >
            <Text>Search</Text>
          </TouchableOpacity> */}
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
                  console.log(item.Country);
                  this.props.navigation.navigate("searched country", {
                    searchedCountry: item.Country,
                    searchedSlug: item.Slug,
                  });
                }}
                // onPress={() => {
                //   this.setState({
                //     touchedCountry: item.Country,
                //   });
                // }}
              >
                <Text style={styles.countryStyle}>{item.Country}</Text>
              </TouchableOpacity>
            )}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        //     <BarChart
        //     // style={graphStyle}
        //     data={barData}
        //     width={400}
        //     height={220}
        //     yAxisLabel={'900'}
        //     chartConfig={{
        //     backgroundColor: 'black',
        //     backgroundGradientFrom: 'black',
        //     backgroundGradientTo: 'black',
        //     decimalPlaces: 2, // optional, defaults to 2dp
        //     color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        //     style: {
        //       borderRadius: 16
        //     }
        //   }}
        // />
      );
    // }
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    // marginBottom: 40,
    padding: 16,
  },
  textStyle: {
    padding: 20,
  },

  countryStyle: {
    fontFamily: "Raleway-light-normal",
    // fontWeight: "500"
  },
  textInputStyle: {
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#37bdb4",
    backgroundColor: "#FFFFFF",
    flex: 3,
    fontFamily: "Raleway-light-normal",
  },

  searchArea: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
  },
});
