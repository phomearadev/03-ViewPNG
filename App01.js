//03-ViewPNG/App01.js
//Got the graphic png file to display bird logo!!!

import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { StatusBar } from 'expo-status-bar';


const Flex = () => {

  return (
   
  <>
    
    
    <View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: "blue" }}>
    <Image
       style={styles.tinyLogo}
        source={require('C:/APP/03-ViewPNG/assets/magpie.png')} />
    <Text style={styles.mytitle}>Magpie Bank </Text>
       
    </View>
    </View>



    <View style={styles.container2}>
    <View style={{ flex: 1, backgroundColor: "yellow" }}>  
        <Text style={styles.moneytitle}>£1,000,000 </Text>
      </View>
    </View>

    <View style={styles.container3}>
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
  container: {
    flex: 1,
    maxHeight: 267,
    flexDirection: "column",
    marginTop: 40,
    backgroundColor: "silver",
    borderWidth: 1,
    borderColor: "brown",
  },
  container2: {
    flex: 1,
    maxHeight: 267,
    flexDirection: "column",
    backgroundColor: "silver",
    borderWidth: 1,
    borderColor: "brown",
  },
  container3: {
    flex: 1,
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
    //width: 20,
    height: 160,
    alignItems: "center",
    margin: 10,
    backgroundColor: "chocolate",
    borderWidth: 2,
    borderColor: "brown"
    //backgroundColor: "#ffcc00"
    //borderColor: "black",
    //borderColor: "darkgoldenrod",
  },
  title: {
    marginTop: 65,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  mytitle: {
    marginTop: 20,
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
  marginLeft:10,
  marginTop:20,  
  width: 266,
    height: 158
  }
});

export default Flex;