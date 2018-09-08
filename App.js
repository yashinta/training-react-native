/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <View style={styles.container} >
    <Text style={styles.welcome}>
     Nama = Rr Yashinta Pangesti Gyanrini
    </Text>
    
    <Text style={styles.welcome}>
     Kelas = XI RPL 1 
    </Text>

    <Text style={styles.welcome}>
     No Absen = 34 
    </Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});
