// 03-ViewPNG/App07.js
// set up splashscreen

//import React from "react";
//import { StyleSheet, Text, Image, View } from "react-native";
//import { Button, View, Text } from 'react-native';

import * as React from 'react';
import { Button, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);


function HomeScreen({ navigation }) {
  //const { onPress, title = 'Save' } = props;
  //https://reactnative.dev/docs/pressable
  return (
      
    <View style={styles.container1}>
      <View style={{ flex: 1, backgroundColor: "dodgerblue" }}>
        <Image
        style={styles.tinyLogo}
        source={require('C:/APP/03-ViewPNG/assets/magpie.png')} />
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
    <Pressable style={styles.button}>
      <Text style={styles.text}>title</Text>
    </Pressable>  </View>
  </View>
  </View>
  );
};

function MyPayment() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Make a Payment...</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
       // options={{ title: 'My Overview' }}
      />
        <Stack.Screen name="Payments" component={MyPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    title: "ME",
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 350,
    marginLeft: 75,
    marginRight: 75,
    paddingVertical: 32,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 26,
    lineHeight: 31,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default App;