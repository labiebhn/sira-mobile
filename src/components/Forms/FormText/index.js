import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CurrencyInput from 'react-native-currency-input'
import { color } from 'react-native-reanimated'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export const FormText = ({ 
  label='Label',
  type='default',
  handler,
  required = true,
}) => {

  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>{label}</Text>
        {required ? <Text style={styles.required}>*</Text> : null }
      </View>
      {type === 'default' ?
        <TextInput
          keyboardType={type}
          style={[styles.input, {borderColor: value ? colors.green : colors.black }]}
          onChangeText={(e) => {
            setValue(e);
            handler(e);
          }}
        /> :
        <CurrencyInput 
          value={value}
          onChangeValue={setValue}
          delimiter="."
          separator="."
          precision={0}
          style={[styles.input, {borderColor: value ? colors.green : colors.black }]}
          onChangeText={(e) => handler(e)}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32
  },  
  label: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.black,
  },
  required: { 
    color: colors.red, 
    marginLeft: 4 
  },
  input: {
    borderColor: colors.black,
    borderBottomWidth: .7,
    fontFamily: fonts.regular,
    fontSize: 16,
    padding: 6,
    color: colors.black,
    marginTop: -4
  },
  alert: {
    fontFamily: fonts.medium,
    fontSize: 10,
    marginVertical: 4
  },
})
