import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import iconPlus from '../../../assets/icons/curency-plus.png';
import iconMin from '../../../assets/icons/curency-min.png';

export const ListRecentTransaction = ({ 
  image, 
  name, 
  plus=true, 
  total=0,
  nip,
  date,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <View style={styles.ava}>
          <Image source={image} style={styles.avaImage} />
        </View>
      </View>
      <View style={{flex: 10, paddingHorizontal: 6}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.nip}>
          {nip ? `NIP.${nip}` : null}
        </Text>
      </View>
      <View style={{flex: 10}}>
        <View style={styles.total}>
          <Image source={plus ? iconPlus : iconMin} style={styles.totalIcon} />
          <Text style={[styles.totalNumber, plus ? {color: colors.green} : {color: colors.red}]}>Rp. {total}</Text>
        </View>
      </View>
      <Text style={{
        position: 'absolute',
        top: 0, right: 0,
        fontFamily: fonts.regular,
        fontSize: 9,
        color: colors.grey
      }}>{date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.disable,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 8,
    position: 'relative'
  },
  ava: {
    overflow: 'hidden',
    borderRadius: 38,
    width: 33
  },
  avaImage: {
    width: 33, height: 33
  },
  name: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.black
  },
  nip: {
    fontFamily: fonts.regular,
    color: colors.black,
    letterSpacing: .4,
    fontSize: 10,
    marginTop: -2
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  totalIcon: {
    width: 16, height: 16,
    marginRight: 4
  },
  totalNumber: {
    fontFamily: fonts.regular,
    fontSize: 16
  },
})
