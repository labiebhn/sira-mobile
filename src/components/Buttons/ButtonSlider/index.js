import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export const ButtonSlider = ({ title, active, handler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <Text style={[styles.title, active ? {color: colors.black} : {color: colors.grey}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 18,
  },
  line: {
    backgroundColor: colors.grey,
    height: 1.7, width: '100%',
    position: 'absolute', bottom: 0, left: 0,
  }
})
