import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export const ButtonText = ({ icon, title, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center'
  },
  icon: {
    width: 18, height: 18,
    marginRight: 4
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 14,
    textAlign: 'left',
    color: colors.black
  },
})
