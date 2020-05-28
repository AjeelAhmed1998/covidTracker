import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import {} from '@react-navigation/native'


export default class CountryCard extends React.Component{
  constructor(props){
    super(props); 
    this.state={
      info: '', 
    }; 
  }

  componentDidMount(props){
    return fetch('http://disease.sh/v2/countries/'+this.props.list[this.props.index])
      .then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({
          info: responseJson, 
        }, 
        function(){

          this.data = responseJson; 

        })
      })
  }


  render(props){
    // let a = 0 ; 
    // for(let i = 0; i<2; i++){

    // }


    return(



      <Text>

        {/* {this.data.country } */}
        country is {this.props.list[this.props.index]}

      </Text>
    ); 
  }
}