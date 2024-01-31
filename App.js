// Hello my name is sai thkare
//The text Temperature Application looks like a CTA, change it. 👌
// the values should be parsed on float not in int which is leading to wrongoutputs. 👌
// there should be an another dropdown where user can select which unit hewants to convert the temperature. 👌
//we need to add F as third unit. 👌
//the output should be hidden initialy. 👌
//UNFOcus the input & close keyboard when keyboard is clicked. 👌
//1-validation for textinput that takes value of temp, 👌
//2-validation for dropdown that takes the from unit,👌
//3- validation for dropdown that takes the To unit. 👌
//use Pressable component can create a custom button 👌
//use a color pallete generated from coolor. 👌
//create a wrapper view and center the components vertically.

import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,Text,View,TextInput,Pressable,Alert,KeyboardAvoidingView,Keyboard} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const Changabledata = [
  { label: 'Celsius', value: 'Celsius' },
  { label: 'Kelvin', value: 'Kelvin' },
  { label: 'Fahrenheit', value: 'Fahrenheit' },
];

const Changeddata = [
  { label: 'Celsius', value: 'Celsius' },
  { label: 'Kelvin', value: 'Kelvin' },
  { label: 'Fahrenheit', value: 'Fahrenheit' },
];

export default function App() {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [selectedUnitChange, setSelectedUnitChange] = useState('');
  const [temperature, setTemperature] = useState('');
  const [formula, setFormula] = useState('');

  function changeTemperature() {
    if (!enteredNumber || !selectedUnit || !selectedUnitChange) {
      Alert.alert("Please fill all the values!!! 😐🤔┗( T﹏T )┛");
    } else {
      let result;

      if (selectedUnit === 'Celsius' && selectedUnitChange === 'Kelvin') {
        result = (parseFloat(enteredNumber) + 273.15).toFixed(2);
        setFormula(`${enteredNumber}°C + 273.15 = ${result}K`);
        setTemperature(result);
      } else if (selectedUnit === 'Celsius' && selectedUnitChange === 'Fahrenheit') {
        result = (parseFloat(enteredNumber) * 9 / 5 + 32).toFixed(2);
        setFormula(`${enteredNumber}°C * 9/5 + 32 = ${result}°F`);
        setTemperature(result);
      } else if (selectedUnit === 'Kelvin' && selectedUnitChange === 'Celsius') {
        result = (parseFloat(enteredNumber) - 273.15).toFixed(2);
        setFormula(`${enteredNumber}K - 273.15 = ${result}°C`);
        setTemperature(result);
      } else if (selectedUnit === 'Kelvin' && selectedUnitChange === 'Fahrenheit') {
        result = ((parseFloat(enteredNumber) - 273.15) * 9 / 5 + 32).toFixed(2);
        setFormula(`(${enteredNumber}K - 273.15) * 9/5 + 32 = ${result}°F`);
        setTemperature(result);
      } else if (selectedUnit === 'Fahrenheit' && selectedUnitChange === 'Celsius') {
        result = ((parseFloat(enteredNumber) - 32) * 5 / 9).toFixed(2);
        setFormula(`(${enteredNumber}°F - 32) * 5/9 = ${result}°C`);
        setTemperature(result);
      } else if (selectedUnit === 'Fahrenheit' && selectedUnitChange === 'Kelvin') {
        result = ((parseFloat(enteredNumber) - 32) * 5 / 9 + 273.15).toFixed(2);
        setFormula(`(${enteredNumber}°F - 32) * 5/9 + 273.15 = ${result}K`);
        setTemperature(result);
      } else {
        setTemperature(enteredNumber);
        setFormula('');
      }
    }
  }

  const getAvailableUnits = () => {
    const filteredData = [];

    for (const element of Changeddata) {
      if (element.value !== selectedUnit) {
        filteredData.push(element);
      }
    }

    return filteredData;
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <Pressable onPress={Keyboard.dismiss} accessible={false} style={{ flex: 1, borderWidth: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.parentDiv}>
            <Text style={styles.textStyles}>Temperature Application</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setEnteredNumber(text)}
                value={enteredNumber}
                placeholder="From"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                keyboardType="numeric"
              />
              <Dropdown
                style={[styles.dropdown, { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={Changabledata}
                placeholder="Degree"
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={selectedUnit}
                onChange={(item) => {
                  setSelectedUnit(item.value);
                }}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.input}>
                {temperature ? <Text style={styles.output}>{temperature}</Text> :
                  <Text style={{ opacity: 0.5 }}>Output</Text>}
              </View>
              <Dropdown
                style={[styles.dropdown, { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={getAvailableUnits()}
                placeholder="Degree"
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={selectedUnitChange}
                onChange={(item) => {
                  setSelectedUnitChange(item.value);
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Pressable onPress={changeTemperature} style={styles.button}>
                <Text style={styles.buttonText}>CONVERT</Text>
              </Pressable>
            </View>
            {formula !== '' && (
              <View style={styles.formulaBox}>
                <Text style={styles.formula}>Formula --></Text>
                <Text style={styles.formulaText}>{formula}</Text>
                
              </View>
            )}
          </View>
        </SafeAreaView>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#004080',
  },
  parentDiv: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#F8F8F8",
    width: '90%',
    paddingHorizontal: 10,
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 0,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    paddingVertical: 20,
  },
  output: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  dropdown: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: '45%',
    marginHorizontal: '5%',
    marginVertical: 10,
    padding: 15,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000080',
  },
  input: {
    flexDirection: 'column',
    height: 40,
    padding: 10,
    width: '50%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  buttonContainer: {
    height: 40,
    margin: 12,
    backgroundColor: 'black',
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: 'black',

  },
  formulaBox: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10,
    borderWidth: 1,
    
  },
  formulaText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  },
  formula: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    
  },
});


