import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export const ButtonNav = ({ icon, counter = null, handler, disable = false }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handler} disabled={disable}>
      <Image source={icon} style={{ width: 25, height: 25 }} />
      {counter ? 
        <View style={styles.counter}>
          <Text style={styles.counterText}>{counter}</Text>
        </View> : null
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginHorizontal: 4,
    position: 'relative'
  },
  counter: {
    backgroundColor: colors.red,
    width: 17, height: 17,
    position: 'absolute', top: 0, right: 0,
    borderRadius: 30,
    justifyContent: 'center', alignItems: 'center'
  },
  counterText: {
    color: 'white',
    fontFamily: fonts.medium,
    fontSize: 9,
  },
})
