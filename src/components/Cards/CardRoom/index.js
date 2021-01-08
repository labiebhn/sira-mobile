import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import gradient from '../../../assets/image/gradients/sunkist.jpg';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

export const CardRoom = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        color: 'white',
        fontFamily: fonts.regular,
        fontSize: 26
      }}>Pembangunan Jalan Tol</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%', height: 160,
    backgroundColor: colors.green,
    marginBottom: 24,
    elevation: 5,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    padding: 16,
  }

})
