import React, {Component} from 'react'; //1
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'; //1
//17 import component redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; //connect react component ke redux store
import {actionGanjilGenap} from './actions/Index';
//1
class AppGanjilGenap extends Component {
  prosesSubmit = () => {
    //3
    alert('yosh');
  };

  //1
  render() {
    //2 button dan texinput
    //3 onPress={this.prosesSubmit}
    //4 install redux
    //-npm install  --save redux
    //-yarn add react redux
    //-yarn start
    //5 pindah ke folder Actions

    return (
      <View>
        <Text>Aplikasi Ganjil Genap</Text>
        <TextInput placeholder="input angka" />
        <Button title="proses" onPress={this.prosesSubmit} />
      </View>
    );
  }
}

//18
function mapStateToProps(state) {
  //mengambil semua data dari file reducer/indeks.js
  console.log('mengambil data dari store reducers');
  console.log(state);
  return {
    listNumberFormReducers: state,
  };
}
//19
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionGanjilGenap: actionGanjilGenap}, dispatch);
}
//export default AppGanjilGenap;
//20
export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AppGanjilGenap);
