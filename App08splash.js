// 03-ViewPNG/App07.js
// set up splashscreen

import React from "react";
//import { StyleSheet, Text, Image, View } from "react-native";
import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as SplashScreen from 'expo-splash-screen';
//note ref githubbing on 19/10/22
//githubbed 19/10/2022
//new note

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);


const Flex = () => {

  return (
   
  <>  
    <View style={styles.container1}>
      <View style={{ flex: 1, backgroundColor: "dodgerblue" }}>
        <Image
        style={styles.tinyLogo}
        source={require('C:/APP/03-ViewPNG/assets/magpie.png')} />
      </View>
    </View>

    <View style={styles.container2}>   
      <View style={{ flex: 1, backgroundColor: "dodgerblue" }}>
        <Text style={styles.mytitle}>Magpie Bank </Text>
      </View>
    </View>

    <View style={styles.container3}>
      <View style={{ flex: 1, backgroundColor: "gold" }}>  
        <Text style={styles.moneytitle}>£1,000,000 </Text>
      </View>
    </View>

    <View style={styles.container4}>
      <View style={styles.box}>  
        <Text style={styles.title}> Home </Text>
      </View>
      <View style={styles.box}>  
        <Text style={styles.title}> Payments </Text>
      </View>
    </View>
  </>    
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 2,
    maxHeight: 200,
    flexDirection: "column",
    marginTop: 40,
    backgroundColor: "silver",
    borderWidth: 1,
    borderTopColor: "brown",
    borderLeftColor: "brown",
    borderRightColor: "brown",
    borderBottomColor: "dodgerblue"
  },
  container2: {
    flex: 1,
    maxHeight: 67,
    flexDirection: "column",
    backgroundColor: "silver",
    borderWidth: 1,
    borderBottomColor: "brown",
    borderLeftColor: "brown",
    borderRightColor: "brown",
    borderTopColor: "dodgerblue"
  },
  container3: {
    flex: 3,
    maxHeight: 267,
    flexDirection: "column",
    backgroundColor: "silver",
    borderWidth: 1,
    borderColor: "brown",
  },
  container4: {
    flex: 3,
    paddingHorizontal: 15,
    maxHeight: 267,
    flexDirection: "row",
    backgroundColor: "silver",
    borderWidth: 1,
    borderColor: "brown",
  },
  box: {
    flex: 1,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    height: 160,
    alignItems: "center",
    margin: 10,
    backgroundColor: "chocolate",
    borderWidth: 2,
    borderColor: "brown"
  },
  title: {
    marginTop: 65,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  mytitle: {
    textAlign: "right",
    padding: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: 'white'
  },
  moneytitle: {
    textAlign: "center",
    marginTop: 120,
    fontSize: 23,
    color: 'black'
  },
  tinyLogo: {
    marginLeft:30,
    marginTop:30,  
    width: 171,
    height: 103
  }
});

export default Flex;
