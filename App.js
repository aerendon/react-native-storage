import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'John Doe',
        email: 'test@gmail.com',
        city: 'Pereira'
      } 
    };
  }

  saveData() {
    let obj = {
      name: 'Alejandro E. Rendon',
      email: 'rendon@rocka.co',
      city: 'Pereira'
    }
    AsyncStorage.setItem('user', JSON.stringify(obj));
  }

  displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      this.setState({ user: parsed })
      alert(this.state.user.name);
    }
    catch(error) {
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.saveData}>
          <Text>Click me to save data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
          <Text>Click me to display data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
