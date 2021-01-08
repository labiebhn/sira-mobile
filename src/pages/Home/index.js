import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavbarActivity, NavbarBottom, NavbarBPK } from '../../components/Navbar';
import { fonts } from '../../utils/fonts';
import { colors } from '../../utils/colors';
import { CardHome, CardRoom } from '../../components/Cards';
import { ListRoom } from '../../components/Lists';
import thumbnailRoad from '../../assets/image/contents/road.jpeg';
import thumbnailWisma from '../../assets/image/contents/wisma.jpeg';
import thumbnailPeople from '../../assets/image/contents/people.jpeg';
import thumbnailSawah from '../../assets/image/contents/sawah.jpeg';

const Home = ({ navigation }) => {
  
  const [scrollY, setScrollY] = useState(false);

  const directViewRoom = () => {
    navigation.navigate('ViewRoom')
  }

  return (
    <View style={styles.container}>
      <NavbarBPK isScroll={scrollY} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={e => setScrollY(e.nativeEvent.contentOffset.y > 7 ? true : false )}
      >
        <View style={styles.body}>
          {/* <NavbarActivity /> */}
          <View style={styles.cardContainer}>
            <CardHome title='Perbaikan Jalan Margahayu' thumbnail={thumbnailRoad} handler={directViewRoom} />
            <CardHome title='Pembangunan Gedung Wisma Atelit 2020' thumbnail={thumbnailWisma} />
            <CardHome title='Bantuan Sembako untuk Masyarakat Desa Cibogo' thumbnail={thumbnailPeople} />
            <CardHome title='Pembentukan Koperasi Pertanian' thumbnail={thumbnailSawah} />
            <CardHome title='Perbaikan Jalan Margahayu' thumbnail={thumbnailRoad} />
            <CardHome title='Pembangunan Gedung Wisma Atelit 2020' thumbnail={thumbnailWisma} />
            <CardHome title='Bantuan Sembako untuk Masyarakat Desa Cibogo' thumbnail={thumbnailPeople} />
          </View>
        </View>
      </ScrollView>
      <NavbarBottom direct={(e) => navigation.replace(e)} page='Home' />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  body: {
    paddingHorizontal: 16, 
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', alignItems: 'flex-end',
  },
})
