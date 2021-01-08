import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import iconThumbnail from '../../../assets/icons/image-radius.png';

export const CardHome = ({ title, price, thumbnail, enroll, handler }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handler}>
      <View style={styles.thumbnail}>
        {thumbnail ? 
          <Image source={thumbnail} style={styles.image} /> : <Image source={iconThumbnail} style={{width: 65, height: 65}} />
        }
        <View style={styles.enroll}>
          <Text style={styles.enrollText}>34566</Text>
        </View>
      </View>
      <View style={{padding: 12}}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.bodyText}>Anggaran : Rp. 12.500.000</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 155,
    margin: 4,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: .8,
    borderColor: colors.disable
  },
  thumbnail: {
    backgroundColor: 'white',
    width: '100%', height: 145,
    justifyContent: 'center', alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: '100%', height: 145,
  },
  enroll: {
    width: '100%',
    position: 'absolute',
    bottom: 0, left: 0,
    padding: 8,
    flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'
  },
  enrollText: {
    backgroundColor: colors.transparent,
    paddingVertical: 4, paddingHorizontal: 8,
    borderRadius: 12,
    fontFamily: fonts.medium,
    fontSize: 12,
    letterSpacing: 1
  },
  header: {
    marginBottom: 6
  },
  title: {
    color: colors.black,
    fontFamily: fonts.semiBold,
    fontSize: 16,
    marginTop: 0,
    lineHeight: 18,
  },
  bodyText: {
    fontFamily: fonts.medium,
    color: colors.black,
    fontSize: 12
  },
})
