import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export const ButtonFilledVert = ({ title, icon, handler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    width: 58, height: 68,
    borderRadius: 6,
    justifyContent: 'center', alignItems: 'center',
    elevation: 2,
    marginHorizontal: 12
  },
  title: {
    fontFamily: fonts.medium,
    color: 'white',
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center'
  },
  icon: {
    width: 34, height: 34
  },
})
