import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import logoBPK from '../../assets/image/logo/logo_bpk.png';
import logoSIRA from '../../assets/image/logo/sira-yellow.png';
import gradient from '../../assets/image/gradients/teal-love.jpg';

const Spalsh = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [])
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Image source={logoSIRA} style={{
          width: 140, height: 100
        }} />
        {/* <Text style={styles.desc}>Sistem Informasi Realisasi Anggaran</Text> */}
      </View>
      <View style={styles.company}>
        <View style={styles.companyLogo}>
          <Image source={logoBPK} style={styles.logoBPK} />
        </View>
        <Text style={styles.companyName}>Badan Pemeriksa Keuangan</Text>
      </View>
    </View>
  )
}

export default Spalsh

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', alignItems: 'center',
    position: 'relative'
  },
  name: {
    fontFamily: fonts.semiBold, fontSize: 66,
    color: colors.black,
    letterSpacing: 12,
    textAlign: 'center'
  },
  desc: {
    fontFamily: fonts.medium,
    color: colors.black,
    marginTop: -12,
    fontSize: 14,
    textAlign: 'center'
  },
  company: {
    position: 'absolute', bottom: 32, left: 0,
    width: '100%',
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
  },
  companyLogo: {
    borderRadius: 40,
    padding: 2
  },
  logoBPK: {width: 25, height: 25},
  companyName: {
    fontFamily: fonts.regular,
    color: colors.black,
    fontSize: 12,
    marginLeft: 4
  },
})
