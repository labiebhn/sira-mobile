import React, { useEffect, useState } from 'react'
import { ImageBackground, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { colors } from '../../../utils/colors';
import gradient from '../../../assets/image/gradients/ibiza-sunset.jpg';
import { fonts } from '../../../utils/fonts';
import { Col3 } from '../../Grid';

export const HeaderRoom = ({ title, balance, organization, detail }) => {

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ImageBackground source={gradient} style={styles.bodyBackground}>
          <View style={styles.description}>
            <View style={{flex: 6}}>
              <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.descriptionTitle}>{title}</Text>
              </ScrollView>
            </View>
            <View style={{flex: 5, paddingLeft: 8}}>
              <Col3 title='Kode' value='887643' styles={styles.descriptionDetail} />
              <Col3 title='Dibuat' value='12/12/2020' styles={styles.descriptionDetail} />
              <Col3 title='Tenggat' value='08/04/2021' styles={styles.descriptionDetail} />
              <Col3 title='Ketua' value='Labieb H' styles={styles.descriptionDetail} />
              <Col3 title='Anggota' value='20 Orang' styles={styles.descriptionDetail} />
            </View>
          </View>
          <View style={styles.balance}>
            <View style={{flex: 6}}>
              <Text style={styles.balanceTitle}>SALDO</Text>
              <Text style={styles.balanceTotal}>Rp. {balance}</Text>
              <Text style={styles.descriptionDetail}>Anggaran : Rp. 12.500.000</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.organization}>{organization}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center', alignItems: 'center',
    padding: 16
  },
  body: {
    backgroundColor: colors.red,
    borderRadius: 18,
    elevation: 4,
    overflow: 'hidden'
  },
  bodyBackground: {
    width: 280, height: 160,
    padding: 16,
  },
  description: {
    flex: 1,
    flexDirection: 'row',
  },
  descriptionTitle: {
    color: 'white',
    fontFamily: fonts.medium,
    fontSize: 17,
  },
  descriptionDetail: {
    color: 'white',
    fontFamily: fonts.regular,
    fontSize: 11
  },  
  balance: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row', alignItems: 'flex-end'
  },
  balanceTitle: {
    color: 'white',
    fontFamily: fonts.regular,
    fontSize: 16,
    letterSpacing: 3
  },
  balanceTotal : {
    color: 'white',
    fontFamily: fonts.medium,
    fontSize: 22
  },
  organization: {
    color: colors.yellow,
    fontFamily: fonts.medium,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16
  },
})
