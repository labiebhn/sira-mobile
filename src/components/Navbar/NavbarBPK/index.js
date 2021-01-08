import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import iconSearch from '../../../assets/icons/search.png';
import iconBell from '../../../assets/icons/bell.png';
import iconHambMenu from '../../../assets/icons/hamburger-menu.png';
import { ButtonNav } from '../../Buttons/ButtonNav';
import { fonts } from '../../../utils/fonts';
import { colors } from '../../../utils/colors';

export const NavbarBPK = ({ isScroll }) => {
  return (
    <View style={[styles.navbar, isScroll ? {elevation: 1} : null ]}>
      <View style={{flex: 2}}>
        <ButtonNav icon={iconHambMenu} />
      </View>
      <View style={styles.action}>
        <ButtonNav icon={iconSearch} />
        <ButtonNav icon={iconBell} counter={6} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 6, paddingHorizontal: 14,
  },
  action: {
    flex: 1, 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',
  },
  logo: {
    fontFamily: fonts.semiBold,
    fontSize: 36,
    color: colors.black,
    letterSpacing: 8,
  },
  logoDesc: {
    fontFamily: fonts.regular,
    fontSize: 8,
    color: colors.black,
    marginTop: -8, marginLeft: 2,
    letterSpacing: .7
  },
})
