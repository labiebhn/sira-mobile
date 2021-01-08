import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export const ButtonBlock = ({ 
  title, handler, 
  bgColor=colors.green, 
  txtColor='white' 
}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: bgColor}]} onPress={handler}>
      <Text style={[styles.title, {color: txtColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    elevation: 0,
    marginVertical: 4
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 18
  }
})
