import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export const FormDate = ({ 
  label='Label', 
  handler, 
  date,
  required=true 
}) => {

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>{label}</Text>
        {required ? <Text style={styles.required}>*</Text> : null }
      </View>
      <View style={{
        justifyContent: 'center', alignItems: 'center'
      }}>
        <DatePicker
          date={date}
          mode='date'
          is24hourSource='device'
          locale='id'
          androidVariant='nativeAndroid'
          onDateChange={(e) => handler(e)}
          style={{width: 250}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
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
})
