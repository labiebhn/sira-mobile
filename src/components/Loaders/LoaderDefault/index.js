import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'

export const LoaderDefault = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.black} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
})
