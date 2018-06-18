import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      DeviceIMEI: '',
    }
  }

  getDeviceIMEI = () => {
    const IMEI = require('react-native-imei')
    this.setState({
      DeviceIMEI: IMEI.getImei(),
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.DeviceIMEI}</Text>
        <TouchableOpacity onPress={this.getDeviceIMEI}>
          <Text> CLICK HERE TO GET DEVICE IMEI </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
