import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { ButtonSlider } from '../../Buttons';

export const NavbarTransaction = ({ scroll, refPage }) => {
  const screenWidh = Dimensions.get('window').width;

  const handleScrollToIndex = i => {
    refPage.scrollToIndex({ index: i })
  }

  return (
    <View style={styles.container}>
      <ButtonSlider title='Lihat Transaksi' active={scroll === 0 ? true : false} handler={() => handleScrollToIndex(0)} />
      <ButtonSlider title='Tambah Transaksi' active={scroll === screenWidh ? true : false} handler={() => handleScrollToIndex(1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: .5,
    borderColor: colors.disable
  }
})
