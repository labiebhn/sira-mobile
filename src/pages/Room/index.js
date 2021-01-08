import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ButtonNav, ButtonText } from '../../components/Buttons';
import { NavbarBottom, NavbarBPK } from '../../components/Navbar'
import { fonts } from '../../utils/fonts';
import iconAdd from '../../assets/icons/add-folder.png';
import { colors } from '../../utils/colors';

const Room = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavbarBPK />
        <View style={styles.body}>
          <View style={styles.code}>
            <TextInput 
              autoFocus={true}
              keyboardType='numeric'
              maxLength={6}
              placeholder="Kode Enroll"
              style={styles.inputCode}
            />
          </View>
          <View style={styles.register}>
            <ButtonText 
              icon={iconAdd}
              title='Buat Ruangan'
              handler={() => navigation.navigate('CreateRoom')}
            />
          </View>
        </View>
      <NavbarBottom direct={(e) => navigation.replace(e)} page='Room' />
    </View>
  )
}

export default Room

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  body: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
    position: 'relative'
  },
  code: {
    width: '100%',
    position: 'relative'
  },
  inputCode: {
    fontFamily: fonts.medium,
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
  },
  register: {
    position: 'absolute', top: 24, right: 24
  },
})
