import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { NavbarBottom, NavbarBPK } from '../../components/Navbar'

const Profile = ({ navigation }) => {

  const [scrollY, setScrollY] = useState(false);

  return (
    <View style={styles.container}>
      <NavbarBPK isScroll={scrollY} />
      <ScrollView
         showsVerticalScrollIndicator={false}
         onScroll={e => setScrollY(e.nativeEvent.contentOffset.y > 7 ? true : false )}
      >
        <Text>Profile</Text>
      </ScrollView>
      <NavbarBottom direct={(e) => navigation.replace(e)} page='Profile' />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
