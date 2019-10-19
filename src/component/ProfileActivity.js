import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class ProfileActivity extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#73C6B6',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile Activity</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.popToTop('Home')}
        />
        <Text style={styles.headerStyle}>Create Nee Profile Screen</Text>
        <Button
          title="Go to new Profile"
          onPress={() => this.props.navigation.push('Profile')}
        />
        <Button
          title="GO back"
          onPress={() => this.props.navigation.goBack()}
        />
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
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default ProfileActivity;
