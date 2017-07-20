import React, { PropTypes, Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Animated, Picker, Platform, StyleSheet } from 'react-native'
import ToggleBox from 'react-native-togglebox'

class TogglePicker extends Component {
  renderPicker = () => (
    <Picker
      selectedValue={this.props.selectedValue}
      onValueChange={this.props.onValueChange}
      style={Platform.OS === 'ios' ? [styles.iosPicker, this.props.iosPickerStyle] : [styles.androidPicker, this.props.androidPickerStyle]}
    >
      {this.props.children}
    </Picker>
  )

  renderIos = () => (
    <ToggleBox label={this.props.label} value={this.props.value} style={StyleSheet.flatten([styles.toggleBox, this.props.iosBoxStyle])}>
      <View style={this.props.iosPickerWrapperStyle}>
        {this.renderPicker()}
      </View>
    </ToggleBox>
  )

  renderAndroid = () => (
    <View style={[styles.androidBoxStyle, this.props.androidBoxStyle]}>
      <Text>
        {this.props.label}
      </Text>
      <View style={StyleSheet.flatten([styles.androidPickerWrapper, this.props.androidPickerWrapper])}>
        {this.renderPicker()}
      </View>
    </View>
  )

  render() {
    return (
      Platform.OS === 'ios' ?
        this.renderIos() : this.renderAndroid()
    )
  }
}

TogglePicker.propTypes = {
  androidBoxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  androidPickerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  androidPickerWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  arrowColor: PropTypes.string,
  arrowDownType: PropTypes.string,
  arrowSize: PropTypes.number,
  arrowUpType: PropTypes.string,
  enabled: PropTypes.bool,
  expanded: PropTypes.bool,
  iosBoxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  iosPickerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  iosPickerWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  onValueChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

TogglePicker.defaultProps = {
  androidBoxStyle: {},
  androidPickerStyle: {},
  androidPickerWrapperStyle: {},
  androidBoxStyle: {},
  arrowColor: 'rgb(178, 178, 178)',
  arrowDownType: 'keyboard-arrow-down',
  arrowSize: 30,
  arrowUpType: 'keyboard-arrow-up',
  expanded: false,
  iosBoxStyle: {},
  iosPickerStyle: {},
  iosPickerWrapperStyle: {},
  value: '',
}

export default TogglePicker
