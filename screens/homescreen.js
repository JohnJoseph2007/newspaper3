import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import db from '../sdk';

var likedata = 0;
var dislikedata = 0;

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = { ld: 0, dl: 0 };
  }

  isLikePressed = () => {
    db.ref('likes').on('value', (data) => {
      likedata = data.val();
    });
    likedata++;
    this.setState({ ld: likedata });
    console.log(this.state.ld);
    console.log(likedata);
    db.ref('/').update({ likes: likedata });
  };

  isDislikePressed = () => {
    db.ref('dislikes').on('value', (data) => {
      dislikedata = data.val();
    });
    dislikedata++;
    this.setState({ dl: dislikedata });
    db.ref('/').update({ dislikes: dislikedata });
  };

  render() {
    return (
      <View>
        <View>
          <View>
            <Text style={st.title}>Home</Text>
            <TouchableOpacity
              style={st.to}
              onPress={() => {
                this.props.navigation.navigate('News');
              }}>
              <Text>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={st.to}
              onPress={() => {
                this.props.navigation.navigate('Weather');
              }}>
              ><Text>Weather</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={st.to}
              onPress={() => {
                this.props.navigation.navigate('Joke');
              }}>
              ><Text>Joke</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={st.to}
              onPress={() => {
                this.props.navigation.navigate('Horoscope');
              }}>
              ><Text>Horoscope</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 90,
              marginTop: 50,
              display: 'flex',
              justifyContent: 'space-evenly',
            }}>
         
           
            <View>
            <TouchableOpacity
     
              onPress={this.isLikePressed}>
              <Image
                style={{ width: 50, height: 50}}
                source={require('../images/thumbsup.png')}
              />
            </TouchableOpacity>
               <Text style={{marginLeft:100,marginTop:-10}}>{this.state.ld}</Text>
            </View>
            <View>
            <TouchableOpacity
              
              onPress={this.isDislikePressed}>
              <Image
                style={{
                  width: 50,
                  height: 50,
        
                }}
                source={require('../images/thumbsdown.png')}
              />

            </TouchableOpacity>
             <Text style={{marginLeft:100, marginTop:-35}}>{this.state.dl}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

let st = StyleSheet.create({
  to: {
    backgroundColor: 'lime',
    borderRadius: 20,
    marginBottom: 5,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  title: {
    textAlign: 'center',
    paddingBottom: 30,
    paddingTop: 30,
    marginBottom: 30,
    backgroundColor: 'cyan',
  },
});
