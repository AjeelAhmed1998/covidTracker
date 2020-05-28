import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Provider as PaperProvider} from 'react-native-paper';
// import { Button, ThemeProvider } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// // //file imports
import Search from "./screens/search";
import SearchedCountryDetails from "./screens/searchedCountryDetails";
import GlobalDetails from "./screens/globalDetails";
import EachCountryDetails from "./screens/eachCountryDetails";

//style imports
// import {styles as globalStyles} from './style/globalStyles';

// export class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render(props) {
//     return (
//       <View>
//         <TextInput></TextInput>
//         <Button
//           title="search"
//           onPress={() => {
//             this.props.navigation.navigate("searched country");
//           }}
//         ></Button>
//       </View>
//     );
//   }
// }



// const Search = (props) => {
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



// export class SearchedCountryDetails extends React.Component {
//   render(props) {
//     return (
//       <View>
//         <Text>searched country details come here</Text>
//         <Button
//           title="go back to search"
//           onPress={() => {
//             this.props.navigation.goBack();
//           }}
//         ></Button>
//       </View>
//     );
//   }
// }


/////////////////////

export default function App(props) {
  return (
    <NavigationContainer>
      <MyDrawer />
      {/* console.log("jj");  */}
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator initialRouteName={"search"}>
      <Stack.Screen name={"search"} component={Search}></Stack.Screen>
      <Stack.Screen
        name={"searched country"}
        component={SearchedCountryDetails}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
  return (
    <Drawer.Navigator initialRouteName={"global"}>
      <Drawer.Screen name={"stack"} component={StackNavigator} ></Drawer.Screen>

      <Drawer.Screen name={"global"} component={GlobalDetails}></Drawer.Screen>

      <Drawer.Screen
        name={"all country"}
        component={MyTab}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator(); 

function MyTab(){
  return(

    <Tab.Navigator>

      <Tab.Screen name="Asia" component={EachCountryDetails} continentName="Asia"></Tab.Screen>
      <Tab.Screen name="Europe"  component={EachCountryDetails}></Tab.Screen>
    </Tab.Navigator>

  ); 
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
