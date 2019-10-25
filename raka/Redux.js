import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';

class Redux extends Component {
  state = {bilangan: 0, notasi: null};

  jenisBilangan() {
    let bilangan = this.state.bilangan;
    let notasi = this.state.notasi;

    if (bilangan % 1 === 0 && bilangan !== 0) {
      notasi = bilangan + ' Bilangan ganjil';
    } else if (bilangan % 2 === 0 && bilangan !== 0) {
      notasi = bilangan + ' Bilangan genap';
    } else {
      notasi = 0;
    }
    this.setState({bilangan: bilangan, notasi: notasi});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="masukan angka"
          onChangeText={inputAngka => this.setState({bilangan: inputAngka})}
          // kalau ada perubahan langsung berubah
          value={this.state.gajiBulanan}
        />
        <Text style={styles.headerText}>Home Activity</Text>
        <Button
          title="Tambah"
          onPress={() => {
            this.jenisBilangan();
          }}
        />
        <Text>1: {this.state.notasi}</Text>
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

export default Redux;
