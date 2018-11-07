import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator  } from 'react-navigation';
import Basics from "./Basics"
import Props from "./Props"
import State from "./State"
import Style from "./Style"
import WhatToDo from "./WhatToDo"
import HeightWidth1 from "./HeightWidth1"
import HeightWidth2 from "./HeightWidth2"
import FlexBox from "./FlexBox"
import TextInput from "./TextInput"
import Touches from "./Touches"
import { ScrollView } from 'react-native-gesture-handler';

import ScrollView1 from "./ScrollView"
import ListViews from "./ListViews"
import NetWorking from "./NetWorking"



//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise >
//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise >
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise  >
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise >
//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise >
//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise  >
//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise >
//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View >
          <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Adam Lass</Text>
          {/* <Touchable onPress={() => navigate('web')} title="What I have to do" /> */}
          <Touchable onPress={() => navigate('basics')} title="Basics" />
          <Touchable onPress={() => navigate('props')} title="Props" />
          <Touchable onPress={() => navigate('state')} title="State" />
          <Touchable onPress={() => navigate('style')} title="Style" />
          <Touchable onPress={() => navigate('heightWidth1')} title="Heigh Width 1" />
          <Touchable onPress={() => navigate('heightWidth2')} title="Heigh Width 2" />
          <Touchable onPress={() => navigate('flexBox')} title="FlexBox" />
          <Touchable onPress={() => navigate('textInput')} title="TextInput" />
          <Touchable onPress={() => navigate('touches')} title="Touches" />
          <Touchable onPress={() => navigate('scrollView')} title="ScrollView" />
          <Touchable onPress={() => navigate('listViews')} title="ListViews" />
          <Touchable onPress={() => navigate('netWorking')} title="NetWorking" />
        </View>
        </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  state: { screen: State },
  style: { screen: Style },
  heightWidth1: { screen: HeightWidth1 },
  heightWidth2: { screen: HeightWidth2 },
  flexBox: { screen: FlexBox },
  textInput: { screen: TextInput },
  touches: { screen: Touches },
  scrollView: { screen: ScrollView1 },
  listViews: { screen: ListViews },
  netWorking: { screen: NetWorking },
  // web: { screen: WhatToDo },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})