# react-native-smart-picker
React Native Smart Picker is easy wrapper for React Native Picker. Allows toggling the picker open and closed on iOS and native behaviour on Android.

* The `SmartPicker` scene should be wrapped in a `ScrollView` to allow the page to grow as the toggle opens
* Works on Android but there are no toggle effect (follows native UX guidelines)
* PRs welcome

## Demo

![Showtime](.github/react-native-toggle-picker.gif?raw=true "Showtime")

## Installation

```bash
npm i react-native-smart-picker --save
```

or

```bash
yarn add react-native-smart-picker --save
```

## Use

```javascript
import SmartPicker from 'react-native-smart-picker'

...

<ScrollView style={styles.container}>
  <View style={{flex: 1, marginTop: 20}}>
    <ScrollView style={styles.container}>
      <SmartPicker
        selectedValue='CZ'
        label='Set you favorite country'
        onValueChange={() => {this.handleChange}}
      >
        <Picker.Item label='Austria' value='A' />
        <Picker.Item label='Czechia' value='CZ' />
        <Picker.Item label='Germany' value='DE' />
        <Picker.Item label='Poland' value='PL' />
        <Picker.Item label='Slovakia' value='SLO' />
      </SmartPicker>
    </ScrollView>
  </View>
</ScrollView>
```

## Props

|Prop name | Default prop | Required | Note
| --- | --- | --- | --- |
| `androidBoxStyle` | `{}` | - | Custom styles |
| `androidPickerStyle` | `{}` | - | Custom styles |
| `androidPickerWrapperStyle` | `{}` | - | Custom styles |
| `androidBoxStyle` | `{}` | - | Custom styles |
| `arrowColor` | `rgb(178, 178, 178)` | - | - |
| `arrowSize` | `30` | - | - |
| `arrowDownType` | `'keyboard-arrow-down'` | - | Icon name from`react-native-vector-icons/MaterialIcons` |
| `arrowUpType` | `'keyboard-arrow-up'` | - | Icon name from`react-native-vector-icons/MaterialIcons` |
| `expanded` | `false` | - | Boolean if box should be expanded or not |
| `iosBoxStyle` | `{}` | - | Custom styles |
| `iosPickerStyle` | `{}` | - | Custom styles |
| `iosPickerWrapperStyle` | `{}` | - | Custom styles |
| `onValueChange` | - | Yes | Prop from RNPicker (expects func) |
| `label` | - | Yes | Left label on the left of title |
| `selectedValue` | - | Yes | Prop from RNPicker (expects any) |
| `value` | `null` | - | Value on the right title |
