import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import iconFolder from '../../../assets/icons/folder.png';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

export const ListRoom = () => {
  return (
    <View style={{
      padding: 8,
      flexDirection: 'row', alignItems: 'center'
    }}>
      <Image source={iconFolder} style={{
        width: 28, height: 28
      }} />
      <Text style={{
        fontFamily: fonts.medium,
        fontSize: 16,
        marginLeft: 6,
        flex: 1,
        color: colors.black
      }}>Pembangunan Tol Bandung Barat</Text>
      <Text style={{
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.black
      }}>13/12/2020</Text>
    </View>
  )
}

// const styles = StyleSheet.create({})
