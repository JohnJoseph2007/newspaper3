import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/homescreen';
import News from './screens/news';
import Joke from './screens/joke';
import Horoscope from './screens/horoscope'
import Weather from './screens/weather';

export default class Main extends React.Component {
  render() {
    return (
      <View>
        <Hstonc/>
      </View>
    );
  }
}

let Hston = createSwitchNavigator({
  HomeScreen: HomeScreen,
  News: News,
  Joke: Joke,
  Horoscope:Horoscope,
  Weather:Weather
});

let Hstonc = createAppContainer(Hston);