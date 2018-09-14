import React from 'react';
import { WebView, StyleSheet} from 'react-native';


export default class PixiScreen extends React.Component {
  static navigationOptions = { 
    title: 'PixiScreen',
  };


  render() {
    return (
      <WebView
        source={{uri: 'http://www.kunstman.nl'}}
        style={{marginTop: 20}} 
      />
    );   
  }
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
