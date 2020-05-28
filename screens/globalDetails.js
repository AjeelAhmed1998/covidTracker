import React, { version } from "react";
import { StyleSheet, Text, View } from "react-native";
import { log } from "react-native-reanimated";
// import {} from '@react-navigation/native'
// import {styles} from './style/globalStyles';

export default class GlobalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // global: "",
      dataSource: '', 
    };
    this.global = ''; 
    this.keyHolder = '';
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            dataSource: responseJson,
            // global: responseJson, 
          },
          function () {
            this.keyHolder = responseJson;
            this.global = this.keyHolder.Global; 
            this.setState({
              global : this.keyHolder.Global, 
            });
            // console.log(this.keyHolder);
            // console.log(this.state.dataSource);

            // this.setState({
            //   global: this.keyHolder.Global

            // })

            // // console.log(this.state.global);
            // console.log("hello");
            // console.log(this.state.dataSource.Global.NewDeaths);
            // console.log(this.keyHolder.Global.NewConfirmed);
            // console.log(this.global.NewDeaths);
            // console.log(this.state.global.NewDeaths);
            
            
          }
        );
      })

      .catch((error) => {
        console.error(error);
      });
  }

  render(props) {
    return (
      <View style={styles.screenContainer}>
        <Text>this is where the global details will be posted</Text>
        {/* <Text>{this.state.dataSource.Global.NewDeaths}</Text> */}
        {/* <Text>{this.keyHolder.Global.NewConfirmed}</Text> */}
        {/* <Text>{this.keyHolder.Global.NewConfirmed}</Text> */}
        <Text>{this.global.NewDeaths}</Text>
        <Text>{this.global.NewConfirmed}</Text>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
