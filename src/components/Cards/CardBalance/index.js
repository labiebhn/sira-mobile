import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import iconPlus from '../../../assets/icons/curency-plus.png';
import iconMin from '../../../assets/icons/curency-min.png';

export const CardBalance = ({ title, min=false, total=0  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.balance}>
        <ScrollView 
          horizontal={true}
        >
          <View style={styles.balanceContainer}>
            <Image source={min ? iconMin : iconPlus} style={styles.icon} />
            <Text style={[styles.balanceTotal, min ? { color: colors.red } : null]}>Rp. {total}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 160, height: 60,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.disable,
  },
  title: {
    fontFamily: fonts.regular,
    color: colors.grey,
    fontSize: 14,
  },
  balance: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 4
  }, 
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  balanceTotal: {
    fontFamily: fonts.medium,
    fontSize: 20,
    color: colors.green
  },
})
