//theme color #37bdb4
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Provider as PaperProvider } from "react-native-paper";
// import { Button, ThemeProvider } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import covid from "./assets/COVID19.jpg";
// // //file imports
import {
  AntDesign,
  Ionicons,
  FontAwesome,
  Fontisto,
  FontAwesome5,
  Octicons
} from "@expo/vector-icons";
import Search from "./screens/search";
import SearchedCountryDetails from "./screens/searchedCountryDetails";
import GlobalDetails from "./screens/globalDetails";
import EachCountryDetails from "./screens/eachCountryDetails";

import * as Font from "expo-font";
import { AppLoading } from "expo";
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

const getFont = () => {
  return Font.loadAsync({
    "Maven-pro-bold": require("./assets/fonts/MavenPro-Bold.ttf"),
    "Maven-pro-regular": require("./assets/fonts/MavenPro-Regular.ttf"),
    "Lusitana-regular": require("./assets/fonts/Lusitana-Regular.ttf"),
    "Raleway-light": require("./assets/fonts/Raleway-ExtraLightItalic.ttf"),
    "Raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-light-normal": require("./assets/fonts/Raleway-Light.ttf"),
  });
};

export default function App(props) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <MyDrawer />
        {/* console.log("jj");  */}
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      />
    );
  }
}

const Stack = createStackNavigator();

const StackNavigatorAll = (props) => {
  return (
    <Stack.Navigator
      // initialRouteName="globalScreen"
      screenOptions={(props) => ({
        headerTitle: "ALL",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#37bdb4",
        },
        headerRight: () => {
          // <Nbutton title="Edit"></Nbutton>;
        },
        headerLeft: () => (
          <AntDesign
            style={styles.menuIcon}
            name="menuunfold"
            size={25}
            color={"white"}
            onPress={() => props.navigation.toggleDrawer()}
          />
        ),
      })}
    >
      <Stack.Screen name="global" component={MyTab}></Stack.Screen>
    </Stack.Navigator>
  );
};

const StackNavigatorGlobal = (props) => {
  return (
    <Stack.Navigator
      // initialRouteName="globalScreen"
      screenOptions={(props) => ({
        headerTitle: "GLOBAL",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#37bdb4",
        },
        headerRight: () => {
          // <Nbutton title="Edit"></Nbutton>;
        },
        headerLeft: () => (
          <AntDesign
            style={styles.menuIcon}
            name="menuunfold"
            size={25}
            color={"white"}
            onPress={() => props.navigation.toggleDrawer()}
          />
        ),
      })}
    >
      <Stack.Screen name="each" component={GlobalDetails}></Stack.Screen>
    </Stack.Navigator>
  );
};

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={"search"}
      screenOptions={(props) => ({
        headerTitle: "SEARCH",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#37bdb4",
        },
        headerRight: () => {
          // <Nbutton title="Edit"></Nbutton>;
        },
        headerLeft: () => (
          <AntDesign
            style={styles.menuIcon}
            name="menuunfold"
            size={25}
            color={"white"}
            onPress={() => props.navigation.toggleDrawer()}
          />
        ),
      })}
    >
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
    <Drawer.Navigator
      initialRouteName="stack"
      minSwipeDistance={15}
      overlayColor="transparent"
      hideStatusBar={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        color: "red",
      }}
      // screenOptions={}
      // options={{}}
    >
      <Drawer.Screen
        name={"stack"}
        component={StackNavigator}
        options={{
          title: "MY home",
          drawerLabel: "Search",
          drawerIcon: () => (
            <FontAwesome5 name="search-location" size={20} color="#37bdb4" />
          ),
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name={"Global"}
        component={StackNavigatorGlobal}
        options={{
          //   headerTitle: "hello",
          //   headerTitleAlign: "center",
          //   headerTintColor: "white",
          //   headerStyle: {
          //     backgroundColor: "#37bdb4",
          //   },
          //   headerLeft: (props) => (
          //     <AntDesign
          //       style={styles.menuIcon}
          //       name="menuunfold"
          //       size={25}
          //       color={"white"}
          //       onPress={() => props.navigation.toggleDrawer()}
          //     />
          //   ),
          drawerLabel: "Global",
          drawerIcon: () => <Fontisto name="earth" size={20} color="#37bdb4" />,
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name={"all country"}
        component={StackNavigatorAll}
        options={{
          drawerLabel: "All countries",
          drawerIcon: () => (
            <FontAwesome5 name="map-marked" size={20} color="#37bdb4" />
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.viewColor}>
        <Image style={styles.covidImage} source={covid}></Image>
      </View>

      <DrawerItemList {...props} />
      {/* <DrawerItem></DrawerItem> */}

      <Text style={styles.islamabad}>Made with love in Islamabad.</Text>
    </DrawerContentScrollView>
  );
};

const Tab = createMaterialBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="white"
      barStyle={{ backgroundColor: "#37bdb4" }}
      // shifting={false}
      // labeled={false}

      
    >
      <Tab.Screen
        name="Asia"
        component={EachCountryDetails}
        options={

          {
            tabBarColor:"#37bdb4",
            title: "Asia",
            tabBarIcon:()=>(

              <FontAwesome5 name="globe-asia" size={20} color="white"/>

            )
          }
        }
      ></Tab.Screen>
      <Tab.Screen 
      name="Europe" 
      component={EachCountryDetails}
      options={
        
          {
            tabBarColor:"#AFCBFF",
            tabBarIcon:()=>(

              <FontAwesome5 name="globe-europe" size={20} color="white"/>

            )
          }
        }
      ></Tab.Screen>
      <Tab.Screen name="NA" component={EachCountryDetails}
      options={
          {
            tabBarColor:"#85E3FF",
            tabBarIcon:()=>(

              <FontAwesome5 name="globe-americas" size={20} color="white"/>

            )
          }
        }
      ></Tab.Screen>
      <Tab.Screen name="SA" component={EachCountryDetails}
      options={
          {
            tabBarColor:"#FFCBC1",
            // tabBarLabel:"South america",
            tabBarIcon:()=>(

              <FontAwesome5 name="globe-americas" size={20} color="white"/>

            )
          }
        }
      ></Tab.Screen>
      <Tab.Screen name="Africa" component={EachCountryDetails}
      options={
          {
            tabBarColor:"#FFB5E8",
            tabBarIcon:()=>(

              <FontAwesome5 name="globe-africa" size={20} color="white"/>

            )
          }
        }
      ></Tab.Screen>
      <Tab.Screen name="Oceania" component={EachCountryDetails}
      options={

          {
            tabBarColor:"#97A2FF",
            tabBarIcon:()=>(

              <FontAwesome5 name="globe-asia" size={20} color="white"/>

            )
          }
        }
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  islamabad: {
    paddingLeft: 50,
    marginTop: 200,
    paddingTop: 200,
    fontFamily: "Raleway-light",
    fontStyle: "italic",
  },

  covidImage: {
    // resizeMode: "contain"
    width: 380,
    height: 170,
  },

  menuIcon: {
    paddingLeft: 20,
  },

  viewColor: {
    backgroundColor: "#37bdb4",
  },
});
