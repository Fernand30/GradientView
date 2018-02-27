/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <LinearGradient colors={['#4ff69f', '#3ff998', '#192f6a']} style={styles.linearGradient}>
        
        <TouchableOpacity style={styles.button}>
          <LinearGradient colors={['#4ff69f', '#3ff998', '#19ff6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Sign in with Facebook
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button:{
    width: 200,
    height: 50,
    alignSelf: 'center',
    marginTop: 50,
  }
});