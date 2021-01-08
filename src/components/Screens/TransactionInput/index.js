import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View, BackHandler, Alert, Modal, Button } from 'react-native'
import { useSelector } from 'react-redux';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import CameraTransaction from '../../../utils/cameras/CameraTransaction';
import { TransactionForm } from './TransactionForm';

export const TransactionInput = () => {

  const screenWidth = Dimensions.get('window').width;

  const [captured, setCaptured] = useState(false)

  return (
    <View style={[styles.container, {width: screenWidth}]}>
      {captured ? <TransactionForm handler={() => setCaptured(false)} />  : <CameraTransaction handler={() => setCaptured(true)} /> }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  body: {
    padding: 16
  }
})
