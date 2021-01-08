import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import iconHome from '../../../assets/icons/home.png';
import iconHomeFill from '../../../assets/icons/home-fill.png';
import iconPlus from '../../../assets/icons/plus.png';
import iconPlusFill from '../../../assets/icons/plus-fill.png';
import iconUser from '../../../assets/icons/user.png';
import iconUserFill from '../../../assets/icons/user-fill.png';
import { ButtonNav } from '../../Buttons';

export const NavbarBottom = ({ direct, page }) => {

  return (
    <View style={styles.container}>
      <ButtonNav 
        icon={page === 'Home' ? iconHomeFill : iconHome} 
        handler={() => direct('Home')} 
      />
      <ButtonNav 
        icon={page === 'Room' ? iconPlusFill : iconPlus} 
        handler={() => direct('Room')} 
      />
      <ButtonNav 
        icon={page === 'Profile' ? iconUserFill : iconUser} 
        handler={() => direct('Profile')} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 8, paddingHorizontal: 32,
    borderTopColor: colors.disable,
    borderTopWidth: .5,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  }
})
